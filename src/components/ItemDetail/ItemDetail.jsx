import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({name, category, price, img, description, stock}) => {
    return (
        <article className=" mt-10 grid justify-items-center  text-center">
             <img src ={img} style ={{width: 150}}/>
            
            <h3>nombre: {name}</h3>
            <h4>categoria: {category}</h4>
            <h4>${price}</h4>
            <h4> descripcion: {description} </h4>
            <ItemCount stock={stock}/>
            


        </article>
    )
}
export default ItemDetail