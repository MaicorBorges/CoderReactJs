import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import {getProductById} from "../../asyncMock.js"
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)

        useEffect (() => {
            getProductById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [])

        return(
            <div className="ItemDetailContainer">
                <Itemdetail {...product}/>
            </div>
        )
}

export default ItemDetailContainer