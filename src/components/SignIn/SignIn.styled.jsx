import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 100%;

  &:after {
    content: '';
    display: block;
    margin-top: ${p => p.theme.space[4]}px;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.inputColor};
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const UserImg = styled.img`
  width: 50px;
  border-radius: ${p => p.theme.radii.circular};
`;

export const UserGreeting = styled.p`
  letter-spacing: ${p => p.theme.letterSpacing.text};
`;

export const UserBtn = styled.button`
  margin: ${p => p.theme.space[0]}px;
  margin-left: auto;
  padding: ${p => p.theme.space[3]}px;

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.inputColor};
  border-radius: ${p => p.theme.radii.card};

  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: background-color ${p => p.theme.transition.main},
    color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.transparent};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.signInBtn};
  }
`;
