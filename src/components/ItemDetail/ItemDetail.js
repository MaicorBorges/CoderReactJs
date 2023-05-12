import "./ItemDetail.css"
import { useContext, useState } from 'react'
import ItemCount from "../ItemCount/itemCount.js"
import { Link } from 'react-router-dom'

import { CartContext } from "../../context/CartContext.js"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem (item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader font-bold text-lg text-gray-700">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg ml-60" /> 
            </picture>
            <section>
                <p className="Info font-bold hover:text-sky-200">
                    Categoria: {category}
                </p>
                <p className="Info font-bold hover:text-sky-200">
                    Descripción: {description}
                </p>
                <p className="Info font-bold hover:text-sky-200">
                    Precio: {price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option" > Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail