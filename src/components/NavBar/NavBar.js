import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.js' 


const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to="/" >
                <h3> Ecommerce</h3>
            </link>
            <div className="Categories">
                <NavLink to="{`/category/Jarros`}" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Jarros</>
                <NavLink to="{`/category/Raku`}" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Rakú</>
                <NavLink to="{`/category/Obras`}" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Obras de arte</>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar