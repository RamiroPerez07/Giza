const filterProductsByCategory = (products, category) => {
  return category !== "" ? products.filter(product => product.category === category) : products;
};

const filterProductsBetweenTwoPrices = (products, prices) => {
  return prices !== ["",""] ? products.filter(product => product.price >= prices[0] && product.price <= prices[1]) : products;
};

const filterProductsByShipping = (products, shipping) => {
  return shipping !== "" ? products.filter(product => product.freeShipping.toString() === shipping) : products;
};

const filterProductsByName = (products, name) => {
  return name !== "" ? products.filter(product => product.name.toString().trim().toLowerCase().includes(name.toString().trim().toLowerCase())) : products;
};

const sortProductsByName = (products, criterion) => {
  switch(criterion){
    case "name-undefined":
      return products;
    case "name-az":
      return products.sort((a,b) => a.name.localeCompare(b.name));
    case "name-za":
      return products.sort((a,b) => b.name.localeCompare(a.name));
    default:
      return products;
  } 
};

const sortProductsByPrice = (products, criterion) => {
  switch(criterion){
    case "price-undefined":
      return products;
    case "price-19":
      return products.sort((a,b)=>a.price - b.price);
    case "price-91":
      return products.sort((a,b) =>b.price - a.price);
    default:
      return products;
  }
}


export const filterProducts = (products, filterParameters) => {
  let listOfProducts = [...products];
  listOfProducts = filterProductsByName(listOfProducts,filterParameters.name);
  listOfProducts = filterProductsByCategory(listOfProducts, filterParameters.category);
  listOfProducts = filterProductsBetweenTwoPrices(listOfProducts, filterParameters.price);
  listOfProducts = filterProductsByShipping(listOfProducts, filterParameters.shipping);
  listOfProducts = sortProductsByName(listOfProducts, filterParameters.sortByName);
  listOfProducts = sortProductsByPrice(listOfProducts, filterParameters.sortByPrice);
  return listOfProducts;
}

export const isFilterActive = (initialFilterParameters, currentFilterParameters) => {
  console.log("initial",initialFilterParameters,"current", currentFilterParameters);
  console.log("test-equal",[
    !(initialFilterParameters.category === currentFilterParameters.category) ,
    !(initialFilterParameters.shipping === currentFilterParameters.shipping) ,
    !(initialFilterParameters.price[0] === currentFilterParameters.price[0]) ,
    !(initialFilterParameters.price[1] === currentFilterParameters.price[1])
  ])
  return (
    !(initialFilterParameters.category === currentFilterParameters.category) ||
    !(initialFilterParameters.shipping === currentFilterParameters.shipping) ||
    !(initialFilterParameters.price[0] === currentFilterParameters.price[0]) ||
    !(initialFilterParameters.price[1] === currentFilterParameters.price[1])
  );
}

export const isSortActive = (initialFilterParameters, currentFilterParameters) => {
  console.log("initial",initialFilterParameters,"current", currentFilterParameters);
  console.log("test-equal",[
    !(initialFilterParameters.sortByName === currentFilterParameters.sortByName),
    !(initialFilterParameters.sortByPrice === currentFilterParameters.sortByPrice)
  ])
  return (
    !(initialFilterParameters.sortByName === currentFilterParameters.sortByName) ||
    !(initialFilterParameters.sortByPrice === currentFilterParameters.sortByPrice)
  );
}