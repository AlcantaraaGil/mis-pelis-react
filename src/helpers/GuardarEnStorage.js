export const GuardarEnStorage = (clave,elemento) =>{
    //conseguir elementos de local storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    //comprobar si es array
    if(Array.isArray(elementos)){
        //Añadir dentro del attay un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la nueva peli
        elementos = [elemento];
    }
    //Guardar en el local storage
    localStorage.setItem(clave,JSON.stringify(elementos));
    //Devolver objeto 
    return elemento;
}
