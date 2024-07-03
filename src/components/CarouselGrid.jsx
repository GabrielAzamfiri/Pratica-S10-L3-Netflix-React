import { Component } from "react";

import MyCarouselItem from "./MyCarouselItem";
import { Link } from "react-router-dom";

class CarouselGrid extends Component {
  render() {
    return (
      
      <div>
   
        <Link to={"/TheShow/" + this.props.film} className="link-light link-offset-0 link-underline-opacity-0 link-underline-opacity-100-hover display-5 d-flex justify-item-start mb-3 mt-5">
        {this.props.carouselTitle}
        </Link> 
       
          <MyCarouselItem film={this.props.film}  />
      </div>
      
          
    
      
    );
  }
}

export default CarouselGrid;
