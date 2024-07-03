import { Component } from "react";
import { Alert, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class MyCarouselItem extends Component {
  state = {
    films: [],
    alert: false,
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
  arrCols = [];
  creaCol = () => {
    this.state.films.map(film => {
      return (
        <Col key={film.imdbID}>
          <Link to={"/TheShow/" + film.Title + "/" + film.imdbID}>
            <img src={film.Poster} alt="immagine film" className="w-100" height={300} />
          </Link>
        </Col>
      );
    });
  };
  render() {
    return (
      this.state.films.length > 0 && (
        <>
          {this.state.alert && (
            <Alert variant="danger" onClose={() => this.setState({ alert: false })} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          )}
          <Carousel>
            <Carousel.Item>
              <Row className="gx-3 gy-2 ">
                {this.state.films.map((film, index) => {
                  return (
                    <Col key={film.imdbID} className={index>4&& "d-none"}>
                      <Link to={"/TheShow/" + film.Title + "/" + film.imdbID}>
                        <img src={film.Poster} alt="immagine film" className="w-100" height={300} />
                      </Link>
                    </Col>
                  );
                })}
                {/* <Col>
                <Link to={"/TheShow/" + this.state.films[0].Title + "/" + this.state.films[0].imdbID}>
                <img src={this.state.films[0].Poster} alt="immagine film" className="w-100" height={300} />
                </Link>
                  
                </Col>
                <Col>
                  <a href="#">
                    <img src={this.state.films[1].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col className=" d-none d-sm-inline">
                  <a href="#">
                    <img src={this.state.films[2].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col className=" d-none d-md-inline">
                  <a href="#">
                    <img src={this.state.films[3].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col className=" d-none d-lg-inline">
                  <a href="#">
                    <img src={this.state.films[4].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col> */}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="gx-3 gy-2">
              {this.state.films.map((film, index) => {
                  return (
                    <Col key={film.imdbID} className={index<5&& "d-none"}>
                      <Link to={"/TheShow/" + film.Title + "/" + film.imdbID}>
                        <img src={film.Poster} alt="immagine film" className="w-100" height={300} />
                      </Link>
                    </Col>
                  );
                })}
                {/* <Col className=" d-none d-lg-inline">
                  <a href="#">
                    <img src={this.state.films[5].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>

                <Col className=" d-none d-md-inline">
                  <a href="#">
                    <img src={this.state.films[6].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col className=" d-none d-sm-inline">
                  <a href="#">
                    <img src={this.state.films[7].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <img src={this.state.films[8].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <img src={this.state.films[9].Poster} alt="immagine film" className="w-100" height={300} />
                  </a>
                </Col> */}
              </Row>
            </Carousel.Item>
          </Carousel>
        </>
      )
      // console.log(this.state.films[0].Poster)
    );
  }
}

export default MyCarouselItem;
