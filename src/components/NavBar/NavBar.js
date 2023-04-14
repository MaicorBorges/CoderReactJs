import React from 'react'
import CartWidget from '../CartWidget/CartWidget.js' 


const NavBar = () => {
    return (
        <nav>
            <h3> Ecommerce</h3>
            <div>
                <button>Jarros</button>
                <button>Rakú</button>
                <button>Obras de arte</button>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar