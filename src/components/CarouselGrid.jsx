import { Component } from "react";

import MyCarouselItem from "./MyCarouselItem";

class CarouselGrid extends Component {
  render() {
    return (
      
      <div>

        <h3 className="my-5 text-start">{this.props.carouselTitle}</h3>
       
          <MyCarouselItem film={this.props.film} indexCol="5" />
      </div>
      
          
    
      
    );
  }
}

export default CarouselGrid;
