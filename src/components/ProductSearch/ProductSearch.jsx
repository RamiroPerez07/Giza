import React from 'react';
import { Box, Stack, InputLeftElement, Input, InputGroup, Button, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';
import { FaFilter} from 'react-icons/fa';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { FilterProduct } from '../FilterProduct/FilterProduct.jsx';
import { filterProducts, updateFilterParameters } from '../../redux/actions/filter-products';
import { useDispatch, useSelector } from 'react-redux';
import { useColorModeValue } from '@chakra-ui/react';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { SortProduct } from '../SortProduct/SortProduct';

export const ProductSearch = () => {

  //llamo al despachador de acciones
  const dispatch = useDispatch();

  //configuraciones de hooks para la ventana de filtro
  const {isOpen: isFilterFrameOpen, onOpen: onFilterFrameOpen, onClose: OnFilterFrameClose } = useDisclosure({id:"filtro"});

  //configuraciones hooks para ventana de ordenamiento
  const {isOpen: isSortFrameOpen, onOpen: OnSortFrameOpen, onClose: OnSortFrameClose} = useDisclosure({id:"ordenamiento"});

  //configuro la referencia inicial (primer combobox en modal FILTRO) y final (componente destino, ej un input de busqueda)
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  //configura la referencia inicial (primer radiobutton en modal ORDEN) y final (componente destino, ej input de busqueda)
  const initialSortRef = useRef(null);


  //llamo al estado de filtrado de productos
  const {sortActive, filterActive,filterParameters} = useSelector(state => state.filterProducts)

  const handleFilter = e => {
    e.preventDefault();
    dispatch(filterProducts(filterParameters));
    OnFilterFrameClose();
  }

  const setFilterParameters = (event) => {
    dispatch(updateFilterParameters({name: event.target.value}))
  }

  const emptyFilterStyle = {color: useColorModeValue(colorPalette.light.secondary, colorPalette.dark.secondary)}
  const fillFilterStyle = {color: useColorModeValue(colorPalette.light.terciary,  colorPalette.dark.terciary)}

  return (
    <Box w="95%" maxW="500px" mb="25px">
      <Stack as="form" direction="row" spacing={3} onSubmit={handleFilter}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon aria-label="Buscar producto" />}
            color={colorPalette.chakraScheme.button}
          />
          <Input onChange={(event)=> setFilterParameters(event)} type='text' placeholder='Buscar producto' focusBorderColor={colorPalette.light.terciary} ref={finalRef} />
        </InputGroup>
        <Button leftIcon={<FaFilter style={filterActive?fillFilterStyle:emptyFilterStyle} />} variant='outline' onClick={onFilterFrameOpen}>Filtro</Button>
        <IconButton aria-label='Ordenar según' icon={<AiOutlineSortAscending style={sortActive?fillFilterStyle:emptyFilterStyle} />} variant="outline" fontSize="x-large" onClick={OnSortFrameOpen} />
      </Stack>
      <FilterProduct isOpen={isFilterFrameOpen} onClose={OnFilterFrameClose} initialRef={initialRef} finalRef={finalRef} />
      <SortProduct isOpen={isSortFrameOpen} onClose={OnSortFrameClose} initialRef={initialSortRef} finalRef={finalRef} />
    </Box>
  )
}

