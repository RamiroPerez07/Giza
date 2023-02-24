import React from 'react';
import { Field, Formik } from 'formik';
import { StyledForm } from './LoginForm.js';
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Stack, Heading, Text, Link } from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors.js';
import { validateUsername, validatePassword } from '../../utils/validations';
import {FcGoogle} from 'react-icons/fc';
import {signInWithGoogle} from '../../firebase/firebase-utils.js';
import { useColorModeValue } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <>
      <Stack spacing="20px" p="30px 20px" w="full" maxW="400px" alignItems="center" boxShadow={`0px 1px 3px 1px ${useColorModeValue(colorPalette.light.cardborder, colorPalette.dark.cardborder)}`} borderRadius="10px" bg={useColorModeValue(colorPalette.light.card,colorPalette.dark.card)}>
        <Heading as="h3" size="md">Iniciar Sesión</Heading>
        <Formik
          initialValues={{ username: '', password: '',}}
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
              <Field name='username' validate={validateUsername}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.username && form.touched.username}>
                    <FormLabel>Usuario</FormLabel>
                    <Input {...field} type="text" placeholder='Nombre de usuario' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name='password' validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel>Contraseña</FormLabel>
                    <Input {...field} type="password" placeholder='Contraseña' focusBorderColor={colorPalette.light.terciary} />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt="10px" justifySelf="center" colorScheme={colorPalette.chakraScheme.button} isLoading={props.isSubmitting} type='submit'>Ingresar</Button>
            </StyledForm>
          )}
        </Formik>
        <Text fontSize="sm">O podes ingresar con:</Text>
        <Button leftIcon={<FcGoogle />} variant='outline' onClick={signInWithGoogle}>Google</Button>
        <Text fontSize="sm">¿Aun no tenes cuenta? <Link as={ReachLink} to="/registro" fontWeight="bold">Registrate</Link></Text>
      </Stack>
    </>
  )
}

