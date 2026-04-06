const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? 'https://api.example.com'

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BASE_URL}${endpoint}`

  const defaultHeaders: Record<string, string> = { 'Content-Type': 'application/json' }

  const token = localStorage.getItem('token')
  if (token) defaultHeaders['Authorization'] = `Bearer ${token}`

  const response = await fetch(url, {
    ...options,
    headers: { ...defaultHeaders, ...(options.headers as Record<string, string>) },
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({})) as { message?: string }
    throw new Error(err.message ?? `Error ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const api = {
  get:    <T>(endpoint: string)                    => request<T>(endpoint, { method: 'GET' }),
  post:   <T>(endpoint: string, body: unknown)     => request<T>(endpoint, { method: 'POST',  body: JSON.stringify(body) }),
  put:    <T>(endpoint: string, body: unknown)     => request<T>(endpoint, { method: 'PUT',   body: JSON.stringify(body) }),
  patch:  <T>(endpoint: string, body: unknown)     => request<T>(endpoint, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: <T>(endpoint: string)                    => request<T>(endpoint, { method: 'DELETE' }),
}

export default api