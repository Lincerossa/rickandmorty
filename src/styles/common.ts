import styled from 'styled-components'

export const EmptyData = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light};
  font-size: 4rem;
  font-weight: 100;
`