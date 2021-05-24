import React from 'react'
import * as S from './styles'

type TList = {
  columns: number,
  children: JSX.Element[]
}

const List = ({ columns = 1, children }: TList) => (
  <S.List columns={columns}>
    {React.Children.map(children, (child) => <S.ListItem>{child}</S.ListItem>)}
  </S.List>
)

export default List
