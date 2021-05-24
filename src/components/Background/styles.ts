import styled from 'styled-components'

import { TBackgroundStyle } from './types'

export const Background = styled.div<TBackgroundStyle>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  * {
    color: ${(props) => props.color};
  }
`
