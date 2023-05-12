import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget.js' 


const NavBar = () => {
    return (
        <nav className="NavBar  bg-slate-100 shadow-lg shadow-orange-400">
            <Link to="/" >
                <h3 className='text-3xl font-bold text-decoration-line: gap-4 none text-orange-400 align-middle py-12'> Catáalogo de productos Micaela Perera</h3>
            </Link>
            <div className="Categories mb-8 pb-6">
                <NavLink to="/category/Taller" className={({isActive}) => isActive ? 'ActiveOption gap-4 text-2xl font-bold text-sky-900 hover:text-sky-200 px-8' : 'Option gap-4 text-2xl font-bold text-sky-500 hover:text-sky-700 px-8' }>Talleres</NavLink>
                <NavLink to="/category/Raku" className={({isActive}) => isActive ? 'ActiveOption gap-4 text-2xl font-bold text-sky-900 hover:text-sky-200 px-8' : 'Option gap-4 text-2xl font-bold text-sky-500 hover:text-sky-700 px-8'}>Rakú</NavLink>
                <NavLink to="/category/Obra" className={({isActive}) => isActive ? 'ActiveOption gap-4 text-2xl font-bold text-sky-900 hover:text-sky-200 px-8' : 'Option gap-4 text-2xl font-bold text-sky-500 hover:text-sky-700 px-8'}>Obras de arte</NavLink>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar