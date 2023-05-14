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
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -100,
    },
    transition: {
        staggerChildren: 1,
    }
}

export const AnimateFadeRight = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 100,
    },
    transition: {
        staggerChildren: 1,
    }
}