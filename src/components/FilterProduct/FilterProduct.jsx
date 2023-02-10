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


export const FilterProduct = (props) => {

  const {isOpen,onClose, initialRef, finalRef} = props;

  //llamo al estado para el manejador de rango de precio
  const [price, setPrice] = useState({inf: 0, sup: 100000})

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
              <Select ref={initialRef} placeholder='Seleccionar categoría' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                <option value='option1'>Perfumes</option>
                <option value='option2'>Aerosoles</option>
                <option value='option3'>Maquillaje</option>
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Envío</FormLabel>
              <Select ref={initialRef} placeholder='Seleccionar opción' focusBorderColor={useColorModeValue(colorPalette.light.terciary, colorPalette.dark.terciary)}>
                <option value='option1'>Gratuito</option>
                <option value='option2'>Envío con cargo</option>
              </Select>
            </FormControl>

            <FormControl mb="20px">
              <FormLabel>Precio</FormLabel>
              <Text mb="10px">{`Entre $${price.inf} y $${price.sup}`}</Text>
              <RangeSlider colorScheme={colorPalette.chakraScheme.button} aria-label={['min', 'max']} defaultValue={[0, 100000]} min={0} max={100000} step={5000} onChange={(value)=>setPrice({inf:value[0], sup:value[1]})}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={colorPalette.chakraScheme.button} mr={3}>Guardar</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

