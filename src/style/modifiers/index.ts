import {ModifiersType} from '@/interfaces/modifiers';
import {css, DefaultTheme} from 'styled-components/native';

import {colorModifier} from './color';
import {fontSizeModifier} from './font-size';
import {fontFamilyModifier} from './font-family';

export const modifiers = {
  apply: (theme: DefaultTheme, modifier: ModifiersType) => css`
    ${(modifier?.background || modifier?.bg) &&
    `background-color: ${colorModifier(
      theme,
      modifier?.bg || modifier?.background || modifier?.backgroundColor,
    )}`};

    ${modifier?.color && `color: ${colorModifier(theme, modifier.color)}`};

    ${(modifier?.fs || modifier?.fontSize) &&
    `font-size: ${fontSizeModifier(theme, modifier.fs || modifier.fontSize)}`};

    ${(modifier?.ff || modifier?.fontFamily) &&
    `font-family: ${fontFamilyModifier(
      theme,
      modifier.ff || modifier.fontFamily,
    )}`};
  `,
  colorModifier,
  fontSizeModifier,
  fontFamilyModifier,
};
