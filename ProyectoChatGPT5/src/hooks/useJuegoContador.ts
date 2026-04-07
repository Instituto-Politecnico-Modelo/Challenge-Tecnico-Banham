import { useCallback, useEffect, useRef, useState } from 'react'
import { getStoredRecord, setStoredRecord } from '../services/recordStorage'
import {
  COUNTDOWN_MESSAGES,
  GAME_DURATION_MS,
  GAME_DURATION_SECONDS,
  MESSAGE_FLASH_MS,
} from '../utils/gameConstants'
import type {
  CountdownMessage,
  GameState,
  JuegoContadorHookResult,
} from '../types/juegoContador'

function useJuegoContador(): JuegoContadorHookResult {
  const [announcement, setAnnouncement] = useState<CountdownMessage | ''>('')
  const [clicks, setClicks] = useState(0)
  const [gameState, setGameState] = useState<GameState>('idle')
  const [isNewRecord, setIsNewRecord] = useState(false)
  const [lastScore, setLastScore] = useState(0)
  const [record, setRecord] = useState(() => getStoredRecord())
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(GAME_DURATION_SECONDS)

  const clicksRef = useRef(0)
  const countdownTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
  const displayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const recordRef = useRef(record)

  const clearTimers = useCallback(() => {
    countdownTimeoutsRef.current.forEach(clearTimeout)
    countdownTimeoutsRef.current = []

    if (displayTimerRef.current) {
      clearInterval(displayTimerRef.current)
      displayTimerRef.current = null
    }

    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current)
      finishTimerRef.current = null
    }
  }, [])

  const finishRound = useCallback(() => {
    clearTimers()

    const finalClicks = clicksRef.current
    const hasNewRecord = finalClicks > recordRef.current

    setLastScore(finalClicks)
    setTimeLeftSeconds(0)
    setGameState('finished')
    setAnnouncement('')
    setIsNewRecord(hasNewRecord)

    if (hasNewRecord) {
      recordRef.current = finalClicks
      setRecord(finalClicks)
      setStoredRecord(finalClicks)
    }
  }, [clearTimers])

  const startRound = useCallback(() => {
    const endsAt = Date.now() + GAME_DURATION_MS

    setGameState('playing')
    setTimeLeftSeconds(GAME_DURATION_SECONDS)

    displayTimerRef.current = setInterval(() => {
      const remainingMs = Math.max(0, endsAt - Date.now())
      setTimeLeftSeconds(Math.max(0, Math.ceil(remainingMs / 1000)))
    }, 100)

    finishTimerRef.current = setTimeout(() => {
      finishRound()
    }, GAME_DURATION_MS)
  }, [finishRound])

  const handleStart = useCallback(() => {
    clearTimers()
    clicksRef.current = 0

    setAnnouncement('')
    setClicks(0)
    setGameState('countdown')
    setIsNewRecord(false)
    setLastScore(0)
    setTimeLeftSeconds(GAME_DURATION_SECONDS)

    COUNTDOWN_MESSAGES.forEach((message, index) => {
      const timeout = setTimeout(() => {
        setAnnouncement(message)

        if (message === 'ya') {
          startRound()

          const clearAnnouncementTimeout = setTimeout(() => {
            setAnnouncement('')
          }, MESSAGE_FLASH_MS)

          countdownTimeoutsRef.current.push(clearAnnouncementTimeout)
        }
      }, index * 1000)

      countdownTimeoutsRef.current.push(timeout)
    })
  }, [clearTimers, startRound])

  const registerClick = useCallback(() => {
    if (gameState !== 'playing') {
      return
    }

    clicksRef.current += 1
    setClicks(clicksRef.current)
  }, [gameState])

  useEffect(() => {
    return () => {
      clearTimers()
    }
  }, [clearTimers])

  return {
    announcement,
    canClick: gameState === 'playing',
    canStart: gameState === 'idle' || gameState === 'finished',
    clicks,
    gameState,
    handleStart,
    isNewRecord,
    lastScore,
    record,
    registerClick,
    timeLeftSeconds,
  }
}

export default useJuegoContador