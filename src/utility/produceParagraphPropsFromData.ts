export const whiteListedKeys : string[] = ['url', 'image', 'created']

export default (data: object) => {
  return Object.entries(data)
    .filter(([key]) => !whiteListedKeys.includes(key))
    .map(([key,val]) =>  [key, (['string', 'number'].includes(typeof val) && val) || (Array.isArray(val) && val.length) || 'Unknown'])
}