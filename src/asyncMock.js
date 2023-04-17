const products = [
    {
        id: '1',
        name: '',
        price:'',
        category:'',
        img: './img./raku-capas-verde.jpeg',
        stock: 25,
        descrption: 'descripción de obra'
    },
    
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}