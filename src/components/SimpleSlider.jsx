import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends Component {
  state = {
    films: [],
    alert: false,
  };
  settings = {
    dots: true,
    infinite: true,
  
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    pauseOnFocus: true,
    autoplaySpeed: 4000,
    
 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          speed: 500,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          infinite: true,
          dots: true
        }
      }
      
      ]
  };
  fetchGetFilms = async () => {
    fetch("http://www.omdbapi.com/?apikey=9c68448e&s=" + this.props.film)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dato");
        }
      })
      .then(objResp => {
        this.setState({ films: objResp.Search });
      })
      .catch(err => {
        this.setState({ alert: true });
        alert(err.message);
      });
  };

  componentDidMount() {
    this.fetchGetFilms();
  }

  render() {
    return (
      this.state.films.length > 0 && (
        <>
        <h3 className="my-5 text-start">{this.props.carouselTitle}</h3>
        <Slider {...this.settings}  >
          {this.state.films.map((f) =>

          <a href="#" className="px-2">
            <img src={f.Poster} alt="immagine film" class="w-100" height={320} />
          </a>
         
          )}
        </Slider>
        </>
      )
    );
  }
}

export default SimpleSlider;
