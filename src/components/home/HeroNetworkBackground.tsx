"use client";

import { useRef, useEffect, useCallback, useState } from "react";

const COLORS = {
  bg: "#0B1320",
  accentBlue: "#00A8E8",
  accentPurple: "#6C63FF",
} as const;

type NodeType = "center" | "focal" | "normal";
type Layer = "back" | "front";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: NodeType;
  pulsePhase: number;
  baseOpacity: number;
  layer: Layer;
}

interface Connection {
  a: number;
  b: number;
  flowPhase: number;
  hasParticle: boolean;
  particleProgress: number;
  /** Ters yönde veri akışı (veri alsın veri versin) */
  reverseProgress: number;
}

/** Sade: 5 küme (sol, orta sol, orta sağ, sağ üst, sağ alt). Veri akışı + hareket. */
function createNodes(width: number, height: number, isMobile: boolean): Node[] {
  const nodes: Node[] = [];
  const mobile = isMobile;

  const addCluster = (
    cx: number,
    cy: number,
    count: number,
    radius: number,
    baseOpacity: number
  ) => {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 - Math.PI * 0.5;
      const r = radius * (0.55 + Math.random() * 0.45);
      nodes.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.04,
        vy: (Math.random() - 0.5) * 0.04,
        radius: mobile ? 2.5 : 3,
        type: "normal",
        pulsePhase: (i / count) * Math.PI * 2,
        baseOpacity: baseOpacity + Math.random() * 0.15,
        layer: i % 2 === 0 ? "back" : "front",
      });
    }
  };

  const pushCenter = (cx: number, cy: number, centerRadius: number, opacity = 0.9) => {
    nodes.push({
      x: cx,
      y: cy,
      vx: 0,
      vy: 0,
      radius: centerRadius,
      type: "center",
      pulsePhase: 0,
      baseOpacity: opacity,
      layer: "front",
    });
  };

  // 1) Sol — metin yanı
  const c1x = width * 0.28;
  const c1y = height * 0.5;
  pushCenter(c1x, c1y, mobile ? 6 : 7, 0.82);
  addCluster(c1x, c1y, mobile ? 4 : 5, mobile ? 32 : 42, 0.45);

  // 2) Orta sol
  const c2x = width * 0.46;
  const c2y = height * 0.48;
  pushCenter(c2x, c2y, mobile ? 6 : 8, 0.88);
  addCluster(c2x, c2y, mobile ? 4 : 5, mobile ? 36 : 48, 0.5);

  // 3) Orta sağ
  const c3x = width * 0.64;
  const c3y = height * 0.52;
  pushCenter(c3x, c3y, mobile ? 7 : 9, 0.9);
  addCluster(c3x, c3y, mobile ? 4 : 5, mobile ? 38 : 50, 0.52);

  // 4) Sağ üst
  const c4x = width * 0.8;
  const c4y = height * 0.32;
  pushCenter(c4x, c4y, mobile ? 7 : 9, 0.9);
  addCluster(c4x, c4y, mobile ? 4 : 5, mobile ? 36 : 48, 0.5);

  // 5) Sağ alt
  const c5x = width * 0.82;
  const c5y = height * 0.72;
  pushCenter(c5x, c5y, mobile ? 7 : 8, 0.88);
  addCluster(c5x, c5y, mobile ? 4 : 5, mobile ? 34 : 46, 0.5);

  return nodes;
}

/** Bağlantılar; her bağlantıda çift yönlü veri akışı (alsın + versin) */
function createConnections(nodes: Node[], maxDist: number): Connection[] {
  const connections: Connection[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      if (dx * dx + dy * dy <= maxDist * maxDist) {
        connections.push({
          a: i,
          b: j,
          flowPhase: Math.random() * Math.PI * 2,
          hasParticle: true,
          particleProgress: Math.random(),
          reverseProgress: Math.random(),
        });
      }
    }
  }
  return connections;
}

/** Çizgiler: görünür, ince; kümeler arası bağlantılar belirgin */
function drawLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  t: number,
  flowPhase: number,
  reducedMotion: boolean
) {
  const flow = reducedMotion ? 0 : (t * 0.1 + flowPhase) % (Math.PI * 2);
  const pulse = Math.sin(flow) * 0.5 + 0.5;
  ctx.globalAlpha = reducedMotion ? 0.1 : 0.08 + pulse * 0.045;
  ctx.strokeStyle = COLORS.accentBlue;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawFlowParticle(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  progress: number
) {
  const x = x1 + (x2 - x1) * progress;
  const y = y1 + (y2 - y1) * progress;
  const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
  g.addColorStop(0, "rgba(0,168,232,0.6)");
  g.addColorStop(0.4, "rgba(0,168,232,0.2)");
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(x, y, 7, 0, Math.PI * 2);
  ctx.fill();
}

/** Node: merkez/focal yumuşak glow, diğerleri sade; arka katman silik */
function drawNode(
  ctx: CanvasRenderingContext2D,
  node: Node,
  t: number,
  reducedMotion: boolean
) {
  const pulse = reducedMotion ? 1 : 0.94 + 0.06 * Math.sin(t * 0.45 + node.pulsePhase);
  const r = node.radius * pulse;
  const layerOpacity = node.layer === "back" ? 0.55 : 1;
  let opacity = node.baseOpacity * layerOpacity;
  if (!reducedMotion && node.type === "normal") {
    opacity *= 0.92 + 0.08 * Math.sin(t * 0.35 + node.pulsePhase * 0.5);
  }

  ctx.globalAlpha = opacity;

  if (node.type === "center") {
    const glowR = r * 4.5;
    const gr = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
    gr.addColorStop(0, "rgba(0,168,232,0.28)");
    gr.addColorStop(0.4, "rgba(108,99,255,0.06)");
    gr.addColorStop(0.75, "rgba(0,168,232,0.02)");
    gr.addColorStop(1, "transparent");
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = COLORS.accentBlue;
    ctx.globalAlpha = 0.88;
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (node.type === "focal") {
    const glowR = r * 3;
    const gr = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowR);
    gr.addColorStop(0, "rgba(0,168,232,0.18)");
    gr.addColorStop(0.55, "rgba(0,168,232,0.04)");
    gr.addColorStop(1, "transparent");
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(node.x, node.y, glowR, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = node.type === "focal" ? COLORS.accentBlue : COLORS.accentPurple;
  ctx.globalAlpha = opacity * (node.type === "focal" ? 0.85 : 0.5);
  ctx.beginPath();
  ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
  ctx.fill();
}

/** Hafif radial derinlik + vignette */
function drawBackgroundDepth(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const cx = w * 0.72;
  const cy = h * 0.5;
  const R = Math.max(w, h) * 0.6;
  const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
  g.addColorStop(0, "rgba(0,168,232,0.04)");
  g.addColorStop(0.5, "transparent");
  g.addColorStop(1, "transparent");
  ctx.fillStyle = g;
  ctx.globalAlpha = 1;
  ctx.fillRect(0, 0, w, h);
}

function drawVignette(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const cx = w / 2;
  const cy = h / 2;
  const R = Math.max(w, h) * 0.82;
  const g = ctx.createRadialGradient(cx, cy, R * 0.25, cx, cy, R);
  g.addColorStop(0, "transparent");
  g.addColorStop(0.55, "transparent");
  g.addColorStop(1, "rgba(11,19,32,0.4)");
  ctx.fillStyle = g;
  ctx.globalAlpha = 1;
  ctx.fillRect(0, 0, w, h);
}

export function HeroNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const rafRef = useRef<number>(0);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    const width = Math.max(canvas.offsetWidth || 800, 1);
    const height = Math.max(canvas.offsetHeight || 600, 1);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    nodesRef.current = createNodes(width, height, isMobile);
    connectionsRef.current = createConnections(
      nodesRef.current,
      isMobile ? 140 : 280
    );
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;

    const tick = (t: number) => {
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;

      if (cw !== w || ch !== h) {
        w = cw;
        h = ch;
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        nodesRef.current = createNodes(w, h, isMobile);
        connectionsRef.current = createConnections(
          nodesRef.current,
          isMobile ? 140 : 280
        );
      }

      ctx.clearRect(0, 0, w, h);
      const leftBound = w * 0.04;
      const time = t * 0.001;

      if (!reducedMotion) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < leftBound + node.radius) node.vx = Math.abs(node.vx) * 0.5;
          if (node.x > w - node.radius) node.vx = -Math.abs(node.vx) * 0.5;
          if (node.y < node.radius) node.vy = Math.abs(node.vy) * 0.5;
          if (node.y > h - node.radius) node.vy = -Math.abs(node.vy) * 0.5;
        }
        for (const conn of connections) {
          conn.particleProgress = (conn.particleProgress + 0.01) % 1;
          conn.reverseProgress = (conn.reverseProgress - 0.009 + 1) % 1;
        }
      }

      drawBackgroundDepth(ctx, w, h);

      for (const node of nodes) {
        if (node.layer !== "back") continue;
        drawNode(ctx, node, time, reducedMotion);
      }
      ctx.globalAlpha = 1;

      for (const conn of connections) {
        const a = nodes[conn.a];
        const b = nodes[conn.b];
        if (!a || !b) continue;
        drawLine(ctx, a.x, a.y, b.x, b.y, time, conn.flowPhase, reducedMotion);
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion) {
        for (const conn of connections) {
          if (!conn.hasParticle) continue;
          const a = nodes[conn.a];
          const b = nodes[conn.b];
          if (!a || !b) continue;
          drawFlowParticle(ctx, a.x, a.y, b.x, b.y, conn.particleProgress);
          drawFlowParticle(ctx, b.x, b.y, a.x, a.y, conn.reverseProgress);
        }
      }
      ctx.globalAlpha = 1;

      for (const node of nodes) {
        if (node.layer !== "front") continue;
        drawNode(ctx, node, time, reducedMotion);
      }
      ctx.globalAlpha = 1;

      drawVignette(ctx, w, h);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden
    />
  );
}
