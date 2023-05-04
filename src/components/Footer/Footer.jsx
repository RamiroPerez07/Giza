import { Center, Divider, SimpleGrid, Text, Box } from '@chakra-ui/react'
import React from 'react';
import { colorPalette } from '../../styles/colors';
import { useColorModeValue } from '@chakra-ui/react';


export const Footer = () => {
  return (
    <>
      <Center w="full" minH="150px" bg={useColorModeValue(colorPalette.light.primary, colorPalette.dark.primary)}>
        <Box w="full" maxW="800px">
          <SimpleGrid minChildWidth="250px" gap="20px">
            <Box>
              <Text colorScheme='white' textAlign="center">Nosotros</Text>
              <Divider w="80%" m="auto" />
            </Box>
            <Box>
              <Text colorScheme='white' textAlign="center">Términos y condiciones</Text>
              <Divider w="80%" m="auto" />
            </Box>
            <Box>
              <Text colorScheme='white' textAlign="center">Contacto</Text>
              <Divider w="80%" m="auto" />
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </>
  )
}

