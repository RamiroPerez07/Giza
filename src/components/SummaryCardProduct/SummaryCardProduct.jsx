import React from 'react'
import {Card, Image, Heading, Stack, CardBody, Text, Center} from '@chakra-ui/react'
import { formatPrice } from '../../utils/general'

export const SummaryCardProduct = (props) => {

  //desestructuro objeto
  const {name, imgUrl, price, quantity, shortDescription, brand} = props

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      p="10px"
      justifyContent="center"
      maxW="500px"
    >
        <Center>
          <Image
            objectFit='contain'
            maxW="80px"
            src={imgUrl}
            alt= {name}
          />
        </Center>
        <Stack>
          <CardBody>
            <Heading size='sm' mb="10px">{name}</Heading>
            <Text fontSize="xs">{brand}</Text>
            <Text fontSize="xs" py='2'>{shortDescription}</Text>
            <Stack direction="row" spacing="6">
              <Text fontSize="xs">Cantidad: {quantity} </Text>
              <Text fontSize="xs">Precio unitario: {formatPrice(price)}</Text>
            </Stack>
          </CardBody>
        </Stack>



    </Card>
  )
}

