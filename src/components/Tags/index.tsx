import React from 'react'
import * as S from './styles'
import { TTagsProps } from './types'

export default ({ items } : TTagsProps) => <S.TagsWrapper>
  {
    items.map((tag: string, i:number) => <S.Tag key={tag} isLast={i === items.length -1 }>{tag}</S.Tag>)
  }
</S.TagsWrapper>