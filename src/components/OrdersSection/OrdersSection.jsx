import React, {useEffect} from 'react'
import { LandingSection } from '../LandingSection/LandingSection.jsx'
import { SimpleGrid, Box, Heading } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import * as orderActions from '../../redux/actions/orders-actions.js'
import { OrderCard } from '../OrderCard/OrderCard.jsx';

export const OrdersSection = () => {

  const currentUser = useSelector(state => state.user.currentUser);
  const {orders, error} = useSelector(state => state.orders);
  const dispatch = useDispatch();




  return (
    <>
      <LandingSection>
        <Box w="full" maxW="850px">
          <Heading size="md" m="15px 10px 25px 10px" textAlign="center">Mis pedidos</Heading>
          <SimpleGrid spacing={4} minChildWidth="250px" justifyItems="center" w="full">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </SimpleGrid>
        </Box>
      </LandingSection>
    </>
  )
}

