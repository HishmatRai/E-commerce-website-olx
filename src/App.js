import React from 'react';
import MultiCarouselPage from "./Components/TitleSlide"
import Footer from "./Components/Footer"
import ProductCard from "./Components/ProductCard"
// import SingleProduct from './Components/SingleProduct'
import BasicRouter from './Confic/Router/Router'
function App() {
  return (
    <div >
     
      < BasicRouter/>
  
      {/* <MultiCarouselPage /> */}
      
       <br />
  
       {/* <ProductCard /> */}
  
       < br />
       {/* < SingleProduct /> */}
    
      <Footer />
    </div>
  );
}

export default App;
