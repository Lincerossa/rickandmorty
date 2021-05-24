import {TCardProps} from '../Card/types'

interface Item extends TCardProps {
  slug: string
}

export type TListOfCardsProps = {
  items: Item[]
}
