import styled, {css} from 'styled-components/native';

type Wrap = {
  focused?: boolean;
  hasError?: boolean;
};

export const Wrap = styled.TextInput<Wrap>`
  ${({theme, hasError, focused}) => css`
    height: 56px;
    width: 100%;
    border: 2px solid ${theme.colors.grayscale[300]};
    padding: 0 16px;
    color: ${theme.colors.grayscale[700]};
    font-family: ${theme.typography.family.primary.medium};
    font-size: ${theme.typography.size.md};
    border-radius: 8px;

    ${focused &&
    css`
      border-color: ${theme.colors.primary[300]};
    `}

    ${hasError &&
    css`
      border-color: ${theme.colors.error[700]};
    `}
  `};
`;
