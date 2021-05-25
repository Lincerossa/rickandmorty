import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Hero, Layout } from '../../components'
import produceHeroProps from './utility/produceHeroProps'

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const heroProps = data && produceHeroProps(data)
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
      {data && <Hero {...heroProps} />}
    </Layout>
  )
}
