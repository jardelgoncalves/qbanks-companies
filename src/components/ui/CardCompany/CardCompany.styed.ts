import styled, {css} from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  ${({theme}) => css`
    width: 100%;
    height: 145px;
    background-color: ${theme.colors.grayscale[200]};
    padding: 16px 20px;
    border-radius: 8px;
    margin-top: 16px;
  `};
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 16px;
`;

export const LogoContainer = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.grayscale[100]};
    border-radius: 16px;
    height: 60px;
    width: 60px;
    margin-right: 12px;
  `};
`;

export const Content = styled.View`
  margin-top: 14px;
`;
