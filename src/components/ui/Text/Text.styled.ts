import {ModifiersType} from '@/interfaces/modifiers';
import styled, {css} from 'styled-components/native';

type TextProps = ModifiersType & {
  uppercase?: boolean;
};

export const Text = styled.Text<TextProps>`
  ${({theme, uppercase, ...modifiers}) => css`
    font-size: ${theme.typography.size.md};
    font-family: ${theme.typography.family.primary.regular};
    color: ${theme.colors.grayscale[600]};
    text-transform: ${uppercase ? 'uppercase' : 'none'};

    ${theme.modifiers.apply(theme, modifiers)}
  `};
`;
