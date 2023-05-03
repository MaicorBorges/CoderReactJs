import { useState, useEffect, useParams } from "react"
import { getProducts } from "../../asyncMock.js"
import ItemList from "../ItemList/ItemList.js"
import { getProductById } from "../../asyncMock.js";

const ItemListContainer = ({ gretting }) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

useEffect(()=> {
    const asyncFunc = categoryId ? getProductById : getProducts
    asyncFunc(categoryId)
    .then (response => 
        setProducts(response))
        .catch (error => {
            console.log(error)
        }) 
},[categoryId])

return (
    <div>
        <h1>{gretting}</h1>
        <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
