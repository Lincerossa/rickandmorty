
import React from 'react'
import * as S from './styles'

type TImage = {
  image: {
    src: string,
    description?: string
  }
  hasShadow?: boolean
}

const MyImage = ({ image, hasShadow } : TImage) => (
  <S.ImageWrapper>
    <img src={image.src} alt="" />
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)

export default MyImage
