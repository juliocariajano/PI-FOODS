import React from 'react'
import {Link} from "react-router-dom"
import OnSearch from './OnSearch'
import "../Styles/Nav.css"

export default function Navbar({setCurrentPage}) {
  return (
    <header>

    <div className='nav'>
    <Link to='/home'>
        </Link>
        
          <OnSearch
          setCurrentPage={setCurrentPage}
          />

        </div>
        </header>

  )
  
}
