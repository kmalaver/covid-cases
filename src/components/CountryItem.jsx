import React from 'react'
import '../assets/styles/components/CountryItem.scss'
import { Link } from 'react-router-dom'

const CountryItem = ({country}) => {

  const direction = `/country/${country.Slug}`

  return(
    <Link to={direction}>
      <div className="country-item">
        <div className="country-item__text">
          <img src={`https://www.countryflags.io/${country.CountryCode.toLowerCase()}/flat/32.png`}></img>
        </div>
        <div className="country-item__text">
          <p>{country.Country}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalConfirmed}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalRecovered}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalDeaths}</p>
        </div>
      </div>
    </Link>
   
  )
}

export default CountryItem