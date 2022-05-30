import { useReducer, useEffect } from "react"
import reducer from "./reducer"

const useLocalStorageReducer = (key, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    let value
    if(window.localStorage.getItem(key)) {
      value = JSON.parse(localStorage.getItem(key))
    } else {
      value = initialState
    }
    return value
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, dispatch]
}

export { useLocalStorageReducer }