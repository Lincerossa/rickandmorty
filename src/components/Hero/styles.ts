import styled from 'styled-components'

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;
  }
`

export const HeroHeader = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  z-index:1;
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

export const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  letter-spacing: .04em;
`
export const Tag = styled.div`
  border-radius: 4px;
  color: white;
  font-size: .6rem;
  font-weight: 600;
  font-family: sans-serif;
  position: relative;
  margin-right: 1rem;
  text-transform: uppercase;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: 50%;
    right: -.7rem;
    width: .4rem;
    height: .4rem;
    background: ${(props) => props.theme.colors.light};
  }
`

export const Dot = styled.div`
  border-radius: 50%;
  width: .75rem;
  height: .75rem;
  margin-right: .5rem;
  background-color: ${props => props.color};
`