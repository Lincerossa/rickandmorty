import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  display: block;
  height: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: .1s all;
  box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.1);
  &:hover {
    box-shadow: 0 0 9.5px 0.5px rgba(0,0,0,.3)
  }
`

export const ImageWrapper = styled.div<{layout: string}>`
  position: relative;
  overflow: hidden;
  ${(props) => props.layout === 'auto' && `
    padding-top: 100%;
    img {
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      object-fit: cover;
    }
  `}
`

export const Supertitle = styled.div`
  font-family: sans-serif;
  color: white;
  font-weight: 100;
  font-size: .875rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 100;
  line-height: 1;
  margin-bottom: .5rem;
  color: white;
`

export const Subtitle = styled.div`
  font-size: .75rem;
  color: white;
  font-weight: 100;
  margin-bottom: .25rem;
`

export const Description = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 1;
`

export const Dot = styled.div`
  border-radius: 50%;
  width: .75rem;
  height: .75rem;
  margin-right: .5rem;
  background-color: ${props => props.color};
`