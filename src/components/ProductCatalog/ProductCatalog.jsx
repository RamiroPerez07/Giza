import React from 'react';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { ProductContainer } from '../ProductContainer/ProductContainer.jsx';
import { ProductSearch } from '../ProductSearch/ProductSearch.jsx';
import { Breadcrum } from '../Breadcrum/Breadcrum.jsx';


export const ProductCatalog = () => {
  const sections = [
    {
      name: "Inicio",
      page: "/",
    },
    {
      name: "Productos",
      page: "/productos",
    }
  ]
  return (
    <>
      <LandingSection>
        <Breadcrum sections={sections} />
        <ProductSearch />
        <ProductContainer />
      </LandingSection>
    </>
  )
}

