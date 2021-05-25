import styled from 'styled-components'
import {TPaginationStyle} from './types'


export const Pagination = styled.div<TPaginationStyle>`

  ul {
    margin: 0;
    display: flex;
    padding: 0;
    list-style: none;
    justify-content: ${props => props.align === 'right' ? 'flex-end ': 'flex-start'};

    li {
      cursor: pointer;
      margin: 0 .25rem;
      padding: .25rem;
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
        color: ${props => props.theme.colors.primary} !important;
    }
    }
  }
`
