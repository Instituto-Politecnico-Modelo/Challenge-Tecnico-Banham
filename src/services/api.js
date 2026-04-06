// Base URL de la API - modificar según el proyecto
const BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com'

/**
 * Función base para realizar peticiones HTTP
 * @param {string} endpoint
 * @param {RequestInit} options
 * @returns {Promise<any>}
 */
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`

  const defaultHeaders = {
    'Content-Type': 'application/json',
  }

  // Agregar token de autorización si existe
  const token = localStorage.getItem('token')
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.message || `Error ${response.status}`)
  }

  return response.json()
}

// Métodos HTTP
export const api = {
  get: (endpoint) => request(endpoint, { method: 'GET' }),
  post: (endpoint, body) =>
    request(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body) =>
    request(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  patch: (endpoint, body) =>
    request(endpoint, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (endpoint) => request(endpoint, { method: 'DELETE' }),
}

export default api
