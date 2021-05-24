import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
import List from '../List'
import * as S from './styles'
import { TListOfCardsProps } from './types'

const ListOfCards = ({ items }: TListOfCardsProps) => (
  <List columns={3}>
    {items.map((item) => (
      <Link key={item.slug} to={item.slug}>
        <S.ListItem>
          <Card {...item} layout="auto" />
        </S.ListItem>
      </Link>
    ))}
  </List>
)

export default ListOfCards
