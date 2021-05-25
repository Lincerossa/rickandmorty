import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'
import Logo from './LogoSvg'
import { TLayoutProps } from './types'


export default ({ children, isLoading }: TLayoutProps) => (
  <S.Layout>
    <S.Header>
      <Wrapper size="large">
        <Link to="/"><Logo /></Link>
      </Wrapper>
    </S.Header>
    <S.Content>
      {children}
    </S.Content>
    <S.Footer>
      <Wrapper size="large">
        <Padder size="regular">
          <Link to="/"><Logo /></Link>
        </Padder>
      </Wrapper>
    </S.Footer>
    {isLoading && <S.Loading >
      <S.Pulse><div></div><div></div></S.Pulse>
    </S.Loading>}
  </S.Layout>
)

