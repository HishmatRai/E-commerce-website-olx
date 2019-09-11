import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src= "https://www.giftsenterprise.com/image/catalog/banner1.png" width="200px" height="500px"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.pakstyle.pk/images/slider/bridaldresses2.jpg" width="200px" height="500px"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://www.mctwatches.com/sites/default/files/slider/MCTBanner-EShop.jpg" width="200px" height="500px"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
   
  );
}

export default CarouselPage;