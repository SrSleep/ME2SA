import Form from 'react-bootstrap/Form'

export default function FormGroup({children}) {
  return(
    <Form.Group className="my-2 col-md">
        {children}
    </Form.Group>
  )
}