import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'
import List from '../List'
import * as S from './styles'
import { TListOfCardsProps } from './types'

const ListOfCards = ({ items, isLoading }: TListOfCardsProps) => {
  const [columns, setColumns] = useState<number>(3)

  function handleRangeChange(e:any){
    setColumns(e.target.value)
  }
  return (
    <>
      <S.InputWrapper>
        <S.Input type="range" min="2" max="4" value={columns} onChange={handleRangeChange} />
      </S.InputWrapper>
      {  isLoading
        ? <List columns={columns}>{Array.from({length: 20}).map((e,i) => <S.SkeletonCard key={i} />)}</List>
        : <List columns={columns}>
          {items.map((item) => (
            <Link key={item.slug} to={item.slug}>
              <S.ListItem>
                <Card {...item} layout="auto" />
              </S.ListItem>
            </Link>
          ))}
        </List>}
    </>
  )
}


export default ListOfCards
