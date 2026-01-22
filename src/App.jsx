import { useState } from 'react'

import './App.css'
import Navigation from './Navigation/Navnew';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';

import Sidebar from './Sidebar/Sidebar';

//databases
import products from "./db/data"

import Card  from './Components/Card';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  // Input Filter
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
     setQuery(e.target.value);
  }
  ////input filter
  const filteredItem = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))
  

  //radio-filter

  const handleChange = e => {
     setSelectedCategory(e.target.value)
  }

  /// buttons filter

  const handleClick = e => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query) {
  let filteredProducts = products;

  // Input filter
  if (query) {
    filteredProducts = filteredProducts.filter(product =>
      product.title
        .toLocaleLowerCase()
        .indexOf(query.toLocaleLowerCase()) !== -1
    );
  }

  // Category / button filter
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }

  return filteredProducts.map(
    ({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={title}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    )
  );
}
const result = filteredData(products, selectedCategory, query)


    return (
      <div>
        
        <Sidebar handleChange = {handleChange} />
        <Navigation query = {query} handleInputChange ={handleInputChange}/> 
        <Recommended handleClick = {handleClick}/> 
        <Products result ={result}/>

        
      </div>
    )
}

export default App;