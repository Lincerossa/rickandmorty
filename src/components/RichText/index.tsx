import React from 'react'
import * as S from './styles'

type TRichText = {
  children?: JSX.Element,
  text?: string
}

const RichText = ({ text, children } : TRichText) => {
  if (text) {
    return (
      <S.RichText
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }

  if (children) return <S.RichText>{children}</S.RichText>

  return null
}

export default RichText
