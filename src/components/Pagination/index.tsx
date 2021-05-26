import React from 'react'
import ReactPaginate from 'react-paginate'
import * as S from './styles'
import { TPaginationProps } from './types'

export default ({ initialPage, total, pageCount, pageRangeDisplayed, onPageChange, previousLabel, nextLabel, marginPagesDisplayed} : TPaginationProps) => (
  <S.Pagination>
    <S.Total>{total} results</S.Total>
    <ReactPaginate
      forcePage={initialPage}
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


