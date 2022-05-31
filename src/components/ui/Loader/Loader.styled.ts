import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewAnimated = styled(Animated.View)`
  height: 48px;
  width: 48px;
`;
