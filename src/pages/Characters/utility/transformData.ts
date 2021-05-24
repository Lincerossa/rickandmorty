import { TCardWithSlug } from '../../../components/ListOfCards/types'

export default (items: any[]) : TCardWithSlug[] => items?.map((item: any) => ({
  image: {src: item.image, alt: ''},
  dotColor: item.status === 'Alive' ? 'green' : 'red',
  supertitle: `${item.status} - ${item.species}`,
  title: item.name,
  tags: [`${item.gender}`, `${item.episode?.length} episodes`],
  subtitles: [`ORIGIN: ${item.origin?.name}`, `LAST SEEN: ${item.location?.name}`],
  slug: `/${item.id}`
})) || []