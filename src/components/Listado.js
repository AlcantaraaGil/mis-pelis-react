import React, { useEffect, useState } from 'react'

export const Listado = ({listadoState,setListadoState}) => {

    //const [listadoState,setListadoState] = useState([]);

    useEffect(()=>{
        console.log("componente de listado de peliculas cargado!");
        conseguirPeliculas();
    },[])

    const conseguirPeliculas = ()=>{
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoState(peliculas);
        return peliculas;
    }

    const borrarPeli = (id) =>{
        //conseguir peliculas almacenadas
        let pelis_almacenadas=conseguirPeliculas();
        //filtrar por id
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli=>peli.id!==parseInt(id));
        //Actualizar datos del listado
        setListadoState(nuevo_array_peliculas);
        //actualizar los datos en el LS
        localStorage.setItem('pelis',JSON.stringify(nuevo_array_peliculas))
    }


    return (
        <>
        {listadoState!=null ?
        listadoState.map(peli =>{
            return(
                <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit">Editar</button>
                <button className="delete" onClick={()=>borrarPeli(peli.id)}>Borrar</button>
                </article>
            );
        }) :
        <h2>No hay peliculas para mostrar</h2>
    }
        </>
    )
}
