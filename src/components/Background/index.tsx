import React from 'react'
import * as S from './styles'
import { TProps } from './types'

export default ({ background, color, children } : TProps) => (
  <S.Background color={color} background={background}>
    {children}
  </S.Background>
)


