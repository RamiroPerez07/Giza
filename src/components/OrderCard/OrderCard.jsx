import React from 'react';
import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text } from '@chakra-ui/react';
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import {formatDate, formatPrice} from '../../utils/general.js';
import {colorPalette} from '../../styles/colors.js'; 
import { OrderStatus } from '../OrderStatus/OrderStatus.jsx';

export const OrderCard = (props) => {
  
  const {createdAt, status, total, id } = props;

  const navigate = useNavigate();
  
  /*const createOrderAt = new Timestamp(
    createdAt.seconds, 
    createdAt.nanoseconds
  ).toDate();*/

  return (
    <>
    <Card align='center' onClick={()=> navigate(`/resumen/${id}`)} maxW="230px" w="full" position="relative">
      <OrderStatus status="pending" />
      <CardHeader>
        <Heading size='sm'>ID: #001526{/*Pedido: {id.slice(0,7)}*/}</Heading>
      </CardHeader>
      <CardBody>
        <Text size='xs'>Detalle{/*{formatDate(createOrderAt)}*/} hs</Text>
      </CardBody>
      <CardFooter alignItems="center">
        <Text size='xs' mr="20px">Total: $1250{/*formatPrice(total)*/}</Text>
        <Button size='sm' colorScheme={colorPalette.chakraScheme.button}>Ver</Button>
      </CardFooter>
    </Card>
    </>
  )
}

