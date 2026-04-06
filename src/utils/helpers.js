/**
 * Formatea una fecha en formato legible en español
 * @param {string|Date} date
 * @param {Intl.DateTimeFormatOptions} options
 * @returns {string}
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  }
  return new Intl.DateTimeFormat('es-AR', defaultOptions).format(new Date(date))
}

/**
 * Formatea un número como moneda (peso argentino por defecto)
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'ARS') {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * Capitaliza la primera letra de un string
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Trunca un texto si supera el límite de caracteres
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Verifica si un valor es un email válido
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Genera un ID único simple
 * @returns {string}
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}
