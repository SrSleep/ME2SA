import Header from './components/Header'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Formulario from './components/Formulario'
import './App.css'


function App () {
  return (
    <div className='App'>
     <Header/>
     <Hero/>
     <Quote titulo="Datos de Envío"/>
     <Formulario titulo="Franja Horaria" seccion="horario"/>
     <Formulario titulo="Datos de Remitente" seccion="remitente"/>
     <Formulario titulo="Dimensiones y Tipo de Mercancía" seccion="dimensiones"/>
     <Formulario titulo="Datos de Destinatario" seccion="remitente"/>
     <Quote titulo="Rastrea tu paquete en linea"/>
    </div>
  )
}

export default App
