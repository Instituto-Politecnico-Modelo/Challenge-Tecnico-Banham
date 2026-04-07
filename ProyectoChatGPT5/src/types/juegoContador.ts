export type GameState = 'idle' | 'countdown' | 'playing' | 'finished'

export type CountdownMessage = 'preparados' | 'listos' | 'ya'

export interface JuegoContadorHookResult {
  announcement: CountdownMessage | ''
  canClick: boolean
  canStart: boolean
  clicks: number
  gameState: GameState
  handleStart: () => void
  isNewRecord: boolean
  lastScore: number
  record: number
  registerClick: () => void
  timeLeftSeconds: number
}