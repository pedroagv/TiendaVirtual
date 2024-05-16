import Item from "./Item";
import { toCapital } from "../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container p-5">
        <h2 className="text-center text-titulo-rosa mb-3 p-1 bg-rosa-second ">{toCapital(titulo)}</h2>
        <div className="row">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList