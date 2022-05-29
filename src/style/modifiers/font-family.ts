import {DefaultTheme} from 'styled-components';
import get from 'lodash.get';

export const fontFamilyModifier = (theme: DefaultTheme, value?: string) => {
  if (!value) {
    return null;
  }

  const family = get(theme.typography.family, value);
  return family;
};
