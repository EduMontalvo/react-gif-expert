import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import '../styles.css'

export const GifGrid = ({ category }) => {

    const {images , isLoading} = useFetchGifs(category) 

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && ( <h2 className = 'loading-text'> Cargando . . .  </h2> )
                //esto se entiende como si se cumple que isLoading es true se renderizara el h2, es una condicional.
            }

            <div className="card-grid">
                {images.map(( imagen ) => (
                    <GifItem key={imagen.id} { ... imagen} /> //cuando se tenga muchas propiedades y se quiera pasar a otro componente como props es mejor usar '{ ... imagen}' para que mande el objeto con todas sus items o propiedades , de esta forma en el componente GifItem solo se desestructura lo que vamos a usar y aplicar directamente.
                ))}
            </div>
        </>
    )
}
