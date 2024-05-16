import React from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Form, Button } from "react-bootstrap";

function AddProduct() {
  const { register, handleSubmit } = useForm();

  const crearproducto = (producto) => {
    const productosRef = collection(db, "productos");

    addDoc(productosRef, producto).then((doc) => {
      alert(doc.id);
    });
  };

  return (
    <Container className="p-5">
      <h1>Creacion Productos</h1>
      <Form className="formulario" onSubmit={handleSubmit(crearproducto)}>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Control
            type="text"
            placeholder="Ingresá el titulo del producto"
            {...register("titulo")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Control
            type="text"
            placeholder="Ingresá la descripción del producto"
            {...register("descripcion")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="categoria">
          <Form.Control
            type="text"
            placeholder="Ingresá la categoria del producto"
            {...register("categoria")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="precio">
          <Form.Control
            type="number"
            placeholder="Ingresá el precio de tu producto"
            {...register("precio")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="stock">
          <Form.Control
            type="number"
            placeholder="Ingresá el stock de tu producto"
            {...register("stock")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagen">
          <Form.Control
            type="text"
            placeholder="Ingresá la imagen de tu producto"
            {...register("imagen")}
          />
        </Form.Group>

        <Button className="enviar" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
