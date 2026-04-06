import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import JuegoContador from './components/JuegoContador/JuegoContador'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <JuegoContador />
      </main>
      <Footer />
    </div>
  )
}

export default App