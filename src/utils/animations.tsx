export const AnimateFade = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        staggerChildren: 1,
    }
}

export const AnimateFadeLeft = {
    parent: {
      visible: {
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
      hidden: {
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
          staggerDirection: -1,
        },
      },
    },
    child: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -100 },
    },
  };

export const AnimateFadeRight = {
    parent: {
      visible: {
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.05,
        },
      },
      hidden: {
        transition: {
          when: "afterChildren",
          staggerChildren: 0.05,
          staggerDirection: -1,
        },
      },
    },
    child: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 50 },
    },
  };

  export const MenuDropDown = {
    parent: {
      visible: {
        scaleY: 1,
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.05,
          duration: .2,
        },
      },
      hidden: {
        scaleY: 0,
        opacity: 0,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0,
          staggerDirection: -1,
          duration: .2,
        },
      },
    },
    child: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 30 },
    },
  };