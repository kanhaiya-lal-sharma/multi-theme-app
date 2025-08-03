
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'theme1' | 'theme2' | 'theme3';
    background: string;
    text: string;
    primary: string;
    fontFamily: string;
    layout: 'minimal' | 'sidebar' | 'cards';
  }
}

