import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'

const Header = () =>(
  <div className="header">
    <Link to='/'>
      <h1>COVID 19 - CASES</h1>
    </Link>
  </div>
)

export default Header