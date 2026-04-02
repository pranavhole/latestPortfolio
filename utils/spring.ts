import type { Transition } from "framer-motion";

/** Standard — most UI transitions. Slight overshoot, settles smoothly. */
export const spring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

/** Snappy — buttons, chips, small fast elements. */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
};

/** Gentle — large section entrances, slow reveals. */
export const springGentle: Transition = {
  type: "spring",
  stiffness: 60,
  damping: 14,
};

/** Bouncy — playful hover effects. */
export const springBouncy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
};

/** With delay — for stagger use. Pass delay in seconds. */
export const springDelayed = (delay: number): Transition => ({
  type: "spring",
  stiffness: 100,
  damping: 15,
  delay,
});
