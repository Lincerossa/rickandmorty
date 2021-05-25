import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ListOfCards, Background, Wrapper, Padder, Pagination } from '../../components'
import theme from '../../styles/theme'
import { TCardWithSlug } from '../../components/ListOfCards/types'
import transformData from './utility/transformData'

export default () => {
  const [page, setPage] = useState<number>(1)
  const [data, setData]= useState<any>(null)
  const [, setLoading] = useState<boolean>(false)
  const [items, setItems] = useState<[] | TCardWithSlug[]>([])

  useEffect(() => {
    async function fetchData(){
      setLoading(true)
      const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(result => result.data)
        .catch(e => console.log(e))

      if(result) setData(result)
      setLoading(false)
    }
    fetchData()
  }, [page])

  useEffect(() => {
    if(data) setItems(transformData(data.results))
  }, [data])

  function onPageChange({selected} : {selected: number}) {
    setPage(selected + 1)
  }

  return (<div>
    {items?.length > 0 && (
      <Background color="" background={theme.colors.secondary}>
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} />
          </Padder>
          {data?.info?.pages && <Pagination
            previousLabel="Prev"
            nextLabel="Next"
            initialPage={page - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            pageCount={data.info.pages}
            align="right"
          />}
        </Wrapper>
      </Background>
    )}
  </div>)
}
