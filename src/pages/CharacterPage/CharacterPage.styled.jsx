import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  padding-top: 23px;
  padding-left: 24px;

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-top: 21px;
    padding-left: 50px;
  }

  display: flex;
  align-items: center;
  gap: 12px;

  font-family: 'Karla';
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[2]};
  text-transform: uppercase;
  text-decoration: none;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};
  color: inherit;
`;

export const CharacterImg = styled.img`
  display: block;
  margin: 0 auto 29px auto;
  width: 150px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 200px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 300px;
    margin-bottom: 16px;
  }

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.imgBorder};
  border-radius: ${p => p.theme.radii.circular};
`;

export const CharacterTitle = styled.h1`
  margin-bottom: 35px;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 48px;

    font-size: ${p => p.theme.fontSizes[5]};
  }
  text-align: center;
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.title};

  color: ${p => p.theme.colors.charTitle};
`;

export const InfoBlock = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin: 0 auto;
    width: 413px;
  }
`;

export const InfoTitle = styled.h2`
  margin-bottom: 16px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    text-align: center;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 48px;
  }

  font-family: 'Roboto Medium';
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.title};
  letter-spacing: ${p => p.theme.letterSpacing.title};

  color: ${p => p.theme.colors.charSubtitle};
`;

export const InfoList = styled.ul`
  padding: 0px 16px;
`;

export const InfoItem = styled.li`
  position: relative;
  padding: 9px 0px 12px;
  border-bottom: 1px solid ${p => p.theme.colors.infoBorder};
`;

export const InfoItemTitle = styled.h3`
  font-family: 'Roboto Bold';
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.bold};
  letter-spacing: ${p => p.theme.letterSpacing.title};

  color: ${p => p.theme.colors.charTitle};
`;

export const InfoItemValue = styled.p`
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  color: ${p => p.theme.colors.charValue};
`;
