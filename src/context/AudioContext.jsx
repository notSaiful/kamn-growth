import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Clean up any interval on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  const fadeIn = (audio, targetVol = 0.75, duration = 600) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    audio.volume = 0;
    const step = targetVol / (duration / 30);
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume + step >= targetVol) {
        audio.volume = targetVol;
        clearInterval(fadeIntervalRef.current);
      } else {
        audio.volume += step;
      }
    }, 30);
  };

  const fadeOut = (audio, duration = 400) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    const startVol = audio.volume;
    const step = startVol / (duration / 30);
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume - step <= 0.05) {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeIntervalRef.current);
      } else {
        audio.volume -= step;
      }
    }, 30);
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeOut(audio);
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        fadeIn(audio);
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio play prevented by browser policy:', err);
      });
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {/* Universal Hidden Persistent Audio Element */}
      <audio
        ref={audioRef}
        loop
        playsInline
        preload="auto"
        className="hidden"
      >
        <source src="/assets/videoplayback-19.mp4" type="audio/mp4" />
        <source src="/assets/ambient-audio.m4a" type="audio/mp4" />
        <source src="/assets/ambient-audio.mp4" type="audio/mp4" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
