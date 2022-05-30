import styled, {css} from 'styled-components/native';

export const Bar = styled.View`
  ${({theme}) => css`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
    position: relative;

    background-color: ${theme.colors.primary[700]};
  `};
`;

type PositionElementProps = {
  isRight?: boolean;
};

export const PositionElement = styled.View<PositionElementProps>`
  position: absolute;
  ${({isRight}) => (isRight ? 'right: 0' : 'left: 0')};
  top: -32px;
`;

export const Logo = styled.Image`
  height: 35px;
  width: 50px;
`;
