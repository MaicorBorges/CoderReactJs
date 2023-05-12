import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({ id, name, img, price, stock}) => {

    return (
        <article className="CardItem ml-4 mr-4  border-solid border-black shadow-lg shadow-orange-400">
                <header className="Header  bg-slate-100 rounded-md">
                    <h2 className="ItemHeader  text-lg font-semibold text-orange-400">
                        {name}
                    </h2>  
                </header>
            <picture className="" >
                <img src={img} alt={name} className="ItemImg max-h-48"/>
            </picture>
            <section>
                <p className="Info pt-4 text-orange-600">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="Option font-bold hover:text-sky-200">Ver detalle</Link> 
            </footer>
        </article>
    )
    
}
export default Item