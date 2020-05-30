import React from 'react'
import '../assets/styles/components/CountryItem.scss'
import { Link } from 'react-router-dom'

const CountryItem = ({country}) => {

  const direction = `/country/${country.CountryCode}`

  return(
    <Link to={direction}>
      <div className="country-item">
        <div className="country-item__text align-center">
          <img src={`https://www.countryflags.io/${country.CountryCode.toLowerCase()}/flat/32.png`}></img>
        </div>
        <div className="country-item__text align-left">
          <p>{country.Country.toLocaleString('en-US')}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalConfirmed.toLocaleString('en-US')}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalRecovered.toLocaleString('en-US')}</p>
        </div>
        <div className="country-item__text">
          <p>{country.TotalDeaths.toLocaleString('en-US')}</p>
        </div>
      </div>
    </Link>
   
  )
}

export default CountryItem