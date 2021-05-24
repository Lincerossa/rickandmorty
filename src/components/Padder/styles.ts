import styled from 'styled-components'

const SIZES = {
  small: 1,
  regular: 2,
  large: 3
}

export const Padder = styled.div<{size: 'small' | 'regular' | 'large'}>`
  padding: ${(props) => `${SIZES[props.size]}rem 0`};
`
