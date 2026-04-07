import styles from './AppHeader.module.css'

function AppHeader() {
  return (
    <header className={styles.header}>
      <span className={styles.badge}>React + TypeScript</span>
      <h1 className={styles.headline}>JuegoContador</h1>
      <p className={styles.description}>
        Una web app simple para medir cuántos clicks puedes hacer en una ventana
        exacta de cinco segundos, con récord persistente y arranque por cuenta regresiva.
      </p>
    </header>
  )
}

export default AppHeader