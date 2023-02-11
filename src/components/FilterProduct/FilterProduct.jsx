import React, {useState} from 'react';
import { 
    Modal,
    ModalOverlay,
    ModalContent, 
    ModalHeader, 
    ModalBody, 
    FormControl, 
    ModalFooter,
    Button,
    FormLabel,
    ModalCloseButton,
    Select,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderThumb,
    RangeSliderFilledTrack, 
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';
import {categories} from '../../data/categories.js';
import { filterProducts, resetFilterProducts } from '../../redux/actions/filter-products';
import { useDispatch } from 'react-redux';


export const FilterProduct = (props) => {

  const dispatch = useDispatch();

  const {isOpen,onClose, initialRef, finalRef} = props;

  //llamo al estado para el manejador de rango de precio
  const [price, setPrice] = useState({inf: 0, sup: 100000});

  const Parameters = {
    category: undefined,
    price: [0,100000],
    shipping: undefined,
  }

  const [filterParameters, setFilterParameters] = useState(Parameters);

  const handleFilter = () => {
    dispatch(filterProducts(filterParameters));
    onClose();
  }

  const handleResetFilter = () => {
    setFilterParameters(Parameters);
    dispatch(resetFilterProducts());
    onClose();
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="95%">
          <ModalHeader>Filtrar Productos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb="20px">
              <FormLabel>Categoria</FormLabel>
              <Select value={filterParameters.category} onChange={(event)=>{setFilterParameters({...filterParameters,category: event.target.value})}} ref={initialRef} placeholder='Seleccionar categoría' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                {
                  categories?.map(category => <option key={category} value={category}>{category}</option>)
                }
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Envío</FormLabel>
              <Select value={filterParameters.shipping} onChange={(event)=>{setFilterParameters({...filterParameters,shipping: event.target.value})}} ref={initialRef} placeholder='Seleccionar opción' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                <option value="true">Gratuito</option>
                <option value="false">Envío con cargo</option>
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Precio</FormLabel>
              <Text mb="10px">{`Entre $${price.inf} y $${price.sup}`}</Text>
              <RangeSlider value={[filterParameters.price[0],filterParameters.price[1]]} colorScheme={colorPalette.chakraScheme.button} aria-label={['min', 'max']} defaultValue={[0, 100000]} min={0} max={100000} step={5000} onChange={(value)=>{setPrice({inf:value[0], sup:value[1]}); setFilterParameters({...filterParameters,price: [value[0], value[1]]})}}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} borderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.secondary)} />
                <RangeSliderThumb index={1} borderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.secondary)} />
              </RangeSlider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={colorPalette.chakraScheme.button} mr={3} onClick={handleFilter}>Filtrar</Button>
            <Button onClick={handleResetFilter} mr={3}>Borrar Filtro</Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

