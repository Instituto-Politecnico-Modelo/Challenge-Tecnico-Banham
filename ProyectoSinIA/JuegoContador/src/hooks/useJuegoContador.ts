import { useState, useEffect } from 'react';

export type GameState = 'idle' | 'countdown' | 'playing' | 'finished';

export function useJuegoContador() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [countdownMessage, setCountdownMessage] = useState('');
  const [clicks, setClicks] = useState(0);
  const [record, setRecord] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);

  const handleStart = () => {
    setGameState('countdown');
    setClicks(0);
    setTimeLeft(5);
    setCountdownMessage('Preparados');
  };

  const handleClickButton = () => {
    if (gameState === 'playing') {
      setClicks((prev) => prev + 1);
    }
  };

  // Efecto para la cuenta regresiva (tomado prestado de los otros proyectos pero más simple)
  useEffect(() => {
    if (gameState === 'countdown') {
      const t1 = setTimeout(() => setCountdownMessage('Listos'), 1000);
      const t2 = setTimeout(() => setCountdownMessage('Ya'), 2000);
      const t3 = setTimeout(() => {
        setGameState('playing');
        setCountdownMessage('');
      }, 3000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [gameState]);

  // Efecto para el temporizador principal
  useEffect(() => {
    let timer: any;
    
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  // Efecto paralelo para manejar el final del juego sin reiniciar el temporizador por cada click
  useEffect(() => {
    if (gameState === 'playing' && timeLeft === 0) {
      setGameState('finished');
      setRecord((prev) => clicks > prev ? clicks : prev);
    }
  }, [timeLeft, gameState, clicks]);

  const isStartDisabled = gameState === 'countdown' || gameState === 'playing';
  const isClickDisabled = gameState !== 'playing';
  const isNewRecord = gameState === 'finished' && clicks > 0 && clicks >= record;

  return {
    gameState,
    countdownMessage,
    clicks,
    record,
    timeLeft,
    isStartDisabled,
    isClickDisabled,
    isNewRecord,
    handleStart,
    handleClickButton
  };
}
