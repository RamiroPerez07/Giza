export const validateName = (value)  => {
  let error;
  if (!value) {
    error = 'El nombre es requerido';
  }
  return error;
}

export const validateSurname = (value)  => {
  let error;
  if (!value) {
    error = 'El apellido es requerido';
  }
  return error;
}

export const validateTel = (value)  => {
  const regex = /^[\s()+-]*([0-9][\s()+-]*){8,20}$/
  let error;
  if (!value) {
    error = 'El teléfono es requerido';
  }else if(!regex.test(value)){
    error = 'El telefono no es válido';
  }
  return error;
}

export const validateEmail = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let error;
  if (!value) {
    error = 'El email es requerido';
  }else if(!regex.test(value)){
    error = 'El email no es válido';
  }
  return error;
}

export const validateMessage = (value) => {
  let error;
  if (!value) {
    error = "El mensaje es requerido";
  }else if(value.length >= 255){
    error = "Solo se admiten hasta 255 caracteres";
  }
  return error;
}

export const validateLocation = (value) => {
  let error;
  if (!value) {
    error = "La localidad es requerida";
  }
  return error;
}

export const validateAddress = (value) => {
  let error;
  if (!value) {
    error = "La dirección es requerida";
  }
  return error;
}

export const validateUsername = (value) => {
  let error;
  if (!value) {
    error= "El nombre de usuario es requerido"
  }
  return error;
}

export const validatePassword = (value) => {
  let error;
  if (!value) {
    error= "La contraseña es requerida"
  }
  return error;
}

const regexCUIT = /^d{2}-d{8}-d{1}$/
const regexDNI = /^d{1,2}.?d{3}.?d{3}$/