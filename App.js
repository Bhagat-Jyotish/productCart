import React from "react";
import "./App.css";
import ProductCard from "./component/ProductCard";
const App = () => {
  return (
    <React.Fragment>
      <ProductCard productName="realme C53(Gold, 128 GB)" imageUrl="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70"
       actualPrice="13999" updatePrice="9499" />
    </React.Fragment>
  )
}
export default App;
