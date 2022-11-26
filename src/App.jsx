import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Formulario from './components/Formulario'
import Rastrear from './components/Rastrear'
import Footer from './components/Footer'
import './App.css'
import LoginForm from './components/LoginForm'

function App () {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='App'>

      {
        isLogin
          ? (
            <>
              <Header />
              <Hero />
              <Quote titulo='Datos de Envío' />
              <Formulario titulo='Franja Horaria' seccion='horario' />
              <Formulario titulo='Datos de Remitente' seccion='remitente' />
              <Formulario titulo='Dimensiones y Tipo de Mercancía' seccion='dimensiones' />
              <Formulario titulo='Datos de Destinatario' seccion='remitente' />
              <Quote titulo='Rastrea tu paquete en linea' />
              <Rastrear />
              <Footer />
            </>
            )
          : (
            <LoginForm setIsLogin={setIsLogin} />
            )
      }

    </div>
  )
}

export default App
