import React from 'react'
import * as S from './styles'
import { TPadderProps } from './types'


const Padder = ({ size, children } : TPadderProps) => (
  <S.Padder size={size}>{children}</S.Padder>
)

export default Padder
