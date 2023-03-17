import styled from 'styled-components';
import { heartbeat } from 'keyframes/keyframes';
import { GiClick } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const CharacterBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[5]}px;
  width: 100%;
  height: 100%;
  /* transform: translateX(-100%); */
  opacity: 0;
  background-color: ${p => p.theme.colors.charBackdrop};
  transition: opacity ${p => p.theme.transition.main};
`;

export const TapIcon = styled(GiClick)`
  color: ${p => p.theme.colors.iconColor};
`;

export const TapText = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing.text};

  color: ${p => p.theme.colors.iconColor};
`;

export const CharacterCard = styled.li`
  width: 312px;
  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 240px;
  }
  position: relative;
  overflow: hidden;

  border-radius: ${p => p.theme.radii.card};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);

  :hover ${CharacterBack}, :focus ${CharacterBack} {
    /* transform: translateX(0%); */
    opacity: 1;
    pointer-events: none;
  }

  :hover ${TapIcon}, :focus ${TapIcon} {
    animation: ${heartbeat} 1.5s ease-in-out infinite both;
  }
`;

export const CharacterLink = styled(Link)`
  text-decoration: none;
`;
