import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Props{
  infocapital:string
}

interface descriptions{
  name:string
  region: string
  subregion:string
}


const GridCapital = ({infocapital}:Props) => {

 const [datacapital, setdatacapital] = useState<descriptions[]>([])

 useEffect(()=>{
 axios.get(`https://restcountries.com/v2/capital/${infocapital}`)
 .then(res=>
  {setdatacapital(res.data)
console.log(res.data);
}).catch(error=>console.log(error))
},[])

  // console.log(datacapital);

  return (
    <>
    <h4>{infocapital}</h4>
    {datacapital.map((par,index)=>
      
       <div className='row'>
      <div className='col'>
    <table className='table-light table hover'>
      <thead>
        <tr key={index}>
       <th>Nombre</th>
       <th>Region</th>
       <th>Subregion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{par.name}</td>
          <td>{par.region}</td>
          <td>{par.subregion}</td>
        
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

export default GridCapital