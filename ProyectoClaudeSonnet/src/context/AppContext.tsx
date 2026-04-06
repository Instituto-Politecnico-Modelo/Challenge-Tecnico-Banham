import { createContext, useContext, useState, type ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface AppContextValue {
  user: User | null
  theme: 'light' | 'dark'
  login: (userData: User) => void
  logout: () => void
  toggleTheme: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const login = (userData: User) => setUser(userData)
  const logout = () => setUser(null)
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <AppContext.Provider value={{ user, theme, login, logout, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext(): AppContextValue {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext debe usarse dentro de <AppProvider>')
  return context
}

export default AppContext