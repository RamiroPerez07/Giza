import { Heading, Stack, FormControl, FormLabel, Input, FormErrorMessage, Button } from '@chakra-ui/react';
import { Formik, Field } from 'formik';
import React from 'react';
import { validateName, validateTel, validateLocation, validateAddress } from '../../utils/validations';
import { colorPalette } from '../../styles/colors';
import { StyledForm } from './CheckoutForm.js';

export const CheckoutForm = () => {
  return (
    <>
      <Stack w="full" alignItems="center">
        <Heading as="h2" fontSize="md" mb="10px">¡Completa con tus datos para finalizar!</Heading>
        <Formik
          initialValues={{ name: '', tel: '', location: '', address: ''}}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000) //se simula que el feedback demora 1 seg
            actions.resetForm(); //reseteo formulario
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
      </Stack>
    </>
  )
}

