import React from 'react'
import * as S from './styles'
import Tags from '../Tags'

import { TParagraphProps } from './types'

export default ({label, data}: TParagraphProps) => {
  return (
    <S.Paragraph>
      <h2>{label}</h2>
      {
        label === 'Chapters' 
          ? data.map((chapter: any) => <Tags key={chapter.name} items={[chapter.episode, chapter.name, chapter.air_date]} />)
          : <div>
            {Object.entries(data)
              .filter(([key, val]) => typeof val === 'string' || Array.isArray(val))
              .map(([key,val]) => <div>{key}: <strong>{typeof val === 'string' && val} {Array.isArray(val) && val.length}</strong></div>)}
          </div>}
    </S.Paragraph>
  )
}

