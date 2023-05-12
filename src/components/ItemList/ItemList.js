
import Item from "../Item/Item.js"

const ItemList = ({products}) => {
    return (
        <div className="grid grid-cols-4 gap-4 gap-y-6">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default  ItemList
