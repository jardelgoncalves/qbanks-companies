import {ModifiersType} from '@/interfaces/modifiers';
import styled, {css} from 'styled-components/native';

export const Text = styled.Text<ModifiersType>`
  ${({theme, ...modifiers}) => css`
    font-size: ${theme.typography.size.md};
    font-family: ${theme.typography.family.primary.regular};
    color: ${theme.colors.grayscale[600]};

    ${theme.modifiers.apply(theme, modifiers)}
  `};
`;
