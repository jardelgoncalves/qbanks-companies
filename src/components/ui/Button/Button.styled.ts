import {ModifiersType} from '@/interfaces/modifiers';
import styled, {css, DefaultTheme} from 'styled-components/native';
import {hexToRGB} from '@/utils/hext-to-rgb';

const variants = {
  raised: (theme: DefaultTheme, modifier: ModifiersType) => css`
    background-color: ${theme.modifiers.colorModifier(
      theme,
      modifier.bg || modifier.background || modifier.backgroundColor,
    ) ?? theme.colors.primary[700]};
    color: ${theme.modifiers.colorModifier(theme, modifier.color) ??
    theme.colors.grayscale[100]};
  `,
  ghost: (theme: DefaultTheme, modifier: ModifiersType) => css`
    background-color: ${hexToRGB(
      theme.modifiers.colorModifier(
        theme,
        modifier.bg || modifier.background || modifier.backgroundColor,
      ) ?? theme.colors.primary[700],
      0.3,
    )};
    color: ${theme.modifiers.colorModifier(
      theme,
      modifier.bg || modifier.background || modifier.backgroundColor,
    ) ?? theme.colors.primary[700]};
  `,
  outline: (theme: DefaultTheme, modifier: ModifiersType) => css`
    border: 2px solid;
    background-color: transparent;
    color: ${theme.modifiers.colorModifier(
      theme,
      modifier.color ?? theme.colors.primary[700],
    )};
    border-color: ${hexToRGB(
      theme.modifiers.colorModifier(
        theme,
        (modifier.bc || modifier.bg) ?? theme.colors.primary[700],
      ),
      0.3,
    )};
  `,
};

type WrapProps = ModifiersType & {
  variant?: 'raised' | 'ghost' | 'outline';
  width?: string;
  block?: boolean;
};

export const Wrap = styled.TouchableOpacity<WrapProps>`
  ${({theme, variant, width, block, ...modifiers}) => css`
    height: 48px;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    justify-content: center;

    ${theme.modifiers.apply(theme, modifiers)};

    ${variants.raised(theme, modifiers)};
    ${variant && variants[variant]?.(theme, modifiers)}

    ${width &&
    css`
      width: ${width};
    `}

    ${block &&
    css`
      width: 100%;
    `}
  `};
`;
