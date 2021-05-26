import styled from 'styled-components'


export const FiltersBar = styled.div`
  padding: .5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  @media (min-width: 978px){
    justify-content: flex-end;
  }

  select {
    cursor: pointer;
  }

  input, select {
    padding: 0 .5rem;
    height: 2rem;
    font-size: .75rem;
    font-family: sans-serif;
    outline: none;
    margin-left: .5rem;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
    &:nth-child(1){
      margin: 0;
    }
    @media (min-width: 978px){
      font-size: 1rem;
    }
  }
`
