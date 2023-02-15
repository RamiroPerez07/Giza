import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

export const InfoAlert = (props) => {
  return (
    <Alert status='info' w="auto">
    <AlertIcon />
      {props.text}
    </Alert>
  )
}

