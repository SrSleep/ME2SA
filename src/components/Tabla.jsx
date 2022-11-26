import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

export default function Tabla () {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>FECHA</th>
            <th>CIUDAD</th>
            <th>DIRECCION</th>
            <th>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>20/11/2022</td>
            <td>Barranquilla</td>
            <td>Calle 182 # 45 - 147</td>
            <td>guardado</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
