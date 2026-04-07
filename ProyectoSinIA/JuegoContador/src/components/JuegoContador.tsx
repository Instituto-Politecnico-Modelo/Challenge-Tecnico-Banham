import { useJuegoContador } from '../hooks/useJuegoContador';

function JuegoContador() {
  const {
    gameState,
    countdownMessage,
    clicks,
    record,
    timeLeft,
    isStartDisabled,
    isClickDisabled,
    isNewRecord,
    handleStart,
    handleClickButton,
  } = useJuegoContador();

  return (
    <div className="game-container">
      <h1 className="title">Juego Contador</h1>

      <div className="record-panel">
        <span>Récord Actual: </span>
        <strong>{record}</strong>
      </div>

      <div className="status-panel">
        {gameState === 'idle' && (
          <p className="status-idle">Presioná Iniciar para comenzar</p>
        )}
        
        {gameState === 'countdown' && (
          <p className="status-countdown">{countdownMessage}</p>
        )}
        
        {gameState === 'playing' && (
          <div className="status-playing">
            <p>Tiempo restante: <strong>{timeLeft}s</strong></p>
            <p>Clicks: <strong>{clicks}</strong></p>
          </div>
        )}
        
        {gameState === 'finished' && (
          <div className="status-finished">
            <p>¡Tiempo terminado!</p>
            <p>
              {isNewRecord 
                ? '¡Nuevo récord!' 
                : `Hiciste ${clicks} clicks. Récord: ${record}`}
            </p>
          </div>
        )}
      </div>

      <div className="button-group">
        <button
          className="btn btn-start"
          onClick={handleStart}
          disabled={isStartDisabled}
        >
          {gameState === 'finished' ? 'Volver a Jugar' : 'Iniciar Juego'}
        </button>
        
        <button
          className="btn btn-click"
          onClick={handleClickButton}
          disabled={isClickDisabled}
        >
          ¡Clickear!
        </button>
      </div>
    </div>
  );
}

export default JuegoContador;
