import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export default function AmbientSoundToggle() {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FAF6EE]/90 hover:bg-[#FAF6EE] backdrop-blur-md border border-[#29251F]/15 hover:border-[#B59661] text-[#29251F] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
    >
      {/* Animated Frequency Equalizer Bars */}
      <div className="flex items-center gap-[2.5px] h-3.5 w-3.5 justify-center">
        <motion.span
          animate={{
            height: isPlaying ? [3, 13, 6, 11, 3] : 3,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
            ease: "easeInOut",
          }}
          className={`w-[2px] rounded-full transition-colors ${isPlaying ? 'bg-[#B59661]' : 'bg-[#6C6255]/60'}`}
        />
        <motion.span
          animate={{
            height: isPlaying ? [7, 4, 14, 6, 7] : 5,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.9,
            delay: 0.15,
            ease: "easeInOut",
          }}
          className={`w-[2px] rounded-full transition-colors ${isPlaying ? 'bg-[#B59661]' : 'bg-[#6C6255]/60'}`}
        />
        <motion.span
          animate={{
            height: isPlaying ? [4, 11, 3, 14, 4] : 3,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.3,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className={`w-[2px] rounded-full transition-colors ${isPlaying ? 'bg-[#B59661]' : 'bg-[#6C6255]/60'}`}
        />
      </div>

      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase">
        <span className="text-[#29251F]">Sound</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded-xs transition-colors ${
          isPlaying ? 'bg-[#29251F] text-[#FAF6EE] font-semibold' : 'bg-[#29251F]/10 text-[#6C6255]'
        }`}>
          {isPlaying ? 'ON' : 'OFF'}
        </span>
      </div>
    </button>
  );
}
