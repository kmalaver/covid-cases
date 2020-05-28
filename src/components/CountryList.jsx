import React, { Children } from 'react'
import '../assets/styles/components/CountryList.scss'

const CountryList = ({ children }) => (
  <div className="country-list">
    <div className="country__search">
      <input type="text" placeholder="buscar pais"/>
    </div>
    {children}
  </div>
)

export default CountryList;