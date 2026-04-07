import JuegoContador from '../components/JuegoContador/JuegoContador'
import AppFooter from '../components/layout/AppFooter'
import AppHeader from '../components/layout/AppHeader'
import styles from './JuegoContadorPage.module.css'

function JuegoContadorPage() {
  return (
    <div className={styles.page}>
      <AppHeader />

      <main className={styles.main}>
        <aside className={styles.aside}>
          <section className={styles.ruleCard}>
            <h3>Cómo funciona</h3>
            <p>
              Pulsa iniciar, espera la secuencia preparados, listos y ya, y luego
              haz tantos clicks como puedas durante 5 segundos.
            </p>
          </section>

          <section className={styles.ruleCard}>
            <h3>Objetivo</h3>
            <p>
              Superar tu mejor marca personal. Si la última ronda tiene más clicks
              que el récord guardado, el nuevo valor reemplaza al anterior.
            </p>
          </section>
        </aside>

        <JuegoContador />
      </main>

      <AppFooter />
    </div>
  )
}

export default JuegoContadorPage