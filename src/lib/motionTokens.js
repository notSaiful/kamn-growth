// KAMN Architectural Motion Tokens & Animation Systems

export const EASE_LUXURY = [0.16, 1, 0.3, 1];
export const EASE_CINEMATIC = [0.22, 1, 0.36, 1];
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1.0];

export const DURATIONS = {
  instant: 0.15,
  micro: 0.35,
  standard: 0.6,
  entrance: 0.9,
  cinematic: 1.2,
};

export const SPRING_GENTLE = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const SPRING_PRECISE = {
  type: "spring",
  stiffness: 140,
  damping: 24,
  mass: 0.8,
};

// Reusable Framer Motion Variants
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: DURATIONS.entrance,
      ease: EASE_LUXURY,
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const maskRevealVariant = {
  hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0, y: 15 },
  visible: (custom = 0) => ({
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: DURATIONS.cinematic,
      ease: EASE_LUXURY,
    },
  }),
};

export const archPortalVariant = {
  initial: {
    clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
    scale: 1.06,
  },
  revealed: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    scale: 1,
    transition: {
      duration: DURATIONS.cinematic,
      ease: EASE_LUXURY,
    },
  },
};
