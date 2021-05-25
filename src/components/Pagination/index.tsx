import React from 'react'
import ReactPaginate from 'react-paginate'
import * as S from './styles'
import { TPaginationProps } from './types'

export default ({ initialPage, pageCount, pageRangeDisplayed, onPageChange, previousLabel, nextLabel, marginPagesDisplayed, align} : TPaginationProps) => (
  <S.Pagination align={align}>
    <ReactPaginate
      previousLabel={previousLabel}
      nextLabel={nextLabel}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      pageCount={pageCount}
    />
  </S.Pagination>
)


