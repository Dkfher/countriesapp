import React, { useState } from 'react'
import GridPais from '../components/GridPais';
import MostrarPais from '../components/MostrarPais';



const PorPais = () => {

  const [infopais, setinfopais] = useState(['']);


  return (
    <>
    <h4>Por Pais</h4>
    <MostrarPais setinfopais={setinfopais}/>
    <hr />
    

    <ol>
    {
      infopais.map(infopais=>(
      // <li key={infopais}>{infopais}</li>
      <GridPais 
      key={infopais}
      infopais={infopais}/>
      ))
    }
    </ol>
       </>
  )
}

export default PorPais