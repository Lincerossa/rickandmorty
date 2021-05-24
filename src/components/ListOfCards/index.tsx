import React from 'react'
import { Link } from 'react-router-dom'
import Card, { TCard } from '../Card'
import List from '../List'
import * as S from './styles'

interface Item extends TCard {
  slug: string
}

type TListOfCards = {
  items: Item[]
}

const ListOfCards = ({ items }: TListOfCards) => (
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
