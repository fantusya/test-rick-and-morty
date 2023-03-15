import { keyframes } from 'styled-components';

export const heartbeat = keyframes`
    from {
      transform: scale(1);
      transform-origin: center center;
      animation-timing-function: ease-out;
    }
    10% {
      transform: scale(0.8);
      animation-timing-function: ease-in;
    }
    17% {
      transform: scale(1.1);
      animation-timing-function: ease-out;
    }
    33% {
      transform: scale(0.8);
      animation-timing-function: ease-in;
    }
    45% {
      transform: scale(1);
      animation-timing-function: ease-out;
    }
`;
