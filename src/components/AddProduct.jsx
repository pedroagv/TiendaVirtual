import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


function AddProduct() {

    const { register, handleSubmit } = useForm();

    const crearproducto  = (producto) => {
        
        const productosRef = collection(db, "productos");

        addDoc(productosRef, producto)
            .then((doc) => {
                alert(doc.id);
            })
    }

    return (
        <div className="container">
            <h1 className="main-title">Creacion Productos</h1>
            <form className="formulario" onSubmit={handleSubmit(crearproducto)}>
                <input type="text" placeholder="Ingresá el titulo del producto" {...register("titulo")} />
                <input type="text" placeholder="Ingresá la descripción del producto" {...register("descripcion")} />
                <input type="text" placeholder="Ingresá la categoria del producto" {...register("categoria")} />
                <input type="number" placeholder="Ingresá el precio de tu producto" {...register("precio")} />
                <input type="number" placeholder="Ingresá el stock de tu producto" {...register("stock")} />                
                <input type="text" placeholder="Ingresá la imagen de tu producto" {...register("imagen")} />                
                <button className="enviar" type="submit">Enviar</button>

            </form>
        </div>
    )
}

export default AddProduct