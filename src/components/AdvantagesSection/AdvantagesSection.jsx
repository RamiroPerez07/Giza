import React from 'react'
import { LandingSection } from '../LandingSection/LandingSection.jsx'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { AdvantageCard } from '../AdvantageCard/AdvantageCard.jsx'
import { useDispatch } from 'react-redux'
import { filterProducts, updateFilterParameters } from '../../redux/actions/filter-products.js'

export const AdvantagesSection = () => {

  const dispatch = useDispatch()

  const advantages = [
    {
      id: 1,
      title:"Atención al cliente",
      description: "Nuestro equipo está atento a la resolución de sus consultas!",
      btn: true,
      btnFunction : () => {},
      redirectTo: "/contacto",
      btnTitle: "Escribinos"
    },
    {
      id: 2,
      title:"Calidad de servicio",
      description: "Recibís tus productos en menos de 24 hs!",
      btn: false,
      btnFunction : () => {},
      redirectTo: null,
      btnTitle: null,
    },
    {
      id:3,
      title:"Variedad y precio",
      description: "Accedé a una amplia variedad de productos a un precio exclusivo!",
      btn: true,
      btnFunction : () => {
        //se buscan todos los productos
        const filterParameters = {
          name: "",
          category: "",
          price: [0,100000],
          shipping: "",
          sortByName: "name-undefined",
          sortByPrice: "price-undefined",
        }
        dispatch(updateFilterParameters(filterParameters));
        dispatch(filterProducts(filterParameters));
      },
      redirectTo: "/productos",
      btnTitle: "Productos"
    },
    {
      id:4,
      title:"Envíos gratuitos",
      description: "Ofrecemos envío gratuito en la compra de determinados productos!",
      btn: true,
      btnFunction : () => {
        //se filtra por aquellos con envio gratuito
        const filterParameters = {
          name: "",
          category: "",
          price: [0,100000],
          shipping: "true",
          sortByName: "name-undefined",
          sortByPrice: "price-undefined",
        }
        dispatch(updateFilterParameters(filterParameters));
        dispatch(filterProducts(filterParameters));
      },
      redirectTo: "/productos",
      btnTitle: "Ver más"
    },
  ]

  return (
    <>
      <LandingSection>
        <Heading size="md" mb="30px" >Conocé más...</Heading>
        <Box w="full" maxW="620px">
          <SimpleGrid w="full" columns="2" minChildWidth={{base: "250px" ,sm:"300px"}} spacingY="6" justifyItems="center">
            {
              advantages.map(advantage => <AdvantageCard key={advantage.id} {...advantage} />)
            }
          </SimpleGrid>
        </Box>
      </LandingSection>
    </>
  )
}

