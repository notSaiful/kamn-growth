import React, { useRef, useEffect } from 'react';

export default function GlobalAmbientBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.85; // Slightly slower, calm unhurried cloud drift
      video.play().catch(() => {});
      const keepPlaying = () => {
        video.play().catch(() => {});
      };
      video.addEventListener('pause', keepPlaying);
      video.addEventListener('ended', keepPlaying);
      return () => {
        video.removeEventListener('pause', keepPlaying);
        video.removeEventListener('ended', keepPlaying);
      };
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Core Background Video (Warm Luxury Clouds Drift) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        poster="/assets/site-ambient-poster.png"
        className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[0.98] pointer-events-none select-none"
      >
        <source src="/assets/site-ambient-bg.mp4" type="video/mp4" />
        <source src="/assets/Untitled design-4.mp4" type="video/mp4" />
      </video>

      {/* 
        Warm Parchment Tint Overlay
        Blends the clouds into the signature KAMN sand/ivory palette (#F3EADB / #FAF6EE)
        Ensures 100% typography contrast and editorial readability.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(243, 234, 219, 0.48) 0%, rgba(243, 234, 219, 0.36) 50%, rgba(243, 234, 219, 0.52) 100%)',
        }}
      />

      {/* Faint Subtle Warm Grain / Light Wash */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 mix-blend-multiply"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(181, 150, 97, 0.15) 0%, transparent 80%)'
        }}
      />
    </div>
  );
}
