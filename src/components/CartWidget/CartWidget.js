
import React from 'react'
import cart from './assets/icon_shopping_cart.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)


    return (
        <Link to='/cart' className='CartWidget' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img classname="Cartimg" src={cart} alt="cart-widget" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget