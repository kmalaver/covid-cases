import React from 'react'
import { connect } from 'react-redux'
import WorldCases from '../components/WorldCases'

const Home = props =>{

  return(
    <div className="home">
      <WorldCases></WorldCases>
    </div>
  )
}

export default connect(null,null)(Home)