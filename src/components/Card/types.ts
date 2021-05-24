export type TCardProps = {
  image: {
    src: string,
    description: string,
  },
  hasShadow?: boolean
  dotColor?: string,
  supertitle: string,
  title: string,
  tags: string[],
  subtitles: string[],
  layout: string,
}