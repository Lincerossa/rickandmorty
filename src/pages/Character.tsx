import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, RichText } from '../components'
import produceCardProps from '../utility/produceCardProps'
import { Background } from '../components/Background/styles'
import theme from '../styles/theme'

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
  
  const listOfText = [
    '<h1>Bio</h1>',
    '<h1>Origin</h1>',
    '<h1>Location</h1>',
    '<h1>Chapters</h1>'
  ]

  return (
    <Layout isLoading={isLoading}>
      {data && (
        <>
          <Wrapper size="big">
            <Padder size="large">
              <Card {...cardProps} />
            </Padder>
          </Wrapper>
          {listOfText.map((text, i) => (
            <Background background={theme.colors[i%2 ? 'secondary' : 'primary']} color="white">
              <Wrapper size="large">
                <Padder size="large">
                  <RichText text={text} />
                </Padder>
              </Wrapper>
            </Background>
          ))}
          
        </>
      )}
    </Layout>
  )
}
