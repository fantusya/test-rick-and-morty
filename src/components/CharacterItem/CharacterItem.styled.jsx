import styled from 'styled-components';

export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CharacterImg = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 12px ${p => p.theme.space[4]}px;
`;

export const CharacterName = styled.h2`
  font-family: 'Roboto Medium';
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacing.title};

  color: ${p => p.theme.colors.charName};
`;

export const CharacterSpecies = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  color: ${p => p.theme.colors.charSpecies};
`;
