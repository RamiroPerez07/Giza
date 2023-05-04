import { Button, Heading, Image, Text, Stack, useToast } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';
import {colorPalette} from '../../styles/colors.js';
import { MdLocalShipping } from 'react-icons/md';
import { handleAddProductToCart } from '../../utils/cartEvents.js';
import { addProductToCart } from '../../redux/actions/cart-actions.js';
import { formatPrice } from '../../utils/general.js';

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

  //llamo al despachador de eventos
  const dispatch = useDispatch();

  //llamo al administrador del modal
  const toast = useToast();

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <Stack w="full" maxW="600px" p="10px 20px">
          <Heading as="h2" alignSelf="center">{name}</Heading>
          <Text alignSelf="center">{brand}</Text>
          <Image src={imgUrl} w="full" maxW="250px" maxH="250px" alignSelf="center"/>
          <Heading as="h3" fontSize="medium">Detalle del producto</Heading>
          <Text fontSize="small">{description}</Text>
          <Stack direction="row" minH="20px">
            {freeShipping && 
            <>
              <MdLocalShipping color={colorPalette.chakraScheme.green} />
              <Text color={colorPalette.chakraScheme.green} fontSize="medium" fontWeight="bold">Envío gratuito</Text>
            </>
            }
          </Stack>
          <Text fontSize="x-large" fontWeight="bold">{formatPrice(price)}</Text>
          <Button colorScheme={colorPalette.chakraScheme.button} alignSelf="center" onClick={()=>handleAddProductToCart(currentProduct, toast, dispatch, addProductToCart)}>Agregar al carrito</Button>
        </Stack>
      </LandingSection>
    </>
  )
}

