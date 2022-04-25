import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

interface Props{
  infopais:string
}

interface descriptions{
  population :number
  name:{common:string}
  flag: string
  area:number
}


const GridPais = ({infopais}:Props) => {

 const [datapais, setdatapais] = useState<descriptions[]>([])

 useEffect(()=>{
 axios.get(`https://restcountries.com/v3.1/name/${infopais}`)
 .then(res=>
  {setdatapais(res.data)
console.log(res.data);
}).catch(error=>console.log(error))
},[])

  // console.log(datapais);

  return (
    <>
    <h4>{infopais}</h4>
    {datapais.map((par,index)=>
      
       <div className='row'>
      <div className='col'>
    <table className='table-light table hover'>
      <thead>
        <tr key={index}>
       <th>Bandera</th>
       <th>Nombre</th>
       <th>Poblacion</th>
       <th>Area</th>   
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{par.flag}</td>
          <td>{par.name.common}</td>
          <td>{par.population}</td>
          <td>{par.area}</td>
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

export default GridPais