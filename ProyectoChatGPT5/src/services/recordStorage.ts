const RECORD_STORAGE_KEY = 'juego-contador-record'

export function getStoredRecord(): number {
  if (typeof window === 'undefined') {
    return 0
  }

  const rawValue = window.localStorage.getItem(RECORD_STORAGE_KEY)
  const parsedValue = Number(rawValue)

  if (!Number.isFinite(parsedValue) || parsedValue < 0) {
    return 0
  }

  return parsedValue
}

export function setStoredRecord(record: number): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(RECORD_STORAGE_KEY, String(record))
}