import { Heading, Stack, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import React from 'react';
import { validateName, validateTel, validateLocation, validateAddress } from '../../utils/validations';
import { colorPalette } from '../../styles/colors';
import { StyledForm } from './CheckoutForm.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as orderActions from '../../redux/actions/orders-actions.js';
import * as cartActions from '../../redux/actions/cart-actions.js';
import { useSelector } from 'react-redux';
import { calculateTotal } from '../../utils/subtotals';
//import { useDisclosure } from '@chakra-ui/react';
//import {AlertDialog,AlertDialogBody,AlertDialogFooter,AlertDialogHeader,AlertDialogContent,AlertDialogOverlay} from '@chakra-ui/react';
import {} from '../../firebase/firebase-utils.js'

export const CheckoutForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //llamo al estado del carrito
  const {productsCart} = useSelector(state => state.cart);

  //llamo a la funcion totalizadora y le paso como parametro los productos del carro
  const {subtotal, shippingCost, total} = calculateTotal(productsCart);

  //llamo al manejador del cuadro de dialogo
  //const { isOpen, onOpen, onClose } = useDisclosure()
  //const cancelRef = React.useRef()


  return (
    <>
      <Stack w="full" alignItems="center">
        <Heading as="h2" fontSize="md" mb="10px">¡Completa con tus datos para finalizar!</Heading>
        <Formik
          initialValues={{ name: '', tel: '', location: '', address: ''}}
          onSubmit={async values => {
            const orderData = {
              productsCart,
              subtotal,
              shippingCost,
              total,
              shippingDetails : {
                ...values
              }
            }
            try {
              dispatch(orderActions.createOrder(orderData));
              navigate("/felicitaciones");
              dispatch(cartActions.removeAllProductsFromCart());
            } catch (error) {
              alert("Error al crear la orden")
            }

            



          }}
        >
          {(props) => (
            <StyledForm noValidate>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Nombre</FormLabel>
                    <Input {...field} type="text" placeholder='Ingresá tu nombre' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='tel' validate={validateTel}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.tel && form.touched.tel}>
                    <FormLabel>Teléfono/Celular</FormLabel>
                    <Input {...field} type="tel" placeholder='Ingresá tu teléfono/celular' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.tel}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='location' validate={validateLocation}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.location && form.touched.location}>
                    <FormLabel>Localidad</FormLabel>
                    <Input {...field} type="text" placeholder='Escribe tu mensaje aqui' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.location}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='address' validate={validateAddress}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.address && form.touched.address}>
                    <FormLabel>Dirección</FormLabel>
                    <Input {...field} type="text" placeholder='Escribe tu mensaje aqui' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt="10px" justifySelf="center" colorScheme={colorPalette.chakraScheme.button} isLoading={props.isSubmitting} type='submit'>Iniciar pedido</Button>
            </StyledForm>
          )
          }

        </Formik>
          {/*<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>Confirmar pedido</AlertDialogHeader>

                <AlertDialogBody>¿Deseas confirmar el pedido?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} mr={3} onClick={() => {setConfirm(false); onClose()}}>No</Button>
                  <Button onClick={() => {
                    setConfirm(true);
                    onClose();
                  }
                    
                  } colorScheme='red' >Si</Button>  
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>*/}
      </Stack>
    </>
  )
}

