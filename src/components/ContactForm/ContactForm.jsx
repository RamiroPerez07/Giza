// The below import defines which components come from formik
import { Field, Formik } from 'formik';
import { StyledForm } from './ContactForm.js';
import { FormControl, FormLabel, Input, FormErrorMessage, Button, Textarea, Stack, Heading } from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors.js';
import { validateEmail, validateName, validateSurname, validateTel, validateMessage } from '../../utils/validations.js';

export const ContactForm = () => {


  return (
    <Stack spacing="20px" w="full" alignItems="center">
      <Heading as="h3" size="md">¡Envianos tu consulta!</Heading>
      <Formik
        initialValues={{ name: '', surname: '', tel: '', email: '', message: ''}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000) //se simula que el feedback demora 1 seg
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
            <Field name='surname' validate={validateSurname}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.surname && form.touched.surname}>
                  <FormLabel>Apellido</FormLabel>
                  <Input {...field} type="text" placeholder='Ingresá tu apellido' focusBorderColor={colorPalette.light.terciary} />
                  <FormErrorMessage>{form.errors.surname}</FormErrorMessage>
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
            <Field name='email' validate={validateEmail}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} type="email" placeholder='Ingresá tu email' focusBorderColor={colorPalette.light.terciary} />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='message' validate={validateMessage}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.message && form.touched.message}>
                  <FormLabel>Tu mensaje</FormLabel>
                  <Textarea {...field} resize="none" placeholder='Escribe tu mensaje aqui' focusBorderColor={colorPalette.light.terciary} />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button mt="10px" justifySelf="center" colorScheme={colorPalette.chakraScheme.button} isLoading={props.isSubmitting} type='submit'>Enviar</Button>
          </StyledForm>
        )}
      </Formik>

    </Stack>
  )
}