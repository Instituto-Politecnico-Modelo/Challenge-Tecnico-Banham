import { useState, useEffect } from 'react'

/**
 * Hook para sincronizar estado con localStorage
 * @param {string} key - Clave en localStorage
 * @param {*} initialValue - Valor inicial
 * @returns {[value, setValue]}
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error('useLocalStorage - error al leer:', error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error('useLocalStorage - error al guardar:', error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
