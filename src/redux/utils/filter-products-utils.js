const filterProductsByCategory = (products, category) => {
  return category !== "" ? products.filter(product => product.category === category) : products;
}

const filterProductsBetweenTwoPrices = (products, prices) => {
  return prices !== ["",""] ? products.filter(product => product.price >= prices[0] && product.price <= prices[1]) : products;
} 

const filterProductsByShipping = (products, shipping) => {
  return shipping !== "" ? products.filter(product => product.freeShipping.toString() === shipping) : products;
}


const filterProductsByName = (products, name) => {
  return name !== "" ? products.filter(product => product.name.toString().trim().toLowerCase().includes(name.toString().trim().toLowerCase())) : products;
}


export const filterProducts = (products, filterParameters) => {
  let listOfProducts = [...products];
  listOfProducts = filterProductsByName(listOfProducts,filterParameters.name);
  listOfProducts = filterProductsByCategory(listOfProducts, filterParameters.category);
  listOfProducts = filterProductsBetweenTwoPrices(listOfProducts, filterParameters.price);
  listOfProducts = filterProductsByShipping(listOfProducts, filterParameters.shipping);
  return listOfProducts;
}

export const isFilterActive = (initialFilterParameters, currentFilterParameters) => {
  console.log("initial",initialFilterParameters,"current", currentFilterParameters);
  console.log("test-equal",(
    initialFilterParameters.category !== currentFilterParameters.category ||
    initialFilterParameters.shipping !== currentFilterParameters.shipping ||
    initialFilterParameters.price !== currentFilterParameters.price
  ))
  return (
    initialFilterParameters.category !== currentFilterParameters.category ||
    initialFilterParameters.shipping !== currentFilterParameters.shipping ||
    initialFilterParameters.price !== currentFilterParameters.price
  );
}