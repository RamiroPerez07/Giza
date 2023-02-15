import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

export const InfoAlert = (props) => {
  return (
    <Alert alignSelf="start" status='info' w="auto">
    <AlertIcon />
      {props.text}
    </Alert>
  )
}

