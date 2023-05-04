import React from 'react';
import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {formatDate, formatPrice} from '../../utils/general.js';
import {colorPalette} from '../../styles/colors.js'; 
import { OrderStatus } from '../OrderStatus/OrderStatus.jsx';
import { Timestamp } from 'firebase/firestore';

export const OrderCard = (props) => {
  
  const {createdAt, status, total, id } = props;

  const navigate = useNavigate();

  const createOrderAt = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();


  return (
    <>
    <Card align='center' onClick={()=> navigate(`/pedidos/${id}`)} maxW="230px" w="full" position="relative" cursor="pointer">
      <OrderStatus status={status} />
      <CardHeader>
        <Heading fontSize='sm'>ID: #{id.slice(0,6)}</Heading>
      </CardHeader>
      <CardBody p="5px">
        <Text fontSize='xs'>{formatDate(createOrderAt)}</Text>
      </CardBody>
      <CardFooter alignItems="center">
        <Text fontSize='xs' mr="20px">{formatPrice(total)}</Text>
        <Button size='xs' colorScheme={colorPalette.chakraScheme.button}>Ver</Button>
      </CardFooter>
    </Card>
    </>
  )
}

