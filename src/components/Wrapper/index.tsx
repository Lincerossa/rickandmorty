import React from 'react'
import * as S from './styles'

type TWrapper = {
  size: 'small' | 'regular' | 'big' | 'large',
  children: JSX.Element,
  hasPadding?: boolean
}

const Wrapper = ({ children, size, hasPadding = true } : TWrapper) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>{children}</S.Wrapper>
)

export default Wrapper
