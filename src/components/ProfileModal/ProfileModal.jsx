import React from 'react';
import { useSelector } from 'react-redux';
import { Drawer, DrawerOverlay, DrawerBody, DrawerHeader, DrawerFooter, Button, DrawerCloseButton, DrawerContent, Text, Avatar, Divider } from '@chakra-ui/react';
import {auth} from '../../firebase/firebase-utils.js';
import { useNavigate } from 'react-router-dom';

export const ProfileModal = (props) => {

  //desestructuro props
  const { isOpen, onClose, btnRef} = props;

  const {currentUser} = useSelector(state => state.user);
  const navigate = useNavigate();

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent top="80px !important">
          <DrawerCloseButton />
          <DrawerHeader>Mi cuenta</DrawerHeader>

          {
            currentUser &&
            <DrawerBody>
            <Avatar name="img-profile" src={currentUser.photoURL} />
            <Text mt="10px">{currentUser.displayName}</Text>
            <Text mt="10px">{currentUser.email}</Text>
            <Divider mt="10px" />
            <Text cursor="pointer" mt="10px" onClick={()=>{navigate("/pedidos");onClose();}} >Mis pedidos</Text>
            <Divider mt="10px" />
            <Text cursor="pointer" mt="10px" onClick={()=>{auth.signOut().then(onClose())}}>Cerrar sesión</Text>
          </DrawerBody>}

          <DrawerFooter>
            {/*<Button mr={3} colorScheme={colorPalette.chakraScheme.button}>Guardar</Button>*/}
            <Button variant='outline' onClick={onClose}>Salir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

