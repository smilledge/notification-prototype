import React, { PropsWithChildren } from "react";
import styled, { CSSProperties } from "styled-components";

interface Props {
  className?: string;
  style?: CSSProperties;
}

const Container = styled.div`
  position: relative;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: 23%;
  left: 50%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function BadgeFrame({
  className,
  style,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Container className={className} style={style}>
      <svg
        width="130"
        height="100"
        viewBox="0 0 130 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.4847 -50.3097C64.0395 -51.2145 65.9604 -51.2143 67.515 -50.3093L96.994 -33.1484L126.515 -15.9696C128.053 -15.0742 129 -13.4283 129 -11.6481V22.7266V57.1012C129 58.8814 128.053 60.5274 126.515 61.4228L96.994 78.6016L67.515 95.7625C65.9604 96.6675 64.0395 96.6676 62.4847 95.7629L32.994 78.6016L3.48449 61.4229C1.94623 60.5274 1 58.8817 1 57.1018V22.7266V-11.6486C1 -13.4285 1.94623 -15.0743 3.48449 -15.9698L32.994 -33.1484L62.4847 -50.3097Z"
          fill="#131E2A"
          fillOpacity="0.5"
          stroke="#6197DB"
          strokeOpacity="0.15"
        />
      </svg>
      <BadgeContainer>{children}</BadgeContainer>
    </Container>
  );
}
