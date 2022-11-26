import { useState } from "react";
import { Container } from "react-bootstrap";
import Campo from "./inputs/Campo";
import {Button as Boton} from "./Boton"
import Tabla from "./Tabla";

export default function Rastrear () {

    const [isValid, setIsValid] = useState(false)
    const [isActive, setIsActive] = useState(false)

    return (
        <>
        <Container className= " p-5">
            <h3 className= "mb-4 text-center">INGRESA EN ESTE CAMPO EL NUMERO DE RASTREO</h3>

            <Campo setIsValid={setIsValid} tipo="text" placeholder="Ejemplo: 964301058204352760" isRastreo={true}/>

            <Boton isValid={isValid} setIsActive={setIsActive} nombre="RASTREAR" color="primary"/>

        </Container>
       
        {
            (isActive && isValid) && (
                <Tabla/>
            )
        }
        
        </>
    )
}