import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'
import LogoSvg from './LogoSvg'
import Github from './GithubSvg'
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
          <Link to="/"><LogoSvg /></Link>
        </Wrapper>
      </S.Header>
      <S.Content>
        {children}
      </S.Content>
      <S.Footer>
        <Wrapper size="large">
          <Padder size="regular">
            <S.FooterInner>
              <Link to="/"><LogoSvg /></Link>
              <a target="_blank" href="https://github.com/Lincerossa/rickandmorty" title="Github" rel="noreferrer"><Github /></a>
            </S.FooterInner>
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