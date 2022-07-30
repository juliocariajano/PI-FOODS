import React from 'react'
import {Link} from "react-router-dom"
import OnSearch from './OnSearch'
import "../Styles/Nav.css"
import Filters from './Filters'

export default function Navbar({setCurrentPage, setFilter}) {
  return (
    <div className='nav'>
     
    <div>
      <Filters
    
      setCurrentPage={setCurrentPage}
       setFilter={setFilter}
    />
    </div>
    <Link to='/home'>
        </Link>
        <div>
        <OnSearch
          setCurrentPage={setCurrentPage}
          />
        </div>
    </div>

  )
  
}
