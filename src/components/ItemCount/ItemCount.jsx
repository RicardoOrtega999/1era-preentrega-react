import { useState } from "react"
const ItemCount =({initial =1, stock, onAdd})=> {
    const [count ,setCount] =useState(initial)
    const decrement =() => {
        if(count > 1) {
            setCount(prev => prev -1)
        }
    }
    const increment =() => {
        if(count< stock){
            setCount (prev =>prev + 1)
        }

    }
    return(
        <article>
            <h3 className=" bg-blue-400 rounded-s-lg py-5">{count}</h3>
            <button onClick={decrement}  className=" bg-blue-400 px-4 rounded-s-lg ">-</button>
            <button onClick ={()=> onAdd(count)} className=" bg-blue-400 px-4 rounded-s-lg">Agregar al carrito</button>
            <button onClick ={increment} className=" bg-blue-400 px-4 rounded-s-lg">+</button>
        </article>
    )
}
export default ItemCount