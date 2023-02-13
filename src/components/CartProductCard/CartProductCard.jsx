import React from 'react';
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react';

export const CartProductCard = (props) => {
  console.log(props.id)
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        h="auto"
        minH="150px"
      >
        <Image
          objectFit='cover'
          maxW={{ base: '95%', sm: '100px' }}
          src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody pb="5px">
            <Heading as="h3" size='xs'>The perfect latte</Heading>

            <Text py='2' fontSize="xs">
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Text>
          </CardBody>

          <CardFooter pt="0px" alignItems="center">
            <Text fontSize="xs" mr="10px">Cantidad</Text>
            <Button variant='solid' colorScheme='blue' size="xs" mr="10px">-</Button>
            <Text fontSize="xs" fontWeight="bold" mr="10px" minW="15px" align="center">10</Text>
            <Button variant='solid' colorScheme='blue' size="xs">+</Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}

