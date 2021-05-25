import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, Tags } from '../components'
import produceCardProps from '../utility/produceCardProps'
import { Background } from '../components/Background/styles'
import theme from '../styles/theme'

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const cardProps = data && produceCardProps(data.character)

  useEffect(() => {
    if(!id) return
    async function fetchData(){
      setLoading(true)
      try {
        const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(result => result.data)
        const location = character?.location?.url && await axios.get(character.location.url).then(result => result.data)  
        const origin = character?.origin?.url && await axios.get(character.origin.url).then(result => result.data)
        const episodes = character.episode?.length > 0 && character.episode.map((url:string) => url.split('/').slice(-1))
        const chapters = episodes?.length && await axios.get(`https://rickandmortyapi.com/api/episode/${episodes}`).then(response => episodes.length > 1 ? response.data : [response.data])
        setData({ character, chapters, location, origin })
      } catch (error) {
        setData(null)
      }
      setLoading(false)
    }
    fetchData()
  }, [id])

  console.log({data})
  
  return (
    <Layout isLoading={isLoading}>
      {!isLoading && !data && <div>NO DATA</div>}
      {data && (
        <>
          <Wrapper size="big">
            <Padder size="large">
              <Card {...cardProps} />
            </Padder>
          </Wrapper>
          {data?.chapters?.length > 0 && <Background background={theme.colors.secondary} color="white">
            <Wrapper size="large">
              <Padder size="large">
                <h2>Chapters</h2>
                {data.chapters.map((chapter: any) => <Tags items={[chapter.episode, chapter.name, chapter.air_date]} /> )}
              </Padder>
            </Wrapper>
          </Background>}
          
        </>
      )}
    </Layout>
  )
}
