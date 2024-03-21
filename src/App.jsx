
import { ItemListContainer } from "./components/itemListContainer/itemListContainer"
import {Navbar} from "./components/Navbar/Navbar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<ItemListContainer greeting={'texto generico salu2'} />} />
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
      <Route path="/Item/:itemId" element ={<ItemDetailContainer />} />
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
