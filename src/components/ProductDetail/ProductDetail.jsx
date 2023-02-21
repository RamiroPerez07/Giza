import { Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { useSelector } from 'react-redux';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';

export const ProductDetail = () => {

  //llamo al estado del carro (Esto me va a servir para obtener el listado de productos)
  //no son los productos del carrito, sino los productos del catalogo (la lista)
  const cartState = useSelector(state => state.cart)
  const {products} = cartState;

  //utilizo useLocation para capturar el estado enviado a la URL. 
  //Es decir, cuando apretamos el boton +info en la tarjeta del producto se envia el estado con el id del producto.
  //Este id lo capturamos con location.state.id
  const location = useLocation();

  //genero una funcion para obtener los productos por su numero id
  const getProductById = id => products.find(product => product.id === id);

  //obtengo el producto actual que me servira para mostrar los datos en la ui
  const currentProduct = getProductById(location.state.id);

  //desestructuro
  const {id, brand, description, freeShipping, imgUrl, name, price} = currentProduct;

  //secciones de escape de la pagina
  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Productos",
      page: "/productos",
    },
    {
      name: name,
      page: location.pathname,
      state: {id: id},
    },
  ];

  console.log(location)

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <Heading as="h2">{name}</Heading>
        <Text>{brand}</Text>
        <Image src={imgUrl} w="full" maxW="300px" maxH="300px"/>
        <Text>{description}</Text>
        <Text>{freeShipping}</Text>
        <Text>{price}</Text>
      </LandingSection>
    </>
  )
}

