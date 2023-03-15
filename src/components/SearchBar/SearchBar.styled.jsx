import styled from 'styled-components';

export const SearchForm = styled.form`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: ${p => p.theme.space[4]}px;
  padding-left: 48px;

  line-height: ${p => p.theme.lineHeights.body};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.inputColor};
  border-radius: ${p => p.theme.radii.input};

  color: ${p => p.theme.colors.inputColor};
`;

export const SearchBtn = styled.button`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;

  position: absolute;
  top: ${p => p.theme.space[4]}px;
  left: ${p => p.theme.space[4]}px;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  background-color: ${p => p.theme.colors.transparent};
`;
