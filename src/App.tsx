import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AchievementScene from "./achievements/AchievementScene";
import Button from "./common/Button";

const theme = {};

const AchievementButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AchievementButton onClick={() => setIsOpen(true)}>
        Click me!
      </AchievementButton>
      {isOpen && (
        <AchievementScene isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </ThemeProvider>
  );
}

export default App;
