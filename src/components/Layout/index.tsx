import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'
import Logo from './LogoSvg'
import { TLayoutProps } from './types'

const Layout = ({ children, isLoading }: TLayoutProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    if(typeof window !== 'undefined') window.scrollTo(0,0)
  }, [pathname])

  return (
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
}

export default React.memo(Layout)