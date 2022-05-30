import React, { createContext } from 'react'
import { useLocalStorageReducer } from './useLocalStorageReducer'

export const AppContext = createContext()

const initialVal = [{
  id: 1,
  name: 'gym',
  cost: 35,
  date: '2022-05-11'
}, {
  id: 2,
  name: 'lunch',
  cost: 10,
  date: '2022-05-20'
}]

export function AppProvider(props) {
  const [expItems, dispatch] = useLocalStorageReducer('transactions', initialVal)
  return (
    <AppContext.Provider value={{expItems, dispatch}}>
      {props.children}
    </AppContext.Provider>
  )
}