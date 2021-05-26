import React from 'react'
import * as S from './styles'
import Tags from '../Tags'

import { TParagraphProps } from './types'

export default ({label, data}: TParagraphProps) => {
  return (
    <S.Paragraph>
      <h2>{label}</h2>
      {data
        ? data.map((items: string []) => <Tags key={items[0]} items={items} />)
        : <small>Missing data</small>
      }
    </S.Paragraph>
  )
}

