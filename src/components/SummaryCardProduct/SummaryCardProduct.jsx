import React from 'react'
import {Card, Image, Heading, Stack, CardBody, Text} from '@chakra-ui/react'

export const SummaryCardProduct = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '100px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Imagen del producto'
      />

      <Stack>
        <CardBody>
          <Heading size='sm' mb="10px">The perfect latte</Heading>
          <Text>Brand</Text>
          <Text fontSize="xs" py='2'>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
          <Stack direction="row" spacing="6">
            <Text>Cantidad: 2 </Text>
            <Text>Precio unitario: $500</Text>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

