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
    Radio,
    RadioGroup,
    Stack,
} from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';
import { filterProducts as filterBy, resetSortParameters, updateFilterParameters } from '../../redux/actions/filter-products';
import { useDispatch, useSelector } from 'react-redux';


export const SortProduct = (props) => {

  const dispatch = useDispatch();

  const {isOpen,onClose, initialRef, finalRef} = props;

  //llamo al estado de filtrado de productos
  const {filterParameters} = useSelector(state => state.filterProducts)

  const handleFilter = () => {
    dispatch(filterBy(filterParameters));
    onClose();
  }

  const handleResetFilter = () => {
    dispatch(resetSortParameters());
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
          <ModalHeader>Ordenar Productos</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

          <FormControl mb="20px">
            <FormLabel>Por nombre</FormLabel>
            <RadioGroup defaultValue='name-undefined' name="name-sort" onChange={(value)=>dispatch(updateFilterParameters({sortByName: value}))} value={filterParameters.sortByName}>
              <Stack>
                <Radio value='name-undefined' size="sm">Sin Orden</Radio>
                <Radio value='name-az' size="sm">Ascendente [A-Z]</Radio>
                <Radio value='name-za' size="sm">Descendente [Z-A]</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl mb="20px">
            <FormLabel>Por precio</FormLabel>
            <RadioGroup defaultValue='price-undefined' name="price-sort" onChange={(value)=>dispatch(updateFilterParameters({sortByPrice: value}))} value={filterParameters.sortByPrice}>
              <Stack>
                <Radio value='price-undefined' size="sm">Sin Orden</Radio>
                <Radio value='price-19' size="sm">Ascendente [1-9]</Radio>
                <Radio value='price-91' size="sm">Descendente [9-1]</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          </ModalBody>

          <ModalFooter display="grid" gridGap="10px" gridAutoFlow="column" justifyContent="center">
            <Button colorScheme={colorPalette.chakraScheme.button} onClick={handleFilter}>Ordenar</Button>
            <Button onClick={handleResetFilter}>Borrar</Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}