import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import qs from 'query-string'
import { ListOfCards, Wrapper, Padder, Pagination, Layout, FiltersBar } from '../components'
import { TCardWithSlug } from '../components/ListOfCards/types'
import produceCardProps from '../utility/produceCardProps'
import deelay from '../utility/deelay'
import * as C from '../styles/common'

type TQueryObject = {
  page: number,
  name?: string | undefined
  status?: 'alive'| 'dead' | 'unknown' | undefined,
  gender?: 'female' | 'male' | 'genderless' | 'unknown' | undefined
}

type TPageProps = {
  location: {
    search: string
  }
}

type TLoading = 'started' | 'done' | null

export default ({ location: { search }} : TPageProps) => {
  const history = useHistory()
  const [queryObject, setQueryObject] = useState<TQueryObject>({page: 1, ...qs.parse(search)})
  const [data, setData] = useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState<TLoading>(null)
  
  const items : [] | TCardWithSlug[] = data?.results?.map(produceCardProps) || []  
  const query : string = qs.stringify(queryObject)

  useEffect(() => {
    if(!search) setQueryObject({page: 1})
  }, [search])

  useEffect(() => {
    history.push(`?${query}`)
    async function fetchData(){
      setLoadingStatus('started')
      const result = await axios.get(`https://rickandmortyapi.com/api/character/?${query}`)
        .then(result => result.data)
        .catch(() => setData(null))

      await deelay(200) // this is just for a better ui effect
      if(result) setData(result)
      setLoadingStatus('done')
    }
    fetchData()
  }, [query, history])


  function handleFilersBarChange(name: string, value: string){
    setQueryObject(prevState => ({
      ...prevState,
      page: 1,
      [`${name}`]: value
    }))
  }

  function onPageChange({selected} : {selected: number}) {
    if( typeof window !== 'undefined') window.scrollTo({top: 0})
    setQueryObject(prevState => ({...prevState, page: selected + 1}))
  }

  return (
    <Layout isLoading={loadingStatus === 'started'}>
      <Wrapper size="large">
        <Padder size="large">
          <FiltersBar onChange={handleFilersBarChange} initialState={queryObject} />
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
            initialPage={queryObject.page - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPageChange}
            pageCount={data.info.pages}
          /></Padder>
        </Wrapper>}
    </Layout>
  )
}
