import { Injectable } from '@angular/core';
import { Variants } from './types';

@Injectable({
  providedIn: null,
})
export class ThemeService {
  get theme() {
    const themeConfig = {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        black: '#2a2a2a',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        white: '#fff',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '4': '0.25rem',
        '8': '0.5rem',
        '16': '1rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      opacity: {
        '0': '0',
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
    };
    return { ...themeConfig };
  }

  isVariantSecondary(variantType: Variants) {
    return variantType === 'secondary';
  }
}
