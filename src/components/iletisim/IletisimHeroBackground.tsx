"use client";

import { useRef, useEffect } from "react";

/** Çok hafif network — ana sayfadaki kadar yoğun değil, sadece hafif derinlik */
export function IletisimHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const nodes = [
      { x: w * 0.85, y: h * 0.25 },
      { x: w * 0.9, y: h * 0.5 },
      { x: w * 0.82, y: h * 0.75 },
      { x: w * 0.7, y: h * 0.4 },
      { x: w * 0.75, y: h * 0.6 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(0,168,232,0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (!a || !b) continue;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          if (dx * dx + dy * dy < 180 * 180) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(0,168,232,0.08)";
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    draw();
    const onResize = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.scale(dpr, dpr);
      nodes[0].x = cw * 0.85;
      nodes[0].y = ch * 0.25;
      nodes[1].x = cw * 0.9;
      nodes[1].y = ch * 0.5;
      nodes[2].x = cw * 0.82;
      nodes[2].y = ch * 0.75;
      nodes[3].x = cw * 0.7;
      nodes[3].y = ch * 0.4;
      nodes[4].x = cw * 0.75;
      nodes[4].y = ch * 0.6;
      draw();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
      aria-hidden
    />
  );
}
