import { createGlobalStyle } from 'styled-components';

import RobotoRegWoff from 'fonts/roboto-v30-latin-regular.woff';
import RobotoRegWoff2 from 'fonts/roboto-v30-latin-regular.woff2';

import RobotoMediumWoff from 'fonts/roboto-v30-latin-500.woff';
import RobotoMediumWoff2 from 'fonts/roboto-v30-latin-500.woff2';

import RobotoBoldWoff from 'fonts/roboto-v30-latin-700.woff';
import RobotoBoldWoff2 from 'fonts/roboto-v30-latin-700.woff2';

import KarlaBoldWoff from 'fonts/karla-v23-latin-700.woff';
import KarlaBoldWoff2 from 'fonts/karla-v23-latin-700.woff2';

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Karla';
  src: url(${KarlaBoldWoff2}) format('woff2'),
       url(${KarlaBoldWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegWoff2}) format('woff2'),
       url(${RobotoRegWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto Medium';
  src: url(${RobotoMediumWoff2}) format('woff2'),
       url(${RobotoMediumWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto Bold';
  src: url(${RobotoBoldWoff2}) format('woff2'),
       url(${RobotoBoldWoff}) format('woff');
}
`;

export default FontStyles;
