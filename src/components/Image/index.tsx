
import React from 'react'
import * as S from './styles'
import { TImageProps } from './types'


const MyImage = ({ image, hasShadow } : TImageProps) => (
  <S.ImageWrapper>
    <img src={image.src} alt={image.alt} loading="lazy" />
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)

export default MyImage
