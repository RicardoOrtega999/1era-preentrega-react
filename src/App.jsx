
import {ItemListContainer} from "./components/itemListContainer/ItemListContainer"
import {Navbar} from "./components/Navbar/Navbar"
import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'texto generico salu2'} />
    <ItemCount stock ={10}/>
    </>
  )
}

export default App
