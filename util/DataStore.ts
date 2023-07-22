import { createContext, useContext } from 'react'
import { StockData } from '../types/MarketDataType'

interface DataStore {
  data: StockData[] | null
  isLoading: boolean
  error: Error | null
}

const Store = createContext({} as DataStore)

export const useDataStore = () => useContext(Store)

export default Store
