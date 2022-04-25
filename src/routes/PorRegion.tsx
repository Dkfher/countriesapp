import React, { useState } from 'react'
import GridRegion from '../components/GridRegion';
import MostrarRegion from "../components/MostrarRegion";



const PorRegion = () => {


  const [inforegion, setinforegion] = useState(['']);


  return (
    <>
    <h4>Por Region</h4>
    <MostrarRegion setinforegion={setinforegion}/>
    <hr />
    <div>
    <p>Indices para buscar por bloque regional </p>
   <ul>
     <li>EU (European Union)</li>
     <li>EFTA (European Free Trade Association)</li>
     <li>CARICOM (Caribbean Community)</li>
     <li>PA (Pacific Alliance)</li>
     <li>AU (African Union)</li>
     <li>USAN (Union of South American Nations)</li>
     <li>EEU (Eurasian Economic Union)</li>
     <li>AL (Arab League)</li>
     <li>ASEAN (Association of Southeast Asian Nations)</li>
     <li>CAIS (Central American Integration System)</li>
     <li>CEFTA (Central European Free Trade Agreement)</li>
     <li>NAFTA (North American Free Trade Agreement)</li>
     <li>SAARC (South Asian Association for Regional Cooperation)</li>
   </ul>
    </div>
    <ol>
    {
      inforegion.map(inforegion=>(
      
      <GridRegion 
      key={inforegion}
      inforegion={inforegion}/>
      ))
    }
    </ol>
       </>
  )
}

export default PorRegion