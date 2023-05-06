import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export const Breadcrum = (props) => {
  const {sections} = props;
  return (
    <>
      <Breadcrumb justifySelf="start" ml="20px" my="20px" spacing='8px' fontSize={{base:"xs", sm:"sm"}} separator={<ChevronRightIcon color='gray.500' />}>
        {sections?.map(section => {
          return (
            <BreadcrumbItem key={section.name}>
              <BreadcrumbLink as={Link} to={section.page} state={section.state||{}} fontSize={{base:"xs", sm:"sm"}} >{section.name}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </>
  )
}

