import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.js' 


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" >
                <h3> Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to="/category/Jarro" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jarros</NavLink>
                <NavLink to="/category/Raku" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Rakú</NavLink>
                <NavLink to="/category/Obra" className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Obras de arte</NavLink>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar