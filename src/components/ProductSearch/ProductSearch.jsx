import React from 'react';
import { Box, Stack, InputLeftElement, Input, InputGroup, Button } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { colorPalette } from '../../styles/colors';
import {FaFilter} from 'react-icons/fa';

export const ProductSearch = () => {
  return (
    <Box w="95%" maxW="500px" mb="25px">
      <Stack direction="row" spacing={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon aria-label="Buscar producto" />}
            color={colorPalette.chakraScheme.button}
          />
          <Input type='text' placeholder='Buscar producto' focusBorderColor={colorPalette.light.terciary} />
        </InputGroup>
        <Button leftIcon={<FaFilter />} variant='outline'>Filtro</Button>
      </Stack>
    </Box>
  )
}

