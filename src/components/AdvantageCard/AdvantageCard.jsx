import React from 'react';
import { Card, CardHeader, Heading, Text, CardFooter, Button, CardBody} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { colorPalette } from '../../styles/colors';

export const AdvantageCard = (props) => {
  const navigate = useNavigate()
  const {title, description, btn, redirectTo, btnTitle, btnFunction} = props;
  return (
    <>
      <Card maxW="250px">
        <CardHeader p="15px">
          <Heading size={{base:"sm",sm:'sm'}}>{title}</Heading>
        </CardHeader>
        <CardBody p="15px">
          <Text fontSize={{base:"sm",sm:'sm'}}>{description}</Text>
        </CardBody>
        {
        btn &&
        <CardFooter p="15px">
          <Button size="sm" onClick={()=>{btnFunction(); navigate(redirectTo) }} variant='solid' colorScheme={colorPalette.chakraScheme.button}>{btnTitle}</Button>
        </CardFooter>
        }

      </Card>
    </>
  )
}

