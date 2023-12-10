const getValueType = (value: any) => {
  const type = Object.prototype.toString.call(value)
  return type.slice(8, -1)
}

export const useStorage = (type: 'localStorage' | 'sessionStorage' = 'localStorage') => {
  const setStorage = (key: string, value: any) => {
    const valueType = getValueType(value)
    window[type].setItem(key, JSON.stringify({type: valueType, value}))
  }

  const getStorage = (key: string) => {
    const value = window[type].getItem(key)
    if (value) {
      const { value: val } = JSON.parse(value)
      return val
    } else {
      return value
    }
  }

  const removeStorage = (key: string) => {
    window[type].removeItem(key)
  }

  const clear = (excludes?: string[]) => {
    const keys = Object.keys(window[type])
    const defaultExcludes = ['dynamicRouter']
    const excludesArr = excludes ? [...excludes, ...defaultExcludes] : defaultExcludes
    const excludesKeys = excludesArr ? keys.filter((key) => !excludesArr.includes(key)) : keys

    // 排除
    excludesKeys.forEach((key) => {
      window[type].removeItem(key)
    })
  }

  return {
    setStorage,
    getStorage,
    removeStorage,
    clear
  }
}
