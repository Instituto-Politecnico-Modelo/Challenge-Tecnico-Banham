import api from './api'

// Servicio de ejemplo para entidades del proyecto
// Reemplazar con los servicios reales del challenge

/**
 * Obtiene todos los elementos
 * @returns {Promise<Array>}
 */
export const getAll = () => api.get('/items')

/**
 * Obtiene un elemento por ID
 * @param {string|number} id
 * @returns {Promise<Object>}
 */
export const getById = (id) => api.get(`/items/${id}`)

/**
 * Crea un nuevo elemento
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const create = (data) => api.post('/items', data)

/**
 * Actualiza un elemento existente
 * @param {string|number} id
 * @param {Object} data
 * @returns {Promise<Object>}
 */
export const update = (id, data) => api.put(`/items/${id}`, data)

/**
 * Elimina un elemento
 * @param {string|number} id
 * @returns {Promise<void>}
 */
export const remove = (id) => api.delete(`/items/${id}`)
