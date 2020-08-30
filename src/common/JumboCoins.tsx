import React, { useEffect } from "react";
import styled from "styled-components";
import JumboCoin from "./JumboCoin";
import { motion, useAnimation } from "framer-motion";

interface Props {
  count: number;
  className?: string;
}

const Coins = styled(motion.div)`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
`;

const Coin = styled(motion.span)`
  position: relative;
  display: inline-block;

  & + & {
    margin-left: -0.65rem;
  }
`;

const coinsVariants = {
  start: {
    transition: {
      staggerChildren: 0.075,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.075,
    },
  },
};

const coinVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "-50%",
  },
};

const coinTransition = {
  duration: 0.35,
  yoyo: 1,
  ease: "easeInOut",
};

export default function JumboCoins({ count = 3, className }: Props) {
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start("end");
    }, 3500);

    controls.start("end");

    return () => {
      clearInterval(interval);
    };
  }, [controls]);

  return (
    <Coins
      className={className}
      variants={coinsVariants}
      animate={controls}
      initial="start"
    >
      {new Array(count).fill(null).map((_, index) => (
        <Coin
          key={index}
          variants={coinVariants}
          transition={coinTransition}
          style={{ zIndex: count - index }}
        >
          <JumboCoin />
        </Coin>
      ))}
    </Coins>
  );
}
