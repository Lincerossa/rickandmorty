import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, Background, Paragraph} from '../components'
import produceCardProps from '../utility/produceCardProps'
import theme from '../styles/theme'
import * as C from '../styles/common'


export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState<'started' | 'done' | null>(null)
  
  useEffect(() => {
    if(!id) return
    async function fetchData(){
      setLoadingStatus('started')
      try {
        const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(result => result.data)
        const { episode, location, origin } = character
        setData({
          cardProps: produceCardProps(character),
          paragraphs: [
            {
              label: 'Character',
              data: character
            },
            {
              label: 'Location',
              data: location?.url && await axios.get(location.url).then(result => result.data)
            },
            {
              label: 'Origin',
              data:  origin?.url && await axios.get(origin.url).then(result => result.data)
            },
            {
              label: 'Chapters',
              data: episode?.length && await axios.get(`https://rickandmortyapi.com/api/episode/${episode.map((url:string) => url.split('/').slice(-1))}`).then(response => [response.data].flat(1))
            }
          ]
        })
      } catch (error) {
        setData(null)
      }
      setLoadingStatus('done')
    }
    fetchData()
  }, [id])

  const { cardProps, paragraphs } = data || {}

  console.log(data)
  return (
    <Layout isLoading={loadingStatus === 'started'}>
      {
        loadingStatus === 'done' && !data && <C.EmptyData>No existing character!</C.EmptyData>
      }
      {cardProps && (
        <>
          <Wrapper size="big">
            <Padder size="large">
              <Card {...cardProps} />
            </Padder>
          </Wrapper>
          {
            paragraphs.map(({label, data}: {label: string, data: any}, i:number) =>  (
              <Background background={theme.colors[i % 2 ? 'secondary' : 'primary']} color="white">
                <Wrapper size="large">
                  <Padder size="large">
                    <Paragraph label={label} data={data} />
                  </Padder>
                </Wrapper>
              </Background>
            ))
          }
        </>
      )}
    </Layout>
  )
}
