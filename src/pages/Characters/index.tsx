import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ListOfCards, Background, Wrapper, Padder } from '../../components'
import theme from '../../styles/theme'
import { TCardWithSlug } from '../../components/ListOfCards/types'
import transformData from './utility/transformData'

export default () => {
  const [page, setPage ] = useState<number>(1)
  const [items, setItems] = useState<[] | TCardWithSlug[]>([])

  useEffect(() => {
    async function fetchItems(){
      const data = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(data => transformData(data.data.results))
        .catch(e => console.log(e))

      if(data) setItems(data)
    }
    fetchItems()
  }, [page])

  return (<div>
    {items?.length > 0 && (
      <Background color="" background={theme.colors.secondary}>
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    )}
  </div>)

}