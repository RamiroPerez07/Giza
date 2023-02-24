import React from 'react';
import { useSelector } from 'react-redux';
import { Drawer, DrawerOverlay, DrawerBody, DrawerHeader, DrawerFooter, Button, DrawerCloseButton, DrawerContent, Text, Avatar } from '@chakra-ui/react';
import { colorPalette } from '../../styles/colors';

export const ProfileModal = (props) => {

  //desestructuro props
  const { isOpen, onClose, btnRef} = props;

  const {currentUser} = useSelector(state => state.user);
  console.log(currentUser)

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent top="80px !important">
          <DrawerCloseButton />
          <DrawerHeader>Mi cuenta</DrawerHeader>

          <DrawerBody>
            <Avatar name="img-profile" src={currentUser.photoURL} alignSelf="center" />
            <Text mt="10px">{currentUser.displayName}</Text>
            <Text mt="10px">{currentUser.email}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} colorScheme={colorPalette.chakraScheme.button}>Guardar</Button>
            <Button variant='outline' onClick={onClose}>Salir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

