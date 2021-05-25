import { TCardWithSlug } from '../components/ListOfCards/types'

import produceCardProps from './produceCardProps'

export default (items: any[]) : TCardWithSlug[] => items?.map(produceCardProps) || []