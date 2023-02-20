import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Map = () => {
  const mapStyles = {
    width: "100%",
    maxWidth: "500px",
    height: "400px",
    border: "0px"
  }
  return (
    <>
    <Stack spacing="10px" alignItems="center" w="full" mt="40px">
      <Text fontSize="small">Punto de retiro: Av. Falcón 391, San Nicolás, Bs As (2900)</Text>
      <iframe 
        title="Punto de venta" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1666.6014728952166!2d-60.2151594263036!3d-33.33964741632114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b76788cc617bab%3A0xba5a00484cb5d953!2sDrogueria%20Genericos%20San%20Nicolas!5e0!3m2!1ses-419!2sar!4v1676924153707!5m2!1ses-419!2sar" 
        style={mapStyles} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </Stack>
    </>
  )
}

