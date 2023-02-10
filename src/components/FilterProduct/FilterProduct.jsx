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
} from '@chakra-ui/react';


export const FilterProduct = (props) => {

  const {isOpen,onClose, initialRef, finalRef} = props;

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
            <FormControl>
              <FormLabel>Categoria</FormLabel>
              <Select ref={initialRef} placeholder='Seleccionar Categoría'>
                <option value='option1'>Perfumes</option>
                <option value='option2'>Aerosoles</option>
                <option value='option3'>Maquillaje</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Precio</FormLabel>
              <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>Guardar</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

