import Campo from './inputs/Campo';
import FormGroup from './FormGroup';

export default function FormHorario () {
  return (
    <>
        <div className="row justify-content-between align-items-center mt-4">
            <FormGroup>
                <Campo tipo='text' placeholder="Ancho"/>
            </FormGroup>
            <FormGroup>
                <Campo tipo='text' placeholder="Alto"/>
            </FormGroup>
        </div>

        <div className="row justify-content-between align-items-center mt-4">
            <FormGroup>
                <Campo tipo='text' placeholder="Largo"/>
            </FormGroup>
            <FormGroup>
                <Campo tipo='text' placeholder="Peso Aprox."/>
            </FormGroup>
        </div>

        <div className="row justify-content-between align-items-center mt-4">
            <FormGroup>
                <h5> Mercancia </h5>
            </FormGroup>
            <FormGroup>
                <Campo tipo='checkbox' label="Delicada"/>
            </FormGroup>
            <FormGroup>
                <Campo tipo='checkbox' label="No Delicada"/>
            </FormGroup>
        </div>
    </>
  )
}