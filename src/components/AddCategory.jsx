import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
const [inputValue,setInputValue]=useState('Valor inicial');


// const onInputchange=(event)=>{
//   console.log(event.target.value)
//   setInputValue( event.target.value);
// }
// arriba  es lo mismo que se encuentra abajo.

const onInputchange=({target})=>{   //desesctructuraron el evento y extraen el target, para no usar el evento.target.value
    setInputValue( target.value);
}

const onSubmit=(event)=>{
     console.log(event);
     //no queremos hacer un refress del navegador
     event.preventDefault();
     if (inputValue.trim().length<=1) return console.warn('Usted no ingreso ningun caracter o solo ingreso un caracter');
     console.log(inputValue);
    
     //recibimos el setcategory del GifExpertApp y lo debemos desesctructurar
     //setCategories((categories)=>[inputValue, ...categories]);
      onNewCategory(inputValue.trim());
     // limpiamos el inputvalue
     setInputValue('');

}
  return (
    <form onSubmit= {onSubmit}>  {/* ANTES </form><form onSubmit= {(event) => onSubmit(event) }>  */}
        <input 
    type="text" 
    placeholder="Buscar Gifs "  
    value={inputValue} 
    onChange={onInputchange}
    //es lo mismo que hacer esto, recibo un evento y ese evento es el que mando a la funcion
    //onChange={(event)=> onInputchange(event)}
    
    />
    </form>
    
  )
}
