import React, { useState,useEffect } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda,setBusqueda] = useState('');
    const [noEncontrado,setNoEncontrado] = useState(false);

    // const buscarPeli = (e) =>{
    //     //Crear y actualizar estado
    //     setBusqueda(e.target.value);
    //     //Filtrar para buscar coincidencias
    //     let pelis_encontradas = listadoState.filter(peli=>{
    //         return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    //     })
    //     if(busqueda.length <=1 || pelis_encontradas<=0){
    //         pelis_encontradas=JSON.parse(localStorage.getItem("pelis"))
    //         setNoEncontrado(true);
    //     }else{
    //         setNoEncontrado(false)
    //     }
        
    //     //Actualizar estado de listado principal con el filtro
    //     setListadoState(pelis_encontradas)
    // }
    useEffect(() => {
        let pelis_encontradas = listadoState.filter((peli) =>
          peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
        );
    
        if (busqueda.length <= 1 || pelis_encontradas.length === 0) {
          pelis_encontradas = JSON.parse(localStorage.getItem('pelis'));
          setNoEncontrado(true);
        } else {
          setNoEncontrado(false);
        }
    
        // Actualizar estado de listado principal con el filtro
        setListadoState(pelis_encontradas);
      }, [busqueda, listadoState, setListadoState]);
    
      const buscarPeli = (e) => {
        // Actualizar estado de búsqueda
        setBusqueda(e.target.value);
      };

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado==true&&busqueda.length>1)&&
                <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            }
            <form>
                <input
                    type="text"
                    id='search_field'
                    name='busqueda'
                    autoComplete='off'
                    onChange={buscarPeli}
                />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
