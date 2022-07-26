import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import axios from 'axios'

const CityDetails = (props) => {
  
  const [city, setCity] = useState('')
  const [formState, setFormState]=useState('')

  let { id }= useParams()

  useEffect(() => {
    
    const selectedCity = async()=>{
      try {
        let res = await axios.get(`http://localhost:3001/cities/${id}`)
        console.log(res.data)
        setCity(res.data)
      } catch(eer){
        console.log(eer)
      }
    }
    setCity(selectedCity)
  },[])

const updateCity = async()=>{
  console.log(id)
  let res = await axios.post(`http://localhost:3001/cities/${id}`)

}



  const deleteCity = async ()=>{
    console.log(id)
    let res = await axios.delete(`http://localhost:3001/cities/${id}`,
    
    )
    Navigate('/cities')
  }
  

  return city ? (
    <div className="detail">
      <div className="detail-header">
      
        <img src={city.image} alt={city.image} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{city.name}</h1>
        </div> 
        
      
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Population: {city.population}</h3>
          <h3>Visits per year: {city.visits}</h3>
        </div>
        <p>{city.description}</p>
          
      </div>
      <div>


        <h3></h3>
      <Link to='/updatecity'>Edit City</Link>

          <button onClick={deleteCity}>Delete City</button>
          
        <Link to="/cities">Back</Link>
        </div>
        
      
    </div>
    
  ) : null;
}




export default CityDetails