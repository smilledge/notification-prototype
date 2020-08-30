import React from "react";
import { CSSProperties } from "styled-components";

interface Props {
  image: string;
  className?: string;
  style?: CSSProperties;
}

export default function Badge({ className, style, image }: Props) {
  return (
    <svg
      width="137"
      height="152"
      viewBox="0 0 137 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
      style={style}
    >
      <path
        d="M65.7099 12.6697C67.257 11.7767 69.1629 11.7768 70.7098 12.6701L94.81 26.5866L118.92 40.5033C120.467 41.3964 121.42 43.0471 121.42 44.8336V72.6666V100.5C121.42 102.286 120.467 103.937 118.92 104.83L94.81 118.747L70.7098 132.663C69.1629 133.556 67.257 133.556 65.7099 132.663L41.6 118.747L17.4997 104.83C15.9529 103.937 15 102.286 15 100.5V72.6666V44.8331C15 43.0469 15.9529 41.3963 17.4997 40.5031L41.6 26.5866L65.7099 12.6697Z"
        fill="black"
        filter="url(#shadow)"
      />

      <g clipPath="url(#mask)">
        <rect width="100%" height="100%" fill="#0D141C" />
        <image
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref={image}
          preserveAspectRatio="xMinYMin slice"
          x="15"
          y="12"
          width="107"
          height="122"
        />
      </g>

      <path
        d="M65.0067 20.6606C66.5503 19.7728 68.4496 19.773 69.9931 20.661L90.7456 32.6016L111.493 44.5346C113.044 45.4266 114 47.0795 114 48.8688V72.7266V96.5843C114 98.3736 113.044 100.026 111.493 100.919L90.7456 112.852L69.9931 124.792C68.4496 125.68 66.5503 125.68 65.0067 124.792L44.2456 112.852L23.5064 100.919C21.9558 100.027 21 98.3739 21 96.5849V72.7266V48.8683C21 47.0793 21.9558 45.4266 23.5064 44.5344L44.2456 32.6016L65.0067 20.6606Z"
        fill="url(#shine)"
      />

      <defs>
        <clipPath id="mask">
          <path
            d="M65.7099 12.6696C67.257 11.7766 69.1629 11.7768 70.7098 12.67L94.81 26.5865L118.92 40.5032C120.467 41.3963 121.42 43.0471 121.42 44.8336V72.6665V100.499C121.42 102.286 120.467 103.937 118.92 104.83L94.81 118.747L70.7098 132.663C69.1629 133.556 67.257 133.556 65.7099 132.663L41.6 118.747L17.4997 104.83C15.9529 103.937 15 102.286 15 100.5V72.6665V44.8331C15 43.0469 15.9529 41.3963 17.4997 40.5031L41.6 26.5865L65.7099 12.6696Z"
            fill="black"
          />
        </clipPath>

        <filter
          id="shadow"
          x="0"
          y="0"
          width="136.42"
          height="151.333"
          filterUnits="userSpaceOnUse"
        >
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
          />
        </filter>

        <linearGradient id="shine" gradientTransform="rotate(65)">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="60%" stopColor="white" stopOpacity="0" />
          <stop offset="90%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
