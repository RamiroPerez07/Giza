import React, {useEffect} from 'react'
import { LandingSection } from '../LandingSection/LandingSection.jsx'
import { SimpleGrid, Box, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import * as orderActions from '../../redux/actions/orders-actions.js'
import { OrderCard } from '../OrderCard/OrderCard.jsx';
import { Spinner } from '@chakra-ui/react';
import {Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';
import { current } from '@reduxjs/toolkit';
import { useRedirect } from '../../hooks/useRedirect.js';

export const OrdersSection = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const {orders, error, loading} = useSelector(state => state.orders);
  const dispatch = useDispatch();
  useRedirect("/ingresar");

  useEffect(() => {
    if(currentUser){
      dispatch(orderActions.getFullOrders(currentUser?.id))
    }else{
      dispatch(orderActions.getOrdersFail())
    } 
  }, [currentUser, dispatch])

  if(loading && !orders){
    return <Spinner />
  }

  if(error){
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Ocurrió un error en la petición de datos</AlertDescription>
    </Alert>
  }

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
      name: "Pedidos",
      page: "/pedidos",
    },
  ]


  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <Box w="full" maxW="850px">
          <Heading size="md" m="15px 10px 25px 10px" textAlign="center">Mis pedidos</Heading>
          <SimpleGrid spacing={4} minChildWidth="250px" justifyItems="center" w="full">
            {
              orders?.length ? (
                orders.map(order => <OrderCard key={order.id} {...order} />)
              ) : (
                <Alert status='info'>
                <AlertIcon />
                Aun no realizaste ningún pedido!
                </Alert>
              )

            }
          </SimpleGrid>
        </Box>
      </LandingSection>
    </>
  )
}

