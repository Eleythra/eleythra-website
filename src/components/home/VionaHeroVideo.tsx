"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/** Kaynak 400×700 → en-boy oranı 4:7 */
const VIDEO_SRC = "/media/viona2.mp4";

/**
 * Tarayıcılar çoğu sitede kullanıcı jesti olmadan sesli otomatik oynatmayı engeller.
 * Bu bileşen: önce sessiz başlatır; bazı masaüstü tarayıcılarda (site “güveni” yüksekse)
 * sessiz oynatma sonrası sessiz kapatmayı dener. Kullanıcı ses açınca bir daha sessize çekilmez.
 */

export function VionaHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewStartedRef = useRef(false);
  const canPlayRetryRef = useRef(false);
  const autoUnmuteTriedRef = useRef(false);
  const soundUnlockedRef = useRef(false);
  const [muted, setMuted] = useState(true);

  const tryPlayMuted = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;

    /** Kullanıcı veya otomatik deneme sesi açtıysa asla tekrar sessize alma */
    if (soundUnlockedRef.current) {
      void v.play().catch(() => {});
      return;
    }

    v.muted = true;
    setMuted(true);

    const once = async (): Promise<boolean> => {
      try {
        await v.play();
        return true;
      } catch {
        return false;
      }
    };

    if (await once()) {
      /** Bir kerelik: bazı ortamlarda jest olmadan ses açılabiliyor (nadiren) */
      if (!autoUnmuteTriedRef.current && !soundUnlockedRef.current) {
        autoUnmuteTriedRef.current = true;
        try {
          v.muted = false;
          setMuted(false);
          await v.play();
          soundUnlockedRef.current = true;
        } catch {
          v.muted = true;
          setMuted(true);
          await v.play().catch(() => {});
        }
      }
      return;
    }
    await new Promise((r) => requestAnimationFrame(r));
    if (await once()) return;
    await new Promise((r) => setTimeout(r, 40));
    if (await once()) return;
    await new Promise((r) => setTimeout(r, 160));
    await once();
  }, []);

  const unlockSound = useCallback(() => {
    const v = videoRef.current;
    if (!v || soundUnlockedRef.current) return;

    v.muted = false;
    setMuted(false);
    void v
      .play()
      .then(() => {
        soundUnlockedRef.current = true;
      })
      .catch(() => {
        /** Başarısızsa tekrar dene: jest hâlâ geçerli olabilir */
        void v.play().then(
          () => {
            soundUnlockedRef.current = true;
          },
          () => {
            v.muted = true;
            setMuted(true);
          }
        );
      });
  }, []);

  useLayoutEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const start = () => {
      if (inViewStartedRef.current) return;
      inViewStartedRef.current = true;
      requestAnimationFrame(() => {
        void tryPlayMuted();
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            obs.disconnect();
            return;
          }
        }
      },
      { threshold: 0.01, rootMargin: "80px 0px 80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [tryPlayMuted]);

  const onCanPlay = useCallback(() => {
    const v = videoRef.current;
    if (!v || soundUnlockedRef.current || !inViewStartedRef.current || !v.paused || canPlayRetryRef.current) return;
    canPlayRetryRef.current = true;
    void tryPlayMuted();
  }, [tryPlayMuted]);

  useEffect(() => {
    const opts = { once: true, passive: true } as const;
    const onFirst = () => unlockSound();
    document.addEventListener("pointerdown", onFirst, opts);
    document.addEventListener("touchstart", onFirst, opts);
    window.addEventListener("keydown", onFirst, opts);
    return () => {
      document.removeEventListener("pointerdown", onFirst);
      document.removeEventListener("touchstart", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, [unlockSound]);

  return (
    <div ref={containerRef} className="relative w-full" aria-label="Viona tanıtım videosu">
      <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:max-w-[440px] lg:max-w-[min(100%,480px)]">
        <div className="relative aspect-[4/7] w-full overflow-hidden [contain:layout]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full touch-manipulation select-none object-cover object-center will-change-transform"
            muted={muted}
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            onCanPlay={onCanPlay}
            onClick={() => unlockSound()}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
