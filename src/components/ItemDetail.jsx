import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container p-5">
      <div className="card">
        <img src={item.imagen} className="card-img-top w-25" alt={item.titulo} />
        <div className="card-body">
          <h5 className="card-title">{item.titulo}</h5>
          <p className="card-text">{item.descripcion}</p>
          <p className="card-text">Categoría: {toCapital(item.categoria)}</p>
          <p className="card-text">Precio: ${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
