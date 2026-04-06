import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Challenge Técnico Banham. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
