import { setColor } from './index';

export interface SaxVueOptions {
  colors?: SaxVueColors;
}

export interface SaxVueColors {
  [item: string]: string;
  primary: string;
  success: string;
  danger: string;
  warn: string;
  dark: string;
}

const defineColors = (colors: SaxVueColors) => {
  Object.keys(colors).forEach((item) => {
    if (document.body) {
      setColor(item, colors[item], document.body);
    }
  });
};

export const defineSaxVueOptions = (options: SaxVueOptions) => {
  if (options.colors) {
    defineColors(options.colors);
  }
};
