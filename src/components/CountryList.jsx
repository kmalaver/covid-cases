import React, { Children } from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import '../assets/styles/components/CountryList.scss'

const CountryList = ({ children, setFilter }) => {
  
  const handleChange = event =>{
    setFilter(event.target.value)
  }

  return(
    <div className="country-list">
      <div className="country__search">
        <input type="text" placeholder="buscar pais" onChange={handleChange}/>
      </div>
      <div className="country-list__header">
        <div><p></p></div>  
        <div className="align-left"><p>Pais</p></div> 
        <div><p>Casos</p></div>  
        <div><p>Recuperados</p></div>  
        <div><p>Muertos</p></div>   
      </div> 
      <div className="country-list__items">
        {children}
      </div>
    </div>
)}

const mapDispatchToProps = {
  setFilter
}

export default connect(null,mapDispatchToProps)(CountryList);