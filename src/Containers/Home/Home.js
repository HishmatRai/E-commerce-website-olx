import React from 'react';
import {Link} from 'react-router-dom'
import RecipeReviewCard from './../../Components/Card'
import CarouselPage from "./../../Components/Slider"
import PrimarySearchAppBar from "./../../Components/AppBar"

import TopImg from "./../../Components/TopImg"
import SmallOutlinedChips from './../../Components/Chips'
import { getThemeProps } from '@material-ui/styles';
import {firebaseApp} from "./../../Confic/Database/Firebase";

class Home extends React.Component{
  constructor(){
    super();
    this.state={
        count:0,
        myCart:[],
        products :[]
    }
  }
  componentDidMount(){
    if(JSON.parse(localStorage.getItem("myCart"))){
        this.setState({
            myCart:JSON.parse(localStorage.getItem("myCart")),
        })
    }
    let {products} = this.state
    firebaseApp.firestore().collection("Products").get()
    .then(data => {
        data.forEach(doc => {
            let getData = doc.data()
            products.push(getData)
            this.setState({
                products:products
            })
        })
        
    })
}

  render(){
    let{products,myCart} = this.state;

    return (
      <div >
            <PrimarySearchAppBar myCart={myCart}/>
      <br />

          <CarouselPage />
          < br />
          <TopImg />
          <br />
       <SmallOutlinedChips  />
       <br />
{products.map((val,i)=>
         <RecipeReviewCard 
         onClick={this.props.history}
         title={val.productname}
         description ={val.productdescription}
         price={ val.productprice}
         image={val.productimage}
         
         />
         )}
          {/* <RecipeReviewCard 
         onClick={this.props.history}
        
         title="Apple iPhone 6s"
         description ="A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminium .. "
         price= { 54500}
         image="http://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_6s/Rose_Gold/desktop/1.jpg"
         
         />
     
    
          <RecipeReviewCard 
         onClick={this.props.history}
         
         title="Apple MacBook Pro 15.4"
         description ="Apple MacBook Pro® 15.4 Retina Core i5 128GB SSD Laptop with Software "
         price={1,54500}
         image="https://i02.hsncdn.com/is/image/HomeShoppingNetwork/prodgrid230/apple-macbook-pro-154-core-i7-16gb-ram256gb-ssd-laptop--d-20190604173501897~9154029w_YWS.jpg"
         
         />
     
     <RecipeReviewCard 
         onClick={this.props.history}
         
         title="Sandon Storage Bed"
         description ="A bed is more than just a place to sleep. It's where late night reads, movie  "
         price={44500}
         image="https://www.ulcdn.net/images/products/214525/product/Sandon_LP.jpg?1538751336"
         
         />

<RecipeReviewCard 
         onClick={this.props.history}
         
         title="Clic Blue Reading Glasses"
         description ="Unique patented neodymium magnetic system allows the glasses . "
         price={ 34000}
         image="https://cdn11.bigcommerce.com/s-c8dea/images/stencil/500x659/products/37/5486/Clic-BLU-OPEN__04923.1542731809.JPG?c=2"
         
         />


<RecipeReviewCard 
         onClick={this.props.history}
         
         title="Navy Blue Asymmetrical Sherwani"
         description ="Navy blue readymade indo western asymmetric sherwani in art silk ."
         price={25000}
         image="https://assets.panashindia.com/media/catalog/product/cache/1/small_image/262x377/9df78eab33525d08d6e5fb8d27136e95/2/0/204mw14-1010.jpg"
         
         />
     

     <RecipeReviewCard 
         onClick={this.props.history}
         
         title="Samsung Galaxy A10"
         description ="Introducing the new Galaxy A10 made specifically for you. It’s built .."
         price={ 65999}
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCyxq3fbrl6kXv87v2MeRSk7a4nQFOOoBQn9EC3j7SLIAaC0oJw"
         
         />


<RecipeReviewCard 
         onClick={this.props.history}
         
         title="HP 17-ca0003na HD Laptop"
         description ="Designed for long-lasting performance, this stylishly  HP 9 cm (17.3) laptop. "
         price={32999}
         image="https://store.hp.com/UKStore/Html/Merch/Images/c05975360_1750x1285.jpg"
         
         />
     

     <RecipeReviewCard 
         onClick={this.props.history}
         
         title="Bluetooth Smart Watch DZ09 "
         description ="This Watch Is Bluetooth 3.0.  Support Android 4.3 And Up Smart Phones. "
         price={ 2999}
         image="https://i5.walmartimages.com/asr/814a95c9-d8fa-4aa5-adac-10c270f5ac9c_1.0b064cbaa08b39500fb4ac8f50af5bdd.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
         
         />


<RecipeReviewCard 
         onClick={this.props.history}                                                                                                                                                                                                                                                                                                                                                                      
         
         title="Computer Table "
         description ="Modern person staff workstation desk MDF office computer table "
         price={ 29999}
         image="https://sc02.alicdn.com/kf/Ha934f4f9bb14415899500767670be68a8/Modern-minimalist-3-person-L-shaped-staff.jpg_350x350.jpg"
         
         />



<RecipeReviewCard 
         onClick={this.props.history}
         
         title="LADIES CAT EYE GLASSE "
         description ="LADIES CAT EYE GLASSES FRAMES FOR WOMEN METAL FRAME UV400 ."
         price={9000}
         image="https://cdn.shopify.com/s/files/1/0158/1996/4480/products/product-image-804281418_800x.jpg?v=1551957224"
         
         />

                                                         

<RecipeReviewCard 
         onClick={this.props.history}
         
         title="Party Wear Suit "
         description ="Navy party                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                readymade indo western asymmetric sherwani in art silk .."
         price={9000}
         image="https://i.pinimg.com/564x/7d/8b/77/7d8b77cf59a7b7ad4d6e43b8dbaa1d40.jpg"
         
         /> */}
         
    </div>


)
}
}

export default Home;