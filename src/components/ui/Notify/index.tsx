import React from 'react';

import * as S from './Notify.styled';

type NotifyProps = {
  children: React.ReactNode;
};

export const Notify = ({children}: NotifyProps) => {
  return (
    <S.Overlay>
      <S.Container>{children}</S.Container>
    </S.Overlay>
  );
};
