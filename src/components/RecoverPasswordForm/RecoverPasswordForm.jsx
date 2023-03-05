import React from 'react';
import { Field, Formik } from 'formik';
import { StyledForm } from './RecoverPasswordForm.js';
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Stack, Heading, Link } from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors.js';
import { validateEmail } from '../../utils/validations';
import { useColorModeValue } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { useRedirect } from '../../hooks/useRedirect.js';
import { resetPassword } from '../../firebase/firebase-utils.js';


export const RecoverPasswordForm = () => {

  useRedirect('/'); //redirigir al home

  return (
    <>
      <Stack spacing="20px" p="30px 20px" w="full" maxW="400px" alignItems="center" boxShadow={`0px 1px 3px 1px ${useColorModeValue(colorPalette.light.cardborder, colorPalette.dark.cardborder)}`} borderRadius="10px" bg={useColorModeValue(colorPalette.light.card,colorPalette.dark.card)}>
        <Heading as="h3" size="md">Restablecer contraseña</Heading>
        <Formik
          initialValues={{ email: ''}}
          onSubmit={(values, actions) => {
            resetPassword(values.email);
            actions.resetForm();
            //setTimeout(() => {
            //  alert(JSON.stringify(values, null, 2))
            //  actions.setSubmitting(false)
            //}, 1000) //se simula que el feedback demora 1 seg
            //actions.resetForm(); //reseteo formulario
          }}
        >
          {(props) => (
            <StyledForm noValidate>
              <Field name='email' validate={validateEmail}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>Email de recuperación</FormLabel>
                    <Input {...field} type="text" placeholder='Email' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Link as={ReachLink} to="/ingresar" fontWeight="bold" textAlign="center" fontSize="sm">Ya recordé mi contraseña</Link>
              <Button mt="10px" justifySelf="center" colorScheme={colorPalette.chakraScheme.button} isLoading={props.isSubmitting} type='submit'>Enviar</Button>
            </StyledForm>
          )}
        </Formik>
      </Stack>
    </>
  )
}

