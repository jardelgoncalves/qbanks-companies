import React, {useEffect, useState} from 'react';

import * as S from './Notify.styled';

type NotifyProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onRequestClose?: (isOpen: boolean) => void;
  timingMs?: number;
};

export const Notify = ({
  children,
  isOpen,
  onRequestClose,
  timingMs,
}: NotifyProps) => {
  const [timing] = useState(timingMs ?? 2000);
  const [show, setShow] = useState(!!isOpen);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        onRequestClose?.(false);
      }, timing);
    }
  }, [timing, show, onRequestClose]);
  return show ? (
    <S.Overlay>
      <S.Container>{children}</S.Container>
    </S.Overlay>
  ) : null;
};
