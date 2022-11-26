import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function LoginForm ({ setIsLogin }) {
  const [dataEmail, setDataEmail] = useState('')
  const [dataPassword, setDataPassword] = useState('')

  const validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

  const handleClick = (e) => {
    e.preventDefault()

    // validando email
    if (validEmail.test(dataEmail)) {
      console.log(`El correo es: ${dataEmail}`)
      setIsLogin(true)
    } else {
      setIsLogin(false)
      window.alert('Email Inválido. Por favor intenta nuevamente')
    }

    // validar password
    if (dataPassword.length >= 4) {
      console.log(`La contraseña es: ${dataPassword}`)
      setIsLogin(true)
    } else {
      setIsLogin(false)
      window.alert('Contraseña no valida. Intenta nuevamente')
    }
  }

  return (
    <Container className='login-content'>

      <h2 className='logo text-center mb-5'>ME2SA</h2>

      <Form>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Inserte su email' onChange={(e) => setDataEmail(e.target.value)} />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type='password' placeholder='Password' onChange={e => setDataPassword(e.target.value)} />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={handleClick}>
          Submit
        </Button>

      </Form>

    </Container>
  )
}
