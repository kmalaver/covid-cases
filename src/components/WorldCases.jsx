import React from 'react'
import '../assets/styles/components/WorldCases.scss'


const WorldCases = ({Global}) =>{

  return(
    <div className="world-cases">
      <div className="world-cases__title">
        <i className="fas fa-globe-americas"></i>
        <h1>Casos en el Mundo</h1>
      </div>
      <div className="world-cases__items">
          <div className="world-cases__item">
            <p className="t-small">Confirmados</p>
            <p className="t-large" >{Global.TotalConfirmed}</p>
          </div>
          <div className="world-cases__item">
            <p className="t-small">Recuperados</p>
            <p className="t-large" >{Global.TotalRecovered}</p>
          </div>
          <div className="world-cases__item">
            <p className="t-small">Muertes</p>
            <p className="t-large" >{Global.TotalDeaths}</p>
          </div>
      </div>
    </div>
  )
}

export default WorldCases