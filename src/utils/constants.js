/**
 * Constantes globales de la aplicación
 * Centralizar todos los valores constantes aquí
 */

// Rutas de navegación
export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
}

// Estados de carga
export const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

// Claves de localStorage
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  THEME: 'theme',
}

// Configuración de paginación por defecto
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
}
