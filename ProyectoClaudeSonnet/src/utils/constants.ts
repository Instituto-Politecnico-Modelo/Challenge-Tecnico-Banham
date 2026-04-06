// ─── Game ────────────────────────────────────────────────
export const GAME_DURATION = 5
export const COUNTDOWN_STEPS = ['Preparados', 'Listos', 'Ya'] as const

// ─── Request status ───────────────────────────────────────
export const STATUS = {
  IDLE:    'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR:   'error',
} as const

// ─── localStorage keys ────────────────────────────────────
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER:  'user',
  THEME: 'theme',
} as const