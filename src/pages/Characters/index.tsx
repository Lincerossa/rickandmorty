import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ListOfCards, Wrapper, Padder, Pagination, Layout } from '../../components'

import { TCardWithSlug } from '../../components/ListOfCards/types'
import produceListItems from './utility/produceListItems'
import deelay from './utility/deelay'

export default () => {
  const [page, setPage] = useState<number>(1)
  const [data, setData]= useState<any>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const items : [] | TCardWithSlug[] = data ? produceListItems(data.results) : []

  useEffect(() => {
    async function fetchData(){
      setLoading(true)
      const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(result => result.data)
        .catch(() => setData(null))

      await deelay(200) // this is just for a better ui effect
      if(result) setData(result)
      setLoading(false)
    }
    fetchData()
  }, [page])

  function onPageChange({selected} : {selected: number}) {
    if( typeof window !== 'undefined') window.scrollTo({top: 0, behavior: 'smooth'})
    setPage(selected + 1)
  }

  return (
    <Layout isLoading={isLoading}>
      {!isLoading && items?.length === 0 && <div>NO DATA</div>}
      <Wrapper size="large">
        <Padder size="large">
          <ListOfCards items={items} isLoading={isLoading} />
        </Padder>
      </Wrapper>

      {data?.info?.pages && 
          <Wrapper size="large">
            <Padder size="small"><Pagination
              previousLabel="Prev"
              nextLabel="Next"
              initialPage={page - 1}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={onPageChange}
              pageCount={data.info.pages}
              align="right"
            /></Padder>
          </Wrapper>}
          
    </Layout>)
}
