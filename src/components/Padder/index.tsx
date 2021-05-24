import React from 'react'
import * as S from './styles'

type TPadder = {
  size: 'small' | 'regular' | 'large',
  children: JSX.Element
}

const Padder = ({ size, children } : TPadder) => (
  <S.Padder size={size}>{children}</S.Padder>
)

export default Padder
