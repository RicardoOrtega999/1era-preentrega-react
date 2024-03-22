
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer"
import { Navbar } from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<ItemListContainer greeting={'productos'} />} />
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
      <Route path="/Item/:itemId" element ={<ItemDetailContainer />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
