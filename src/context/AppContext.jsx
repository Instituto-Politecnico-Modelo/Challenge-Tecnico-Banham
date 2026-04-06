import { createContext, useContext, useState } from 'react'

// 1. Crear el contexto
const AppContext = createContext(null)

// 2. Proveedor del contexto
export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const value = {
    user,
    theme,
    login,
    logout,
    toggleTheme,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// 3. Hook personalizado para consumir el contexto
export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de <AppProvider>')
  }
  return context
}

export default AppContext
