import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo:'',
        descripcion:''
    })

    const {titulo,descripcion} = peliState;



    const  conseguirDatosForm = e =>{
        e.preventDefault();

        //conseguir datos del form
        let target= e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;


        //crear objeto de pelicula a guardar
        let peli = {
            id:new Date().getTime(),
            titulo,
            descripcion
        }
        
        //Guardar estado
        setPeliState(peli)

        //Actualizar listado del estado principal
        setListadoState(elementos=>{
             return [...elementos,peli];
        });
        
        //Guardar en almacenamiento local
        GuardarEnStorage("pelis",peli);

    }


    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
            {(titulo&&descripcion)&& "Has creado la pelicula: "+titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input 
                    type="text" 
                    id="titulo"
                    name='titulo'
                    placeholder="Titulo" 
                />

                <textarea 
                    id="description"
                    name='descripcion'
                    placeholder="Descripcion">  
                </textarea>

                <input 
                    type="submit" 
                    id="save"
                    value="Guardar" 
                />
            </form>
        </div>
    )
}
