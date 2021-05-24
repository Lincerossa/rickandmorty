import React from 'react'
import Image from '../Image'
import * as S from './styles'

export type TCard = {
  image: {
    src: string,
    description: string,
  },
  hasShadow?: boolean
  dotColor?: string,
  supertitle: string,
  title: string,
  tags: string[],
  subtitles: string[],
  layout: string,
}

const Card = ({ image, dotColor, supertitle, title, tags, subtitles, layout = 'auto' } : TCard) => (
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
      {subtitles?.length > 0 && subtitles.map(subtitle =><S.Subtitle>{subtitle}</S.Subtitle>)}
    </S.Description>
  </S.Card>
)

export default Card
