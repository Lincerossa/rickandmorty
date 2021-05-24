import React from 'react'
import Image from '../Image'
import * as S from './styles'
import { TCardProps } from './types'

const Card = ({ image, dotColor, supertitle, title, tags, subtitles, layout = 'auto' } : TCardProps) => (
  <S.Card>
    <S.ImageWrapper layout={layout}>
      <Image image={image} hasShadow />
    </S.ImageWrapper>

    <S.Description>
      <S.Supertitle>{dotColor && <S.Dot color={dotColor} />}{supertitle}</S.Supertitle>
      <S.Title>{title}</S.Title>
      { tags?.length > 0
          && (
            <S.TagsWrapper>
              {
                tags.map((tag) => <S.Tag key={tag}>{tag}</S.Tag>)
              }
            </S.TagsWrapper>
          )}
      {subtitles?.length > 0 && subtitles.map(subtitle =><S.Subtitle key={subtitle}>{subtitle}</S.Subtitle>)}
    </S.Description>
  </S.Card>
)

export default Card
