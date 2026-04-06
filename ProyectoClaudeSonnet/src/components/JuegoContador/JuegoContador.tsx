import styles from './JuegoContador.module.css'
import useJuegoContador from '../../hooks/useJuegoContador'

function JuegoContador() {
  const {
    gameState,
    countdownMessage,
    clicks,
    record,
    timeLeft,
    isNewRecord,
    isStartDisabled,
    isClickDisabled,
    handleStart,
    handleClickButton,
  } = useJuegoContador()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JuegoContador</h1>

      <div className={styles.record}>
        <span className={styles.recordLabel}>Record</span>
        <span className={styles.recordValue}>{record}</span>
      </div>

      <div className={styles.status}>
        {gameState === 'idle' && (
          <p className={styles.statusIdle}>Presiona Iniciar para comenzar</p>
        )}
        {gameState === 'countdown' && (
          <p key={countdownMessage} className={styles.statusCountdown}>
            {countdownMessage}
          </p>
        )}
        {gameState === 'playing' && (
          <p className={styles.statusPlaying}>
            <strong>{timeLeft}s</strong> restantes
          </p>
        )}
        {gameState === 'finished' && (
          <p className={styles.statusFinished}>
            {isNewRecord
              ? 'Nuevo record!'
              : `Puntaje: ${clicks} - Record: ${record}`}
          </p>
        )}
      </div>

      <div className={styles.clickCounter}>
        <span className={styles.clickNumber}>{clicks}</span>
        <span className={styles.clickLabel}>clicks</span>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.btnStart}
          onClick={handleStart}
          disabled={isStartDisabled}
        >
          Iniciar
        </button>
        <button
          className={styles.btnClick}
          onClick={handleClickButton}
          disabled={isClickDisabled}
        >
          Click!
        </button>
      </div>
    </div>
  )
}

export default JuegoContador