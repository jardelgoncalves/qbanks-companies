import {Dimensions, FlatList} from 'react-native';
import styled, {css} from 'styled-components/native';
const {height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  ${({theme}) => css`
    height: ${height - 80}px;
    background-color: ${theme.colors.grayscale[100]};
  `};
`;

export const List = styled.FlatList`
  padding: 32px 35px 32px;
` as unknown as typeof FlatList;

export const Spacing = styled.View`
  height: 64px;
`;

export const HeaderContainer = styled.View`
  padding: 32px 35px 16px;
`;

export const ViewError = styled.View`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
