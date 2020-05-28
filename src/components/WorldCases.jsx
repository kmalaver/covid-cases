import React from 'react'
import '../assets/styles/components/WorldCases.scss'

const WorldCases = props =>{


  return(
    <div className="world-cases">
      <div className="world-cases__title">
        <i class="fas fa-globe-americas"></i>
        <h1>Casos en el Mundo</h1>
      </div>
      <div>
          <div className="world-cases__item">
            <p className="small">Confirmados</p>
            <p>5.96M</p>
          </div>
          <div className="world-cases__item">
            <p className="small">Recuperados</p>
            <p>5.96M</p>
          </div>
          <div className="world-cases__item">
            <p className="small">Muertes</p>
            <p>5.96M</p>
          </div>
      </div>
    </div>
  )
}

export default WorldCases