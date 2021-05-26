import styled from 'styled-components'
import {TPaginationStyle} from './types'


export const Pagination = styled.div<TPaginationStyle>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    margin: 0;
    display: flex;
    padding: 0;
    list-style: none;

    li {
      cursor: pointer;
      padding: 0 .25rem;
      border-radius: 3px;
    }

    a {
      color: white !important;
      transition: .2s all;
      &:hover {
        color: ${props => props.theme.colors.thirdary} !important;
      }
    }
    .selected {
      * {
        color: ${props => props.theme.colors.thirdary} !important;
    }
    }
  }
`

export const Total = styled.div`
  color: ${props => props.theme.colors.light};
`