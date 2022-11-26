import Campo from './inputs/Campo';
import FormGroup from './FormGroup';

export default function FormHorario () {
  return (
    <div className="row justify-content-between align-items-center mt-4">
      <FormGroup>
        <Campo tipo='date' placeholder="Día de Recogida"/>
      </FormGroup>
      <FormGroup>
        <Campo tipo='time' placeholder="Hora de Recogida"/>
      </FormGroup>
  </div>
  )
}