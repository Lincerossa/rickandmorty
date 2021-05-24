import React from 'react'
import * as S from './styles'
import { TBackgroundProps } from './types'

export default ({ background, color, children } : TBackgroundProps) => (
  <S.Background color={color} background={background}>
    {children}
  </S.Background>
)


