import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

interface Props{
  inforegion:string
}

interface descriptions{
  name:string
  capital:string
  subregion:string
  currencies:{name:string}
}


const GridRegion = ({inforegion}:Props) => {

 const [dataregion, setdataregion] = useState<descriptions[]>([])

 useEffect(()=>{
 axios.get(`https://restcountries.com/v2/regionalbloc/${inforegion}`)
 .then(res=>
  {setdataregion(res.data)
console.log(res.data);
}).catch(error=>console.log(error))
},[])

  // console.log(dataregion);

  return (
    <>
    <h4>{inforegion}</h4>
    {dataregion.map((par,index)=>
      
       <div className='row'>
      <div className='col'>
    <table className='table-light table hover'>
      <thead>
        <tr key={index}>
       <th>Nombre</th>
       <th>Capital</th>
       <th>Subregion</th>
       <th>Moneda Local</th>   
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{par.name}</td>
          <td>{par.capital}</td>
          <td>{par.subregion}</td>
          <td>{par.currencies.name}</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    )
   
}
    </>
  )
}

export default GridRegion