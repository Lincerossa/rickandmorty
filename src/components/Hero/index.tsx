import React from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import Image from '../Image'
import { THeroProps } from './types'

const Hero = ({ image, dotColor, supertitle, title, tags, subtitles }: THeroProps) => (
  <S.HeroWrapper>
    <Image image={image} hasShadow />
    <S.HeroHeader>
      <Wrapper size="large">
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
      </Wrapper>
    </S.HeroHeader>
  </S.HeroWrapper>
)

export default Hero