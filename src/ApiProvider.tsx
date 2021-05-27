import React, { createContext, useContext } from 'react'
import { setupCache } from 'axios-cache-adapter'
import axios from 'axios'


const ApiContext = createContext(null)

function createAxiosInstance() {
  const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: { query: false }
  })

  const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    adapter: cache.adapter
  })


  instance.interceptors.response.use(
    function(response) {
      return response
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  return instance
}


export const useApi = () => useContext(ApiContext)


export default ({ children }: {children: React.ReactElement}) => {
  
  const instance = createAxiosInstance()

  const apis : any = {
    get: (url: string) => instance.get(url).then(response => response.data),
    getEpisode: (ids: string) => instance.get(`/episode/${ids}`).then(response => response.data),
    getCharachters: (query: string) => instance.get(`/character${query}`).then(response => response.data),
    getCharachter: (id: string) => instance.get(`character/${id}`).then(response => response.data)
  }

  return <ApiContext.Provider value={apis}>{children}</ApiContext.Provider>
}