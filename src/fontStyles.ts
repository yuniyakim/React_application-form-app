import { createGlobalStyle } from 'styled-components';
import OpenSans_Regular from './assets/fonts/SFUIDisplay-Regular.ttf';
import OpenSans_Semibold from './assets/fonts/SFUIDisplay-Semibold.ttf';
import SFUIDisplay_Regular from './assets/fonts/SFUIDisplay-Regular.ttf';
import SFUIDisplay_Semibold from './assets/fonts/SFUIDisplay-Semibold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans_Regular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSans_Semibold}) format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'SF UI Display';
    src: url(${SFUIDisplay_Regular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'SF UI Display';
    src: url(${SFUIDisplay_Semibold}) format('truetype');
    font-weight: 600;
  }
`;

export default FontStyles;