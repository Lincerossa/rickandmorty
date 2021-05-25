import {TCardProps} from '../Card/types'

export interface TCardWithSlug extends TCardProps {
  slug: string
}

export type TListOfCardsProps = {
  items: TCardWithSlug[],
  isLoading: boolean,
}
