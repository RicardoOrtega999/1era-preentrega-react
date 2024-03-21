const products = [
    { 
        id: '1', 
        name: 'polera pokemon', 
        price: 10000, 
        category: 'polera', 
        img:'https://down-cl.img.susercontent.com/file/59e08dfbe64ba3441a17ba2a840f9d2d_tn', 
        stock: 25, 
        description:'polera de charizard'
    },
    { id: '2', name: 'taza de dwight', price: 12000, category: 'taza', img:'https://m.media-amazon.com/images/I/41k5O++FAVL.jpg'},
    { id: '3', name: 'polera zelda', price: 12000, category: 'polera', img:'https://falabella.scene7.com/is/image/Falabella/gsc_120071050_2577253_1?wid=800&hei=800&qlt=70'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}