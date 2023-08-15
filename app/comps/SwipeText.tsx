"use client"
import React from "react";
import {motion} from "framer-motion";

interface SwipeTextProps {
    text: string;
    className?: string;
}

export default function SwipeText({text, className} : SwipeTextProps) {
    const words = text.split(' ');

    const container = {
        hidden: {
            opacity: 0
        },
        visible: (i = 1) => (
            {
                opacity: 1,
                transition: {
                    staggerChildren: 0.01,
                    delayChildren: 0.04 * i
                }
            }
        )
    };

    const wordContainer = (cumulativeDelay : number) => ({
        hidden: {
            transition: {}
        },
        visible: {
            transition: {
                staggerChildren: 0.01,
                delayChildren: cumulativeDelay, // dynamic delay based on cumulativeDelay
            }
        }
    });

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: 16,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    let cumulativeLength = 0;

    return (
      <motion.div variants={container} initial="hidden" whileInView="visible" className={className}>
        {words.map((word, wordIndex) => {
          const delayForThisWord = cumulativeLength * 0.01; // time per letter
          cumulativeLength += word.length;
    
          return (
            word !== "" && (
              <React.Fragment key={wordIndex}>
                <motion.span variants={wordContainer(delayForThisWord)} className="inline-block">
                  {Array.from(word).map((letter, index) => (
                    <motion.span variants={child} key={index} className="inline-block">
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
                {/* This adds the non-breaking space */}
                {String.fromCharCode(160)}
              </React.Fragment>
            )
          );
        })}
      </motion.div>
    );
    
}