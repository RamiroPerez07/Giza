import React from 'react'
import {Card, Image, Heading, Stack, CardBody, Text} from '@chakra-ui/react'
import { formatPrice } from '../../utils/general'

export const SummaryCardProduct = (props) => {

  //desestructuro objeto
  const {name, imgUrl, price, quantity, shortDescription, brand} = props

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '100px' }}
        src={imgUrl}
        alt= {name}
      />

      <Stack>
        <CardBody>
          <Heading size='sm' mb="10px">{name}</Heading>
          <Text>{brand}</Text>
          <Text fontSize="xs" py='2'>{shortDescription}</Text>
          <Stack direction="row" spacing="6">
            <Text>Cantidad: {quantity} </Text>
            <Text>Precio unitario: {formatPrice(price)}</Text>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

