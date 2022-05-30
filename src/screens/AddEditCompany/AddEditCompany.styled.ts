import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';
const {height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  ${({theme}) => css`
    height: ${height}px;
    background-color: ${theme.colors.grayscale[100]};
  `};
`;
