import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(()=>{
    const asyncFunction = categoryId ? getProductsByCategory : getProducts



    asyncFunction(categoryId)
    .then(result =>{
      setProducts(result)
    })
  }, [categoryId])

    return (
      <div>
        <h1 className=" text-center bg-emerald-300">{greeting}</h1>
        <ItemList products={products}/>
        </div>
      
    )
  }
