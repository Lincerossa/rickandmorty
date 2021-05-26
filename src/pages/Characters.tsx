import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ListOfCards, Wrapper, Padder, Pagination, Layout } from '../components'
import { TCardWithSlug } from '../components/ListOfCards/types'
import produceCardProps from '../utility/produceCardProps'
import deelay from '../utility/deelay'
import * as C from '../styles/common'

export default () => {
  const [page, setPage] = useState<number>(1)
  const [data, setData]= useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState<'started' | 'done' | null>(null)
  const items : [] | TCardWithSlug[] = data?.results?.map(produceCardProps) || []

  useEffect(() => {
    async function fetchData(){
      setLoadingStatus('started')
      const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(result => result.data)
        .catch(() => setData(null))

      await deelay(200) // this is just for a better ui effect
      if(result) setData(result)
      setLoadingStatus('done')
    }
    fetchData()
  }, [page])

  function onPageChange({selected} : {selected: number}) {
    if( typeof window !== 'undefined') window.scrollTo({top: 0})
    setPage(selected + 1)
  }

  return (
    <Layout isLoading={loadingStatus === 'started'}>
      <Wrapper size="large">
        <Padder size="large">
          <ListOfCards
            items={items}
            isLoading={loadingStatus === 'started'}
          />
          {loadingStatus === 'done' && items?.length === 0 && <C.EmptyData>No Data</C.EmptyData>}
        </Padder>
      </Wrapper>

      {data?.info?.pages && 
        <Wrapper size="large">
          <Padder size="small"><Pagination
            previousLabel="Prev"
            total={data?.info?.count}
            nextLabel="Next"
            initialPage={page - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            pageCount={data.info.pages}
          /></Padder>
        </Wrapper>}
    </Layout>
  )
}
