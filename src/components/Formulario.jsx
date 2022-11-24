import Container from 'react-bootstrap/Container'
import FormHorario from './FormHorario'
import FormRemitente from './FormRemitente'
import FormDimMer from './FormDimMer'

function Formulario ({ titulo, seccion }) {
  return (
    <Container className='p-5'>
      <h2 className='mb-2'>{titulo}</h2>

      {
        seccion === 'horario' && (
          <FormHorario />
        )
      }

      {
        seccion === 'remitente' && (
          <FormRemitente />
        )
      }

      {
        seccion === 'dimensiones' && (
          <FormDimMer />
        )
      }

    </Container>
  )
}

export default Formulario
