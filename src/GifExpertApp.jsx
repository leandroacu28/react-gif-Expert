//importacion de hook de react
import { useState } from 'react';
//import {AddCategory} from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

  const [ categories, setCategories ]=useState(['ovni']);
  console.log(categories);

  const onAddCategory=(newCategory)=>{
    console.log(newCategory);
    if (categories.includes(newCategory)){
     console.warn('Esta categoria ya existe en su base de datos');
      return;
    }
    setCategories([newCategory, ...categories]) //forma de insertar valores en arreglo1
    //setcategories(cat=>[...categories,'Valorant']) //forma de insertar valores en arreglo1 usando callback
  }


  return( 
    <>
    {/* TITULO */}
    <h1>GifExpertApp</h1>

    {/* INPUT */}{/* invoca al segundo componente addcategory.jsx */}
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={(event)=>onAddCategory(event) }
    />
    
    {/* LISTADO DE GIF */}
        {/* <button onClick={onAddCategory}>AGREGAR</button> */}

        
          {/* //usando map, va iterando por todos los elemenos del categories */}
          {categories.map(category =>
                 (
                  <GifGrid 
                  key={category}
                  category={category}/>
                )) 
          }
         

        {/* <ol> */}
          {/* //usando map, va iterando por todos los elemenos del categories */}
          {/* {categories.map(category => { */}
                {/* // cuando hacemos contruccion dinamica basa en map, necesitamos proporcionar un key
                //el key es obligatorio y el valor de la llave tiene que ser unico(lo que sea)
                return (
                // <li key={categories}> {categories} </li>
                  <div key={category}>
                     <h3>{category}</h3> 
                    <li> {category} </li>         
                  
                  </div>
                ) */}
            {/* })
          }
        </ol> */}

        {/* GIF-ITEMS */}


    
    </>
    )

}

export default GifExpertApp