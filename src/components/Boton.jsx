export function Button ({nombre, color = "warning", setIsActive, isValid}) {

    const validarClick = () => {
        isValid ? setIsActive(true) : setIsActive(false)
    }

    return (
        <button onClick={() => validarClick()} className={ `bg-${color} text-white ${color === "primary" ? "mt-4 mx-auto d-block" : ""} fw-normal border-0 py-1 px-4 rounded`} >{nombre}</button>

    )
}