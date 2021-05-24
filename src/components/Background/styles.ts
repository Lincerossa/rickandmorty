import styled from 'styled-components'

export const Background = styled.div<{background: string, color?: string}>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  * {
    color: ${(props) => props.color};
  }
`
