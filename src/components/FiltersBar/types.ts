export type TFiltersBarProps = {
  onChange: Function,
  initialState: {
    name?: string | undefined
    status?: 'alive'| 'dead' | 'unknown' | undefined,
    gender?: 'female' | 'male' | 'genderless' | 'unknown' | undefined
  }
}
