import { Center, Divider, SimpleGrid, Text, Box } from '@chakra-ui/react'
import React from 'react';
import { colorPalette } from '../../styles/colors';
import { useColorModeValue } from '@chakra-ui/react';


export const Footer = () => {
  return (
    <>
      <Center w="full" minH="150px" bg={useColorModeValue(colorPalette.light.primary, colorPalette.dark.primary)}>
        <Box w="full" maxW="800px">
          <SimpleGrid minChildWidth="250px" gap="20px" mb="15px">
            <Box>
              <Text colorScheme='white' textAlign="center" fontSize="sm" fontWeight="bold">Nosotros</Text>
              <Divider w="80%" m="auto" mb="15px" />
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px" >La empresa</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Misión</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Contacto</Text>
            </Box>
            <Box>
              <Text colorScheme='white' textAlign="center" fontSize="sm" fontWeight="bold">Servicios</Text>
              <Divider w="80%" m="auto" mb="15px" />
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">FAQS</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Términos y condiciones</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Atención al cliente</Text>
            </Box>
            <Box>
              <Text colorScheme='white' textAlign="center" fontSize="sm" fontWeight="bold">Redes</Text>
              <Divider w="80%" m="auto" mb="15px" />
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Facebook</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Instagram</Text>
              <Text colorScheme='white' textAlign="center" fontSize="sm" mt="5px">Youtube</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </>
  )
}

