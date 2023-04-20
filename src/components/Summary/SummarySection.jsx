import React from 'react';
import {LandingSection} from '../LandingSection/LandingSection.jsx';
import { Heading, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { SummaryCardProduct } from '../SummaryCardProduct/SummaryCardProduct.jsx';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react';
import {TableContainer, Tr, Td, Tbody, Tfoot, Table, Th, Thead} from '@chakra-ui/react';

export const SummarySection = () => {
  return (
    <>
      <LandingSection>
        <Heading textAlign="center" size="md" mb="25px">Detalle del pedido #152634</Heading>
        <Box w="full" maxW="800px">
          {/*Area de productos*/}
          <Accordion allowMultiple mb="25px">
            <AccordionItem>
              <Text>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>Productos</Box>
                  <AccordionIcon />
                </AccordionButton>
              </Text>
              <AccordionPanel pb={4}>
                <SimpleGrid w="full" spacing="2" columns="1">
                  <SummaryCardProduct />
                  <SummaryCardProduct />
                  <SummaryCardProduct />
                  <SummaryCardProduct />
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* Area costos */}
          <TableContainer>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Detalle</Th>
                  <Th isNumeric>Valor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td isNumeric>$25000</Td>
                </Tr>
                <Tr>
                  <Td>Envío</Td>
                  <Td isNumeric>$300</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th isNumeric>$25300</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>


        </Box>
      </LandingSection>
    </>
  )
}

