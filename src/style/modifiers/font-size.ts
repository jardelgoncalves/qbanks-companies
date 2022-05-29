import {DefaultTheme} from 'styled-components';
import get from 'lodash.get';

export const fontSizeModifier = (
  theme: DefaultTheme,
  value?: string | number,
) => {
  if (!value) {
    return null;
  }

  if (typeof value === 'number') {
    return `${value}px`;
  }

  return get(theme.typography.size, value);
};
