import { Link } from "react-router-dom"
const Item = ({id, name, category, price, img}) => {
    return (
        <article className=" mt-10 grid justify-items-center  text-center">
            <h4>categoria: {category}</h4>
            <h3>nombre: {name}</h3>
            <img src ={img} style ={{width: 200}}/>
            <h4>${price}</h4>
            <Link to ={`/item/${id}`} >ver detalle</Link>


        </article>
    )
}
export default Item