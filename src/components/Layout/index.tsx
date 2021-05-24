import React from 'react'
import * as S from './styles'

export default ({ children }: {children: JSX.Element}) => (
  <div>
    <S.Header>Header here</S.Header>
    {children}
    <S.Footer>Footer here</S.Footer>
  </div>
)

