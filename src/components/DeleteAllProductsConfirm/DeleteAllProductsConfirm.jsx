import React, {useRef} from 'react';
import { removeAllProductsFromCart } from '../../redux/actions/cart-actions';
import { AlertDialog, AlertDialogHeader, AlertDialogContent, AlertDialogFooter, AlertDialogBody, Button, AlertDialogOverlay, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { handleDeleteAllProductsFromCart } from '../../utils/cartEvents';


export const DeleteAllProductsConfirm = (props) => {
  const cancelRef = useRef();

  //desestructuro las propiedades pasadas al modal
  const {isOpen, onClose} = props;

  //preparo el useToast para mostrar luego de eliminar
  const toast = useToast();

  //llamo al despachador de eventos (es decir, para elimianr el producto en el redux)
  const dispatch = useDispatch();

  //funcion de eliminacion
  const handleDeleteProduct = () => {
    onClose();
    handleDeleteAllProductsFromCart(toast, dispatch, removeAllProductsFromCart);
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
            Eliminar productos
          </AlertDialogHeader>

          <AlertDialogBody>
            {`Todos los productos serán eliminados del carrito. ¿Deseas confirmar esta operación?`}
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

