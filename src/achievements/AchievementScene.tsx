import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
// @ts-ignore
import ConfettiGenerator from "confetti-js";
import AchievementCard from "./AchievementCard";
import Button from "../common/Button";

interface Props {
  isOpen: boolean;
  onClose: () => any;
}

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000;
`;

const ConfettiCanvas = styled.canvas`
  position: absolute;
  top: -25vh;
  left: 0;
  width: 100%;
  height: 125vh;
  pointer-events: none;

  &.muted {
    opacity: 0.25;
  }
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const Title = styled(motion.h1)`
  position: absolute;
  bottom: 100%;
  width: 100%;
  margin: 0 0 60px;
  transform: translate(0, 0);
  line-height: 1.1;
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0;
`;

const DismissButton = styled(Button)`
  position: absolute;
  top: 115%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
`;

const cardVariants = {
  beforeEnter: {
    opacity: 1,
    top: "100%",
    x: "-50%",
    y: "-50%",
    rotateY: "-125deg",
    rotateX: "45deg",
    scale: 1,
  },
  enter: {
    top: "50%",
    x: "-50%",
    y: "-50%",
    rotateY: "0deg",
    rotateX: "0deg",
    scale: 1,
  },
  leave: {
    scale: 0.75,
    opacity: 0,
  },
};

const confettiConfig = {
  animate: true,
  props: ["square", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126],
  ],
  rotate: true,
  start_from_edge: true,
  respawn: true,
};

export default function AchievementScene({ onClose }: Props) {
  const cardControls = useAnimation();
  const titleControls = useAnimation();
  const buttonControls = useAnimation();

  const open = useCallback(async () => {
    cardControls.set("beforeEnter");

    await cardControls.start("enter", {
      type: "spring",
      stiffness: 150,
      damping: 16,
    });

    await titleControls.start(
      {
        opacity: 1,
        y: "-100%",
      },
      {
        type: "spring",
      }
    );

    buttonControls.start({ opacity: 1 });
  }, [cardControls, titleControls, buttonControls]);

  const close = useCallback(async () => {
    buttonControls.start({ opacity: 0 }, { duration: 0.15 });
    titleControls.start({ opacity: 0, y: "0%" }, { duration: 0.15 });
    await cardControls.start("leave", {
      ease: "easeIn",
      duration: 0.2,
      delay: 0.1,
    });
  }, [cardControls, titleControls, buttonControls]);

  useEffect(() => {
    const backgroundConfetti = new ConfettiGenerator({
      ...confettiConfig,
      target: "background-confetti",
      max: 100,
    });
    backgroundConfetti.render();

    const foregroundConfetti = new ConfettiGenerator({
      ...confettiConfig,
      target: "foreground-confetti",
      max: 25,
    });
    foregroundConfetti.render();

    open();

    return () => {
      backgroundConfetti.clear();
      foregroundConfetti.clear();
    };
  }, [open]);

  return (
    <Container>
      <ConfettiCanvas id="background-confetti" className="muted" />
      <CardContainer animate={cardControls} variants={cardVariants}>
        <AchievementCard />
        <Title animate={titleControls}>New Achievement</Title>
        <DismissButton
          animate={buttonControls}
          onTap={() => close().then(() => onClose())}
        >
          Dismiss
        </DismissButton>
      </CardContainer>
      <ConfettiCanvas id="foreground-confetti" />
    </Container>
  );
}
