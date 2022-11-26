import Form from 'react-bootstrap/Form'

export default function Campo ({ label, tipo, placeholder, isRastreo = false, setIsValid }) {
  const validarCampo = (event) => {
    const numGuia = event.target.value

    if (numGuia.length > 0 && numGuia.length < 20) {
      setIsValid(true)
    }
  }

  return (
    <>
      {
        isRastreo && (
          <Form.Control onChange={() => validarCampo(event)} className=' espacio d-block mx-auto' type='text' placeholder={placeholder} />
        )
      }

      {
        tipo === 'checkbox' && (
          <Form.Check type='checkbox' label={label} />
        )
      }
      {
        (tipo !== 'checkbox' && tipo !== 'label' && !isRastreo) && (
          <Form.Control className='' type={tipo} placeholder={placeholder} />
        )
      }
    </>

  )
}
