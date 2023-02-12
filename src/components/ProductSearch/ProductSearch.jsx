import React from 'react';
import { Box, Stack, InputLeftElement, Input, InputGroup, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';
import {FaFilter} from 'react-icons/fa';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FilterProduct } from '../FilterProduct/FilterProduct.jsx';
import { filterProducts, updateFilterParameters } from '../../redux/actions/filter-products';
import { useDispatch, useSelector } from 'react-redux';

export const ProductSearch = () => {

  //llamo al despachador de acciones
  const dispatch = useDispatch();

  //configuraciones de hooks para la ventana de filtro
  const { isOpen, onOpen, onClose } = useDisclosure({})

  //configuro la referencia inicial (modal) y final (componente destino, ej un input de busqueda)
  const initialRef = useRef(null)
  const finalRef = useRef(null)

  //llamo al estado de filtrado de productos
  const {filterParameters} = useSelector(state => state.filterProducts)

  const handleFilter = e => {
    e.preventDefault();
    dispatch(filterProducts(filterParameters));
    onClose();
  }

  return (
    <Box w="95%" maxW="500px" mb="25px">
      <Stack as="form" direction="row" spacing={3} onSubmit={handleFilter}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon aria-label="Buscar producto" />}
            color={colorPalette.chakraScheme.button}
          />
          <Input onChange={(event)=> dispatch(updateFilterParameters({name: event.target.value}))} type='text' placeholder='Buscar producto' focusBorderColor={colorPalette.light.terciary} ref={finalRef} />
        </InputGroup>
        <Button leftIcon={<FaFilter />} variant='outline' onClick={onOpen}>Filtro</Button>
      </Stack>
      <FilterProduct isOpen={isOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
    </Box>
  )
}

