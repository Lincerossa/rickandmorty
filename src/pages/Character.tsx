import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, Background, Paragraph} from '../components'
import produceCardProps from '../utility/produceCardProps'
import produceParagraphPropsFromChapter from '../utility/produceParagraphPropsFromChapter'
import produceParagraphPropsFromData from '../utility/produceParagraphPropsFromData'
import theme from '../styles/theme'
import * as C from '../styles/common'

type TLoading = 'started' | 'done' | null

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState<TLoading>(null)
  
  useEffect(() => {
    if(!id) return
    async function fetchData(){
      setLoadingStatus('started')
      try {
        const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(e => e.data)
        const { episode, location, origin } = character
        setData({
          cardProps: produceCardProps(character),
          paragraphs: [
            {
              label: 'Character',
              data: produceParagraphPropsFromData(character)
            },
            {
              label: 'Location',
              data: location?.url && await axios.get(location.url).then(e => produceParagraphPropsFromData(e.data))
            },
            {
              label: 'Origin',
              data: origin?.url && await axios.get(origin.url).then(e => produceParagraphPropsFromData(e.data))
            },
            {
              label: 'Chapters',
              type: 'tag',
              data: episode?.length && await axios.get(`https://rickandmortyapi.com/api/episode/${episode.map((url:string) => url.split('/').slice(-1))}`).then(response => [response.data].flat(1).map(produceParagraphPropsFromChapter))
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

  return (
    <Layout isLoading={loadingStatus === 'started'}>
      {
        loadingStatus === 'done' && !data && <C.EmptyData>No existing character!</C.EmptyData>
      }
      {cardProps && <Wrapper size="big">
        <Padder size="regular">
          <Card {...cardProps} />
        </Padder>
      </Wrapper>}

      {paragraphs?.map(({label, data}: {label: string, data: string[][]}, i:number) =>  (
        <Background key={label} background={theme.colors[i % 2 ? 'secondary' : 'primary']} color="white">
          <Wrapper size="large">
            <Padder size="small">
              <Paragraph label={label} data={data} />
            </Padder>
          </Wrapper>
        </Background>
      ))}
    </Layout>
  )
}
