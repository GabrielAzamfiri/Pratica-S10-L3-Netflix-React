import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const TheShow = () => {
  const [films, setFilms] = useState([]);

  const params = useParams();
  const nomeFilm = params.nomeFilm;
  const fetchGetFilms = async () => {
    fetch("http://www.omdbapi.com/?apikey=9c68448e&s=" + nomeFilm)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dato");
        }
      })
      .then(objResp => {
        setFilms(objResp.Search);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  useEffect(() => {
    fetchGetFilms();
  }, []);
  return (
    <Container>
      <Row className="mt-5">
        {films &&
          films.map(film => (
            <Col xs={3} key={film.imdbID} className="mb-4">
              <Card>
                <Link to={"/TheShow/" + nomeFilm + "/" + film.imdbID}>
                  <Card.Img variant="top" src={film.Poster} alt={film.Title} className="w-100" height={360} />
                </Link>
                <Card.Body>
                  <Card.Title className="text-truncate">{film.Title}</Card.Title>
                  <Card.Text>{film.Year}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        {films.length === 0 && <p>Nessun film trovato</p>}
      </Row>
    </Container>
  );
};
export default TheShow;
