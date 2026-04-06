import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>JuegoContador</span>
      </div>
    </header>
  )
}

export default Header