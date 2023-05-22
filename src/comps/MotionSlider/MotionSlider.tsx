import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Styles from "./MotionSlider.module.scss";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, invertDirection] = useState(false);

  const sliderImages = [
    "/sample-pic-1.jpg",
    "/sample-pic-2.jpg",
    "/sample-pic-3.jpg",
  ];

  const imageVariants = direction
    ? {
        onDeck: { opacity: 0, x: "-100%" },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: "100%" },
      }
    : {
        onDeck: { opacity: 0, x: "100%" },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: "-100%" },
      };

  const handlePrevious = () => {
    invertDirection(true);
    setCurrentIndex((oldIndex) => {
      if (oldIndex === 0) {
        return sliderImages.length - 1; // return last image if it's already the first
      } else {
        return oldIndex - 1;
      }
    });
  };

  const handleNext = () => {
    invertDirection(false);
    setCurrentIndex((oldIndex) => {
      if (oldIndex === sliderImages.length - 1) {
        return 0; // return first image if it's already the last
      } else {
        return oldIndex + 1;
      }
    });
  };

  return (
    <div className={Styles.sliderWrapper}>
      <div className={Styles.sliderTrack}>
        <button
          className={`${Styles.sliderButton} ${Styles.sliderButtonPrev}`}
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <button
          className={`${Styles.sliderButton} ${Styles.sliderButtonNext}`}
          onClick={handleNext}
        >
          &gt;
        </button>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={imageVariants}
            initial="onDeck"
            animate="enter"
            exit="leave"
            transition={{ duration: 0.5 }}
          >
            <Image
              src={sliderImages[currentIndex]}
              alt="Slideshow"
              width={500}
              height={300}
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slider;
