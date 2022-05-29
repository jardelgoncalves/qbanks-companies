import {DefaultTheme} from 'styled-components';
import get from 'lodash.get';

export const colorModifier = (
  theme: DefaultTheme,
  value?: string,
  defaultValue?: string,
) => {
  if (!value) {
    return defaultValue;
  }
  const isColorInline = /^(#|rbg|hsl)/i;

  if (isColorInline.test(value) || value === 'transparent') {
    return value;
  }

  return get(theme.colors, value, defaultValue);
};
