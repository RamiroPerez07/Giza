import React from 'react';
import { LandingSection } from '../LandingSection/LandingSection.jsx';
import { ProductContainer } from '../ProductContainer/ProductContainer.jsx';
import { ProductSearch } from '../ProductSearch/ProductSearch.jsx';

export const ProductCatalog = () => {
  return (
    <>
      <LandingSection>
        <ProductSearch />
        <ProductContainer />
      </LandingSection>
    </>
  )
}

