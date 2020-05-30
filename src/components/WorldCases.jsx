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
            <div className="case-type">
              <i className="fas fa-virus"></i>
              <p className="t-small">CONFIRMADOS</p>
            </div>
            <p className="t-large" >{Global.TotalConfirmed.toLocaleString('en-US')}</p>
            <p className="t-medium" >+{Global.NewConfirmed.toLocaleString('en-US')}</p>
          </div>
          <div className="world-cases__item">
            <div className="case-type">
              <i className="fas fa-check"></i>
              <p className="t-small">RECUPERADOS</p>
            </div>
            <p className="t-large" >{Global.TotalRecovered.toLocaleString('en-US')}</p>
            <p className="t-medium" >+{Global.NewRecovered.toLocaleString('en-US')}</p>
          </div>
          <div className="world-cases__item">
            <div className="case-type">
              <i className="fas fa-skull-crossbones"></i>
              <p className="t-small">MUERTOS</p>
            </div>
            <p className="t-large" >{Global.TotalDeaths.toLocaleString('en-US')}</p>
            <p className="t-medium" >+{Global.NewDeaths.toLocaleString('en-US')}</p>
          </div>
      </div>
    </div>
  )
}

export default WorldCases