import Campo from './inputs/Campo';
import FormGroup from './FormGroup';
import  {Button as Boton} from './Boton';

export default function FormRemitente () {
  return (
    <>
        <div className="row justify-content-between align-items-center">
            <FormGroup >
                <Campo tipo='text' placeholder="Nombre Completo "/>
            </FormGroup>
            <FormGroup >
                <Campo tipo='text' placeholder="Cédula"/>
            </FormGroup>
         </div>

         <div className="row justify-content-between align-items-center">
            <FormGroup >
                <Campo tipo='tel' placeholder="Celular"/>
            </FormGroup>
            <FormGroup >
                <Campo tipo='text' placeholder="Lugar de Recogida"/>
            </FormGroup>
            <FormGroup >
                <Campo tipo='text' placeholder="Ciudad"/>
            </FormGroup>
         </div>
         <div className='d-flex mt-2 justify-content-between align-items-center'>
           <Boton nombre="BORRAR"/>
           <Boton nombre="GUARDAR"/>
           <Boton nombre="ACTUALIZAR"/>
         </div>
    </>
  )
}