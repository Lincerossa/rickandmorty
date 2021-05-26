import styled from 'styled-components'

export const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  letter-spacing: .04em;
`
export const Tag = styled.div<{isLast: boolean, isInParagraph?: boolean}>`
  border-radius: 4px;
  color: white;
  font-size: .6rem;
  font-weight: ${props => (props.isInParagraph && props.isLast) ? 100 : 600};
  font-family: sans-serif;
  position: relative;
  margin-right: 1rem;
  text-transform: uppercase;

  @media (min-width: 978px){
    font-size: ${props => props.isInParagraph ? '1rem' : '.6rem'};
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: 50%;
    right: -.7rem;
    width: .4rem;
    height: .4rem;
    display: ${props => props.isLast ? 'none' : 'block'};
    background: ${(props) => props.theme.colors.thirdary};
  }
`
