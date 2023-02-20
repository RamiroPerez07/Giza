import React from 'react';
import { AlertDialog, AlertDialogHeader, AlertDialogContent, AlertDialogFooter, AlertDialogBody, Button, AlertDialogOverlay, useToast } from '@chakra-ui/react';
import { useRef } from 'react';
import { handleDeleteProductFromCart } from '../../utils/cartEvents';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../redux/actions/cart-actions';

export const DeleteProductConfirm = (props) => {
  const cancelRef = useRef();

  //desestructuro las propiedades pasadas al modal
  const {isOpen, onClose, product} = props;

  //preparo el useToast para mostrar luego de eliminar
  const toast = useToast();

  //llamo al despachador de eventos (es decir, para elimianr el producto en el redux)
  const dispatch = useDispatch();

  //funcion de eliminacion
  const handleDeleteProduct = () => {
    onClose();
    handleDeleteProductFromCart(product, toast, dispatch, removeProductFromCart);
  }

  return (
    <>
      <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Eliminar producto
          </AlertDialogHeader>

          <AlertDialogBody>
            {`El producto ${product.name} será eliminado del carrito. ¿Deseas confirmar esta operación?`}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme='red' onClick={handleDeleteProduct}>
              Eliminar
            </Button>
            <Button ref={cancelRef} onClick={onClose} ml={3}>
              Cancelar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
    </>
  )
}

