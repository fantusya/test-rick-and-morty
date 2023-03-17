import styled from 'styled-components';

export const LogoImg = styled.picture`
  display: block;
  margin: 0 auto;
`;

export const Error = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[4]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 400px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 500px;
  }
`;
