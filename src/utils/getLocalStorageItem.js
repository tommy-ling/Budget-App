export const getLocalStorageItem = (key, initialVal) => {
  let value
    if(window.localStorage.getItem(key)) {
      value = JSON.parse(window.localStorage.getItem(key))
    } else {
      value = initialVal
    }
  return value
}