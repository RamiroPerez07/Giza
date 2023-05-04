import React from 'react';
import { Card, CardHeader, Heading, CardBody, CardFooter, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {formatDate, formatPrice} from '../../utils/general.js';
import {colorPalette} from '../../styles/colors.js'; 
import { OrderStatus } from '../OrderStatus/OrderStatus.jsx';

export const OrderCard = (props) => {
  
  const {createdAt, status, total, id } = props;

  const navigate = useNavigate();


  return (
    <>
    <Card align='center' onClick={()=> navigate(`/pedidos/${id}`)} maxW="230px" w="full" position="relative">
      <OrderStatus status={status} />
      <CardHeader>
        <Heading size='sm'>ID: #{id.slice(0,6)}</Heading>
      </CardHeader>
      <CardBody>
        <Text size='xs'>{/*formatDate(createdAt)*/}</Text>
      </CardBody>
      <CardFooter alignItems="center">
        <Text size='xs' mr="20px">Total: {formatPrice(total)}</Text>
        <Button size='sm' colorScheme={colorPalette.chakraScheme.button}>Ver</Button>
      </CardFooter>
    </Card>
    </>
  )
}

