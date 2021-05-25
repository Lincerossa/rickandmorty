import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout } from '../components'
import produceCardProps from '../utility/produceCardProps'

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const cardProps = data && produceCardProps(data)
  const [isLoading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if(!id) return
    async function fetchData(){
      setLoading(true)
      const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result => result.data)  
        .catch(() => setData(null))

      if(result) setData(result)
      setLoading(false)
    }
    fetchData()
  }, [id])
  console.log(data)

  return (
    <Layout isLoading={isLoading}>
      {data && <Wrapper size="large"><Padder size="large"><Card {...cardProps} /></Padder></Wrapper>}
    </Layout>
  )
}
