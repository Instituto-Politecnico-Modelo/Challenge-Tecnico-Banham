import { useState, useRef, useCallback, useEffect } from 'react'
import { GAME_DURATION, COUNTDOWN_STEPS } from '../utils/constants'

export type GameState = 'idle' | 'countdown' | 'playing' | 'finished'

export interface JuegoContadorState {
  gameState: GameState
  countdownMessage: string
  clicks: number
  record: number
  timeLeft: number
  isNewRecord: boolean
  isStartDisabled: boolean
  isClickDisabled: boolean
  handleStart: () => void
  handleClickButton: () => void
}

function useJuegoContador(): JuegoContadorState {
  const [gameState, setGameState]               = useState<GameState>('idle')
  const [countdownMessage, setCountdownMessage] = useState<string>('')
  const [clicks, setClicks]                     = useState<number>(0)
  const [record, setRecord]                     = useState<number>(0)
  const [timeLeft, setTimeLeft]                 = useState<number>(GAME_DURATION)
  const [isNewRecord, setIsNewRecord]           = useState<boolean>(false)

  const clicksRef   = useRef<number>(0)
  const recordRef   = useRef<number>(0)
  const timerRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  const clearAllTimers = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    timeoutRefs.current.forEach(clearTimeout)
    timeoutRefs.current = []
  }, [])

  // Cleanup all timers on unmount
  useEffect(() => () => clearAllTimers(), [clearAllTimers])

  const startPlaying = useCallback(() => {
    setGameState('playing')
    setCountdownMessage('')
    setTimeLeft(GAME_DURATION)

    let remaining = GAME_DURATION

    timerRef.current = setInterval(() => {
      remaining -= 1
      setTimeLeft(remaining)

      if (remaining <= 0) {
        clearInterval(timerRef.current!)
        timerRef.current = null

        const finalClicks = clicksRef.current
        const newRecord   = finalClicks > recordRef.current

        if (newRecord) {
          recordRef.current = finalClicks
          setRecord(finalClicks)
        }

        setIsNewRecord(newRecord)
        setGameState('finished')
      }
    }, 1000)
  }, [])

  const handleStart = useCallback(() => {
    clearAllTimers()
    clicksRef.current = 0
    setClicks(0)
    setIsNewRecord(false)
    setGameState('countdown')

    COUNTDOWN_STEPS.forEach((msg, i) => {
      const t = setTimeout(() => setCountdownMessage(msg), i * 1000)
      timeoutRefs.current.push(t)
    })

    // Game starts when "Ya" appears: (length - 1) steps * 1000ms
    const startT = setTimeout(startPlaying, (COUNTDOWN_STEPS.length - 1) * 1000)
    timeoutRefs.current.push(startT)
  }, [clearAllTimers, startPlaying])

  const handleClickButton = useCallback(() => {
    if (gameState !== 'playing') return
    clicksRef.current += 1
    setClicks(clicksRef.current)
  }, [gameState])

  return {
    gameState,
    countdownMessage,
    clicks,
    record,
    timeLeft,
    isNewRecord,
    isStartDisabled: gameState === 'countdown' || gameState === 'playing',
    isClickDisabled: gameState !== 'playing',
    handleStart,
    handleClickButton,
  }
}

export default useJuegoContador