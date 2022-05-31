import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';
const {height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  ${({theme}) => css`
    height: ${height}px;
    background-color: ${theme.colors.primary[700]};
  `};
`;

export const Form = styled.View`
  ${({theme}) => css`
    margin-top: 16px;
    padding: 32px 35px 60px;
    background-color: ${theme.colors.grayscale[100]};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
  `};
`;

export const SubmitWrapper = styled.View`
  padding: 16px 35px;
`;
