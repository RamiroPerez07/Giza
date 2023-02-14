import React from 'react';
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
import { filterProducts as filterBy, resetFilterProducts, updateFilterParameters } from '../../redux/actions/filter-products';
import { useDispatch, useSelector } from 'react-redux';


export const FilterProduct = (props) => {

  const dispatch = useDispatch();

  const {isOpen,onClose, initialRef, finalRef} = props;

  //llamo al estado de filtrado de productos
  const {filterParameters} = useSelector(state => state.filterProducts)

  const handleFilter = () => {
    dispatch(filterBy(filterParameters));
    onClose();
  }

  const handleResetFilter = () => {
    dispatch(resetFilterProducts());
    dispatch(filterBy(filterParameters));
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
        <ModalContent w="95%" justifyContent="center">
          <ModalHeader>Filtrar Productos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <FormControl mb="20px">
              <FormLabel>Categoria</FormLabel>
              <Select value={filterParameters.category} onChange={(event)=>{dispatch(updateFilterParameters({category: event.target.value}))}} ref={initialRef} placeholder='Seleccionar categoría' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                {
                  categories?.map(category => <option key={category} value={category}>{category}</option>)
                }
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Envío</FormLabel>
              <Select value={filterParameters.shipping} onChange={(event)=>{dispatch(updateFilterParameters({shipping: event.target.value}))}} ref={initialRef} placeholder='Seleccionar opción' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                <option value="true">Gratuito</option>
                <option value="false">Envío con cargo</option>
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Precio</FormLabel>
              <Text mb="10px">{`Entre $${filterParameters.price[0]} y $${filterParameters.price[1]}`}</Text>
              <RangeSlider value={filterParameters.price}  colorScheme={colorPalette.chakraScheme.button} min={0} max={100000} step={5000} onChange={(value)=>{dispatch(updateFilterParameters({price: [value[0], value[1]]}))}}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} borderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.secondary)} />
                <RangeSliderThumb index={1} borderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.secondary)} />
              </RangeSlider>
            </FormControl>
          </ModalBody>

          <ModalFooter display="grid" gridGap="10px" gridAutoFlow="column" justifyContent="center">
            <Button colorScheme={colorPalette.chakraScheme.button} onClick={handleFilter}>Filtrar</Button>
            <Button onClick={handleResetFilter}>Borrar</Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

