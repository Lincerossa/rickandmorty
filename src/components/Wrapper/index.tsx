import React from 'react'
import * as S from './styles'
import { TWrapperProps } from './types'

const Wrapper = ({ children, size, hasPadding = true } : TWrapperProps) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>{children}</S.Wrapper>
)

export default Wrapper
