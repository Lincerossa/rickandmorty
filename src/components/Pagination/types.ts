export type TPaginationStyle = {
  align?: 'left' | 'right'
}

export interface TPaginationProps extends TPaginationStyle {
  pageRangeDisplayed: number,
  pageCount: number,
  onPageChange: any,
  initialPage: number,
  marginPagesDisplayed: number
  previousLabel: string,
  nextLabel: string,
  total?: number | undefined
}