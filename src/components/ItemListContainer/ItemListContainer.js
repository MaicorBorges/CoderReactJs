import { useState, useEffect } from "react"
import { getProducts } from "asynMock"
import ItemList from "../ItemList./ItemList.js"

const ItemListContainer = ({ gretting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
    setProducts(response)
})
            .catch (error => {
    console.log(error)
})
    }, []);

return (
    <div>
        <h1>{gretting}</h1>
        <ItemList products={products} />
    </div>
);
};

export default ItemListContainer;
