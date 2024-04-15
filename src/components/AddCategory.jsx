import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('');
    /* Se crea un useState para actualizar el valor que se muestra en el input( caja de texto ) */

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    /* Se crea la funcion onInputChange para capturar el evento ,el valor de lo que se escribira , es decir el event.target.value que es lo que se ingresa por teclado, y posterior a eso se envia a la caja de texto por el setInputvalue y ahora el valor de value es lo escrito por teclado y aparece escrito en el input */

    const onSubmit = (event) => {
        event.preventDefault(); /* Evita que el fomrulario se vuelva a recargar perdiendo los datos eingresados */
        /* console.log(inputValue); */ /* muestra en consola el valor que tiene la caja input  */
        if(inputValue.trim().length <= 1 )  return;
        /* setCategories( categories => [inputValue, ...categories]) */
        onNewValue(inputValue.trim());
        setInputValue('')
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={onInputChange}/>
        </form>
    )
}
