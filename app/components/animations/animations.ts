export const scrollLeft = {
  hidden: {
    x: -300,
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.1,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.4,
    },
  },
};

export const scrollRight = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.1,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0.4,
    },
  },
};
export const show = {
  hidden: {
    opacity: 0,

    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,

    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const scrollUp = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const up = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

// export const pageAnimation = {
//   hidden: {
//     opacity: 0,
//     y: 0,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       when: "beforeChildren",
//       staggerChildren: 0.25,
//     },
//   },
//   exit: {
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

// export const fade = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { ease: "easeOut", duration: 0.75 },
//   },
// };

// export const photoAnim = {
//   hidden: { scale: 1.5, opacity: 0 },
//   show: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       ease: "easeOut",
//       duration: 0.75,
//     },
//   },
// };
