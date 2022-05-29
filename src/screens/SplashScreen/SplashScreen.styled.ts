import styled, {css} from 'styled-components/native';
import {Animated} from 'react-native';

type WrapperProps = {
  width: number;
  height: number;
};

export const Wrapper = styled(Animated.View)<WrapperProps>`
  ${({theme, height, width}) => css`
    width: ${width}px;
    height: ${height}px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary[700]};
  `};
`;

export const Image = styled.Image`
  width: 180px;
  height: 130px;
`;
