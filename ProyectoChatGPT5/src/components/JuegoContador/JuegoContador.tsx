import ActionButton from '../common/ActionButton'
import useJuegoContador from '../../hooks/useJuegoContador'
import styles from './JuegoContador.module.css'

function JuegoContador() {
  const {
    announcement,
    canClick,
    canStart,
    clicks,
    gameState,
    handleStart,
    isNewRecord,
    lastScore,
    record,
    registerClick,
    timeLeftSeconds,
  } = useJuegoContador()

  return (
    <section className={styles.panel} aria-label="JuegoContador">
      <div className={styles.topRow}>
        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>Reto de velocidad</p>
          <h2 className={styles.title}>JuegoContador</h2>
          <p className={styles.subtitle}>
            Tienes cinco segundos para hacer la mayor cantidad de clicks
            posibles.
          </p>
        </div>

        <div className={styles.recordCard}>
          <span className={styles.recordLabel}>Récord</span>
          <span className={styles.recordValue}>{record}</span>
        </div>
      </div>

      <div className={styles.metrics}>
        <div className={styles.metricBox}>
          <span className={styles.metricLabel}>Clicks actuales</span>
          <span className={styles.metricValue}>{clicks}</span>
        </div>

        <div className={styles.metricBox}>
          <span className={styles.metricLabel}>Tiempo restante</span>
          <span className={styles.metricValue}>{timeLeftSeconds}s</span>
        </div>
      </div>

      <div className={styles.statusArea} aria-live="polite">
        {announcement ? (
          <p className={styles.announcement}>{announcement}</p>
        ) : null}

        {!announcement && gameState === 'idle' ? (
          <p className={styles.statusMessage}>
            Presiona <span className={styles.statusStrong}>Iniciar juego</span>{' '}
            para activar la secuencia <span className={styles.statusStrong}>preparados</span>,{' '}
            <span className={styles.statusStrong}>listos</span> y{' '}
            <span className={styles.statusStrong}>ya</span>.
          </p>
        ) : null}

        {!announcement && gameState === 'playing' ? (
          <p className={styles.statusMessage}>
            El contador está corriendo. Haz clicks antes de que el tiempo llegue a cero.
          </p>
        ) : null}

        {!announcement && gameState === 'finished' ? (
          <p className={styles.statusMessage}>
            Última ronda: <span className={styles.statusStrong}>{lastScore}</span> clicks.
            {isNewRecord ? (
              <span className={styles.statusRecord}> Nuevo récord.</span>
            ) : (
              <span>
                {' '}
                El mejor registro sigue siendo{' '}
                <span className={styles.statusStrong}>{record}</span>.
              </span>
            )}
          </p>
        ) : null}
      </div>

      <div className={styles.buttons}>
        <ActionButton onClick={handleStart} disabled={!canStart} tone="start">
          Iniciar juego
        </ActionButton>

        <ActionButton onClick={registerClick} disabled={!canClick} tone="click">
          Contar click
        </ActionButton>
      </div>

      <p className={styles.tips}>
        El récord se guarda en el navegador para que no se pierda al recargar la página.
      </p>
    </section>
  )
}

export default JuegoContador