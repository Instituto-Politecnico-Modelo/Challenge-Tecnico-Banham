import type { CountdownMessage } from '../types/juegoContador'

export const GAME_DURATION_SECONDS = 5
export const GAME_DURATION_MS = GAME_DURATION_SECONDS * 1000
export const MESSAGE_FLASH_MS = 450

export const COUNTDOWN_MESSAGES: CountdownMessage[] = [
  'preparados',
  'listos',
  'ya',
]