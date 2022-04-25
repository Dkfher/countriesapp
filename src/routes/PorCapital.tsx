import React, { useState } from 'react'
import MostrarCapital from '../components/MostrarCapital'
import GridCapital from '../components/GridCapital';

const PorCapital = () => {
  const [infocapital, setinfocapital] = useState(['']);


  return (
    <>
    <h4>Por Pais</h4>
    <MostrarCapital setinfocapital={setinfocapital}/>
    <hr />
    

    <ol>
    {
      infocapital.map(infocapital=>(
      
      <GridCapital 
      key={infocapital}
      infocapital={infocapital}/>
      ))
    }
    </ol>
       </>
  )
}

export default PorCapital