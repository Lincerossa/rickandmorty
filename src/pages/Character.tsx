import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Wrapper, Padder, Card, Layout, RichText } from '../components'
import produceCardProps from '../utility/produceCardProps'
import { Background } from '../components/Background/styles'
import theme from '../styles/theme'

function produceListOfText({chapterNames}: {chapterNames: []}){
  return [
    '<h1>Bio</h1>',
    '<h1>Origin</h1>',
    '<h1>Location</h1>',
    `<h1>Chapters</h1>
      <ul>
        ${chapterNames.map(({name}: {name: string}) => `<li>${name}</li>`)}
      </ul>
    `
  ]
}

export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const cardProps = data && produceCardProps(data.character)
  const listOfText = data && produceListOfText(data)

  useEffect(() => {
    if(!id) return
    async function fetchData(){
      setLoading(true)
      try {
        const character = await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(result => result.data)  
        const location = character?.location?.url && await axios.get(character.location.url).then(result => result.data)  
        const origin = character?.origin?.url && await axios.get(character.origin.url).then(result => result.data)
        const episodes = character.episode?.length > 0 && character.episode.map((  e:any) => e.split('/').slice(-1))
        const chapterNames = episodes && await axios.get(`https://rickandmortyapi.com/api/episode/${episodes}`).then(response => response.data)
        setData({ character, chapterNames, location, origin })
      } catch (error) {
        setData(null)
      }

      setLoading(false)
    }
    fetchData()
  }, [id])
  
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
          {listOfText.map((text:string, i:number) => (
            <Background key={text} background={theme.colors[i%2 ? 'secondary' : 'primary']} color="white">
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
