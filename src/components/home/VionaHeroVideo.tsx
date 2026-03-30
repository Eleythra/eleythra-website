"use client";

import { useCallback, useEffect, useRef } from "react";

/** Kaynak 400×700 → en-boy oranı 4:7 */
const VIDEO_SRC = "/media/viona2.mp4";

/**
 * Not: Chrome / Safari / Firefox, kullanıcı etkileşimi olmadan sesli otomatik oynatmayı
 * çoğu sitede engeller. Bu yüzden önce sessiz başlatıp, ilk tıklamada ses açılır — hata değil, tarayıcı kuralı.
 */
export function VionaHeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);

  const tryUnmute = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.muted) return;
    video.muted = false;
    void video.play().catch(() => {});
  }, []);

  useEffect(() => {
    /** Sayfa üzerindeki ilk tıklama / dokunma (video dışı dahil) — ses politikası için kullanıcı jesti */
    const onInteract = () => tryUnmute();
    document.addEventListener("pointerdown", onInteract, { once: true, passive: true });
    return () => document.removeEventListener("pointerdown", onInteract);
  }, [tryUnmute]);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const playOnce = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      void (async () => {
        video.muted = false;
        try {
          await video.play();
          return;
        } catch {
          /* sesli otomatik oynatma engellendi → sessiz başlat */
        }
        try {
          video.muted = true;
          await video.play();
        } catch {
          /* yoksay */
        }
      })();
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            playOnce();
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" aria-label="Viona tanıtım videosu">
      <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 sm:max-w-[440px] lg:max-w-[min(100%,480px)]">
        <div className="relative aspect-[4/7] w-full overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full cursor-pointer select-none object-cover object-center"
            playsInline
            preload="metadata"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            onClick={() => tryUnmute()}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
