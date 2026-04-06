import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>Challenge Banham</span>
      </div>
    </header>
  )
}

export default Header
