export const whiteListedKeys : string[] = ['url', 'image', 'created']

export default (data: object) => {
  return Object.entries(data)
    .filter(([key, val]) => !whiteListedKeys.includes(key) && (typeof val === 'string' || Array.isArray(val)))
    .map(([key,val]) =>  [key, (typeof val === 'string' && val) || (Array.isArray(val) && val.length) || 'No data'])
}