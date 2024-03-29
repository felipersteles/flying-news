import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

interface IAnimatedTextCharacter {
  text: string;
}

const AnimatedTextCharacter = ({ text }: IAnimatedTextCharacter) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <Text
          as={motion.span}
          fontSize={["18px", "20px", "23px"]}
          fontWeight={700}
          color="black"
          variants={child}
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </Text>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
