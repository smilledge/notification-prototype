import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  padding: 0.625rem 1.5rem;
  border-radius: 6px;
  border: 2px solid #374655;
  background: transparent;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-size: 0.75rem;
  color: #7a8fa6;
  cursor: pointer;
  transition: border 0.3s;

  &:hover {
    border-color: #7a8fa6;
  }
`;

export default Button;
