import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'

type TLayout = {
  children: JSX.Element
}

export default ({ children }: TLayout) => (
  <div>
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
  </div>
)

