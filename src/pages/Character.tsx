import { useEffect, useState} from 'react'
import { useApi } from '../ApiProvider'
import { Wrapper, Padder, Card, Layout, Background, Paragraph} from '../components'
import produceCardProps from '../utility/produceCardProps'
import produceParagraphPropsFromChapter from '../utility/produceParagraphPropsFromChapter'
import produceParagraphPropsFromData from '../utility/produceParagraphPropsFromData'
import theme from '../styles/theme'
import * as C from '../styles/common'

type TLoading = 'started' | 'done' | null

type TEpisode = {
  name: string,
  episode: string
}
export default ({match: {params: {id}}}: any) => {
  const [data, setData]= useState<any>(null)
  const {getCharachter, get, getEpisode } : any = useApi()
  const [loadingStatus, setLoadingStatus] = useState<TLoading>(null)
  
  useEffect(() => {
    async function fetchData(){
      setLoadingStatus('started')
      try {
        const character = await getCharachter(id)
        const { episode, location, origin } = character
        const locationUrl = location?.url?.split('api')?.slice(-1)?.[0]
        const originUrl = origin?.url?.split('api')?.slice(-1)?.[0]
        const episodeIds = episode?.map((url:string) => url.split('/').slice(-1))
        setData({
          cardProps: produceCardProps(character),
          paragraphs: [
            {
              label: 'Character',
              data: produceParagraphPropsFromData(character)
            },
            {
              label: 'Location',
              data: locationUrl && await get(locationUrl).then(produceParagraphPropsFromData)
            },
            {
              label: 'Origin',
              data: originUrl && await get(originUrl).then(produceParagraphPropsFromData)
            },
            {
              label: 'Chapters',
              type: 'tag',
              data: episodeIds && await getEpisode(episodeIds).then((response: TEpisode[] | TEpisode) => [response].flat(1).map(produceParagraphPropsFromChapter))
            }
          ]
        })
      } catch (error) {
        setData(null)
      }
      setLoadingStatus('done')
    }
    fetchData()
  }, [get, getEpisode, getCharachter, id])

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
