import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
// import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding-left: ${p => p.theme.space[6]}px;
    padding-right: ${p => p.theme.space[6]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-left: 210px;
    padding-right: 210px;
    width: 1440px;
  }
`;
