import React from 'react'
import * as S from './styles'

type TBackground = {
  background: string,
  color?: string,
  children: JSX.Element
}

export default ({ background, color, children } : TBackground) => (
  <S.Background color={color} background={background}>
    {children}
  </S.Background>
)


