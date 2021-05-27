import React from 'react'
import * as S from './styles'
import { TFiltersBarProps } from './types'

export default ({ onChange, initialState } : TFiltersBarProps) => {
  return (
    <S.FiltersBar>
      <input placeholder="Name" type="text" defaultValue={initialState.name} onChange={e => onChange('name', e.target?.value?.length > 3 ? e.target.value : null)} />
      <select defaultValue={initialState.gender} onChange={e => onChange('gender', e.target.value)}>
        <option value={''}>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select defaultValue={initialState.status} onChange={e => onChange('status', e.target.value)}>
        <option value={''}>Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </S.FiltersBar>
  )
}


