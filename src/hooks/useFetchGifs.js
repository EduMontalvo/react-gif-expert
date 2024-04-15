import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    //Este es un custom hook el cual se crea debido a que el codigo se podra reutilizar en varios componentes.

    const [images, setImages] = useState([]); // Se coloca inicialmente un array por que lo que almacenara es un array de objetos que se almacenara desde getImagen a images , no obstante se crea un estado para que pueda almacenar.
    const [isLoading, setIsLoading] = useState(true)
    
    const getImages = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect
    (() => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }

}
