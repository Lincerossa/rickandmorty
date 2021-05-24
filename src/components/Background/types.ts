export type TBackgroundStyle = {
  background: string,
  color?: string,
}

export interface TBackgroundProps extends TBackgroundStyle {
  children: React.ReactNode
}