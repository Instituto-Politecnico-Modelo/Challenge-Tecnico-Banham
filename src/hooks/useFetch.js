import { useState, useEffect } from 'react'

/**
 * Hook personalizado para obtener datos de una API
 * @param {string} url - URL del endpoint
 * @returns {{ data, loading, error, refetch }}
 */
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    if (!url) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error, refetch: fetchData }
}

export default useFetch
