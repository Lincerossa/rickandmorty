import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, Tags } from '../components'
import produceCardProps from '../utility/produceCardProps'
import { Background } from '../components/Background/styles'
import theme from '../styles/theme'
import * as C from '../styles/common'

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const [loadingStatus, setLoadingStatus] = useState<string>('')
  
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
              data:character
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
              data: episode?.length && await axios.get(`https://rickandmortyapi.com/api/episode/${episode.map((url:string) => url.split('/').slice(-1))}`).then(response => episode.length > 1 ? response.data : [response.data])
            }
          ].filter(({data}) => data)
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
      {cardProps && (
        <>
          <Wrapper size="big">
            <Padder size="large">
              <Card {...cardProps} />
            </Padder>
          </Wrapper>
          {
            paragraphs.map((e: any, i:number) =>  (
              <Background background={theme.colors[i % 2 ? 'secondary' : 'primary']} color="white">
                <Wrapper size="large">
                  <Padder size="large">
                    <h2>{e.label}</h2>
                    {
                      e.label === 'Chapters' 
                        ? 
                        e.data.map((chapter: any) => <Tags key={chapter.name} items={[chapter.episode, chapter.name, chapter.air_date]} />)
                        : <div>
                          {Object.entries(e.data)
                            .filter(([key, val]) => typeof val === 'string' || Array.isArray(val))
                            .map(([key,val]) => <div>{key}: <strong>{typeof val === 'string' && val} {Array.isArray(val) && val.length}</strong></div>)}
                        </div>}
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
