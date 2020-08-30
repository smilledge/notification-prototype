import React, { useRef } from "react";
import styled from "styled-components";
import {
  motion,
  useTransform,
  useSpring,
  useMotionTemplate,
  useAnimation,
} from "framer-motion";
import JumboCoins from "../common/JumboCoins";
import BaseBadgeFrame from "./BadgeFrame";
import Badge from "./Badge";

import leeroy from "./leeroy.png";

interface Props {
  className?: string;
}

const Container = styled.div`
  perspective: 1000;
`;

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  width: 280px;
  min-height: 300px;
  padding: 110px 24px 24px;
  border-radius: 10px;
  background-color: #203146;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
`;

const BadgeFrame = styled(BaseBadgeFrame)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h3`
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
`;

const Reward = styled.div`
  margin-top: auto;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ProgressBar = styled.div`
  height: 10px;
  margin-top: 0.75rem;
  border-radius: 5px;
  background-color: #121b27;
  overflow: hidden;

  span {
    display: block;
    width: 0%;
    height: 100%;
    border-radius: 5px;
    background-color: #0f8ae2;
  }
`;

export default function AchievementCard({ className }: Props) {
  const container = useRef<HTMLDivElement>();

  const x = useSpring(0, {});
  const y = useSpring(0, {});

  const cardControls = useAnimation();

  const rotateX = useTransform(y, [-140, 140], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const shadowX = useTransform(x, (val) => val * -0.1);
  const shadowY = useTransform(y, (val) => val * -0.1 + 6);
  const shadowBlurX = useTransform(y, [-140, 0, 140], [50, 16, 50]);
  const shadowBlurY = useTransform(x, [-150, 0, 150], [50, 16, 50]);
  const shadowBlur = useTransform(
    [shadowBlurX, shadowBlurY] as any,
    ([sx, sy]: [number, number]) => (sx + sy) / 2
  );
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.35)`;

  return (
    <Container
      className={className}
      ref={(ref) => {
        container.current = ref || undefined;
      }}
      onMouseMove={(e) => {
        const { top = 0, left = 0, width = 280, height = 300 } =
          container.current?.getBoundingClientRect() || {};

        const newX = e.pageX - left - width / 2;
        const newY = e.pageY - top - height / 2;

        x.set(newX);
        y.set(newY);
      }}
      onMouseEnter={(e) => {
        cardControls.start({ scale: 1.05 });
      }}
      onMouseLeave={(e) => {
        x.set(0);
        y.set(0);
        cardControls.start({ scale: 1 });
      }}
    >
      <Card
        style={{ rotateX, rotateY, boxShadow }}
        animate={cardControls}
        transition={{ type: "tween" }}
      >
        <BadgeFrame>
          <Badge image={leeroy} />
        </BadgeFrame>

        <Content>
          <Title>Shutup Leeroy</Title>
          <Description>
            Merge five patches without Leeroy Jenkins dropping a -1 on any of
            them.
          </Description>

          <Reward>
            <JumboCoins count={3} />
            &nbsp; 1,500 Jumbo Coins
          </Reward>

          <ProgressBar>
            <motion.span
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 2, ease: "easeOut" }}
            />
          </ProgressBar>
        </Content>
      </Card>
    </Container>
  );
}
