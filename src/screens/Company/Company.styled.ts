import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';
const {height} = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  ${({theme}) => css`
    height: ${height}px;
    background-color: ${theme.colors.grayscale[100]};
  `};
`;

export const CompanyHeader = styled.View`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 16px 78px;
    background-color: ${theme.colors.primary[700]};
  `};
`;

export const LogoBrand = styled.Image`
  ${({theme}) => css`
    height: 80px;
    width: 80px;
    border-radius: 16px;
    background-color: ${theme.colors.grayscale[100]};
    margin-bottom: 16px;
  `};
`;

export const DescriptionWrap = styled.View`
  text-align: center;
  margin-top: 24px;
`;

export const LocationContainer = styled.View`
  ${({theme}) => css`
    margin-top: -32px;
    padding: 52px 35px 140px;
    background-color: ${theme.colors.grayscale[100]};
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
  `};
`;
