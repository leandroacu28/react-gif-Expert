
import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hook/useFetchGifs';

export const GifGrid = ({category}) => {

  const {images,isLoading}=useFetchGifs(category);

  console.log({images, isLoading});
  
  // const [images,setImages]= useState([]);
  // const [isLoading,setIsloading]= useState(true);

  // const getImages=async()=>{
  //   const newImages= await getGifs(category);
  //   setImages(newImages);
  // }
  
  
  // useEffect(()=>{
  //   getImages();
  // },[])
  
  return (
    <> 
    <h3>{category}</h3>
    {
      isLoading && (<h2>Cargando...</h2>)
    }
    <div className="card-grid"> 
      {/* {
        images.map(image=>(
        <li key={image.id}>{image.title}</li>
        ))
      }
       */}

      {
        images.map((image)=>(
        <GifItem 
        key={image.id}
        // title={image.title}
        // url={image.url}  
      
        //existe otra forma que es tomar todas las props de la imagen
        {...image }
        />
        ))
      }
    </div>
    </>
  )
}
 

