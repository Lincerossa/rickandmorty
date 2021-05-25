import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'
import { TLayoutProps } from './types'


export default ({ children, isLoading }: TLayoutProps) => (
  <S.Layout>
    <S.Header>
      <Wrapper size="large">
        <Padder size="regular">
          <Link to="/">RAM</Link>
        </Padder>
      </Wrapper>
    </S.Header>
    {children}
    <S.Footer>
      <Wrapper size="large">
        <Padder size="regular">
          <Link to="/">RAM</Link>
        </Padder>
      </Wrapper>
    </S.Footer>
    {isLoading && <S.Loading >
      <S.Pulse><div></div><div></div></S.Pulse>
    </S.Loading>}
  </S.Layout>
)

