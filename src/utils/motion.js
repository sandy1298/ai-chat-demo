export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

   export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };

  // Fade Up Slowly
export const fadeUpSlowly = (delay = 0.2, duration = 1) => {
  return {
    hidden: {
      opacity: 0,
      y: 50, // Start 50px below
    },
    show: {
      opacity: 1,
      y: 0, // End at default position
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Slide From Right to Left
export const slideRightToLeft = (delay = 0.2, duration = 1) => {
  return {
    hidden: {
      x: "100%", // Start off-screen to the right
      opacity: 0,
    },
    show: {
      x: 0, // Slide into the default position
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

  