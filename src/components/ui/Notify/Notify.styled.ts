import {hexToRGB} from '@/utils/hext-to-rgb';
import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

const {height, width} = Dimensions.get('window');
export const Overlay = styled.View`
  ${({theme}) => css`
    height: ${Math.round(height)}px;
    width: ${Math.round(width)}px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${hexToRGB(theme.colors.grayscale[700], 0.7)};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
  `};
`;

export const Container = styled.View`
  ${({theme}) => css`
    height: ${Math.round(width - 70)}px;
    width: ${Math.round(width - 70)}px;
    background-color: ${theme.colors.grayscale[100]};
    border-radius: 32px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `};
`;
