import React from 'react';
import { Card, Heading, Button, ButtonGroup, Divider, Stack, Text, CardFooter, Image, CardBody } from '@chakra-ui/react';
import {BsFillCartFill} from 'react-icons/bs';
import { colorPalette } from '../../styles/colors';

export const ProductCard = () => {
  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color={colorPalette.chakraScheme.button} fontSize='2xl' fontWeight="500">$450</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button leftIcon={<BsFillCartFill />} variant='solid' colorScheme='blue'>Agregar</Button>
            <Button variant='ghost' colorScheme='blue'>Mas info</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

