import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion, useAnimation } from "framer-motion";
import AchievementScene from "./achievements/AchievementScene";
import Button from "./common/Button";

const theme = {};

const Content = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  margin: 0 0 3.5rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const contentVariants = {
  enter: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
  },
};

function App() {
  const contentControls = useAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = async () => {
    if (isOpen) {
      setIsOpen(false);
      await contentControls.start("enter");
    } else {
      await contentControls.start("leave");
      setIsOpen(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Content animate={contentControls} variants={contentVariants}>
        <Title>Want to help build Jumbo Arcade?</Title>
        <Button onClick={toggle}>Join the team</Button>
      </Content>
      {isOpen && <AchievementScene isOpen={isOpen} onClose={toggle} />}
    </ThemeProvider>
  );
}

export default App;
