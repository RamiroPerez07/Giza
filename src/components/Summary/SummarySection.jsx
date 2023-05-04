import React, { useEffect, useState } from 'react';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { Heading, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { SummaryCardProduct } from '../SummaryCardProduct/SummaryCardProduct.jsx';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react';
import {TableContainer, Tr, Td, Tbody, Tfoot, Table, Th, Thead} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import * as ordersActions from '../../redux/actions/orders-actions.js'
import { formatPrice } from '../../utils/general.js';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';

export const SummarySection = () => {

  const [visitedOrder, setVisitedOrder] = useState(null);
  const currentUser = useSelector(state => state.user.currentUser);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const {orderId} = useParams();

  const location = useLocation();

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
    {
      name: "#"+visitedOrder?.id.slice(0,6),
      page: location.pathname,
    },
  ]



  useEffect(()=>{
    if(!orders){
      dispatch(ordersActions.getFullOrders(currentUser?.id))
    }
    setVisitedOrder(orders?.find(order => order.id === orderId))
  },[orderId, orders, dispatch, currentUser?.id])

  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <Heading textAlign="center" size="md" mb="25px">Detalle del pedido #{visitedOrder?.id.slice(0,6)}</Heading>
        <Box w="full" maxW="800px">
          {/*Area de productos*/}
          <Accordion allowMultiple mb="25px">
            <AccordionItem>
              <Text>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>Productos</Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                <SimpleGrid w="full" spacing="2" columns="2" minChildWidth='350px' justifyItems="center">
                  {
                    visitedOrder?.items.map(item => (
                      <SummaryCardProduct key={item.id} {...item} />
                    ))
                  }
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Area costos */}
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Detalle</Th>
                  <Th isNumeric>Valor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td isNumeric>{formatPrice(visitedOrder?.subtotal)}</Td>
                </Tr>
                <Tr>
                  <Td>Envío</Td>
                  <Td isNumeric>{formatPrice(visitedOrder?.shippingCost)}</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th isNumeric>{formatPrice(visitedOrder?.total)}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>


        </Box>
      </LandingSection>
    </>
  )
}

