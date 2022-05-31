import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    height: 80px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary[700]};
  `};
`;

const position = css`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const HeaderLeft = styled.View`
  ${position};
  left: 16px;
  top: 16px;
`;
export const HeaderRight = styled.View`
  ${position}
  right: 16px;
  top: 16px;
`;
