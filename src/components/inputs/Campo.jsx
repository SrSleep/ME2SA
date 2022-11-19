import Form from 'react-bootstrap/Form'

export default function Campo ({label, tipo, placeholder}) {
  
return(
  <>
  

      {
        tipo === "checkbox" && (
          <Form.Check type="checkbox" label={label}/>
        )     
      }
      {
        (tipo !== "checkbox" && tipo!== "label") && (
          <Form.Control className="" type={tipo} placeholder={placeholder}/>
        )     
      }

  </>
   
)
 
}