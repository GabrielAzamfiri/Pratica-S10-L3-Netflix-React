import { useEffect, useState } from "react";
import { Alert, Badge, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

// http://www.omdbapi.com/?apikey=9c68448e&i=idFilm
// https://striveschool-api.herokuapp.com/api/comments/:elementId
const DettagliFilm = () => {
  const [film, setFilm] = useState({});

  const [comments, setComments] = useState([]);

  const params = useParams();
  const filmId = params.filmId;

  const fetchGetFilms = async () => {
    fetch("http://www.omdbapi.com/?apikey=9c68448e&i=" + filmId)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dato");
        }
      })
      .then(objResp => {
        setFilm(objResp);
        fetchGetComments();
      })
      .catch(err => {
        alert(err.message);
      });
  };
  const fetchGetComments = async () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + filmId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNWI0NDNhMzhjYjAwMTVmNjNjZjIiLCJpYXQiOjE3MTk0OTEzOTYsImV4cCI6MTcyMDcwMDk5Nn0.LDXvAzpXS0c_jlmLQEYfFPW6AtZZGHZZ5chs8xkBFzI",
      },
    })
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del dato");
        }
      })
      .then(arrResp => {
        setComments(arrResp);
       
        
      })
      .catch(err => {
        alert(err.message);
      });
  };
  useEffect(() => {
    fetchGetFilms();
  
    

    
   console.log("component updated")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmId]);


  useEffect(() => {
    if(comments.length > 0){

        fetchGetComments();
        console.log("comments updated")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Container>
      <Row className="align-item-center">
        <Col>
          <img src={film.Poster} alt="poster film" className="w-75" />
        </Col>
        <Col>
          <h1 className="display-1">{film.Title}</h1>
          <p>Released date: {film.Released}</p>
          <div className="text-start mt-5">
            <p className="mb-4 fs-5"><strong>Genre:</strong> {film.Genre}</p>
            <p className="fs-5">
              <strong>Description: </strong> {film.Plot}
            </p>
          </div>
          <div>
            <h4 className="my-4 text-start">Comments</h4>
            {comments.length > 0 ? (
              comments.map(comment => {
                return(
                <div key={comment._id} className="border p-3 mb-3">
                  <div className="fs-5 d-flex justify-content-between">
                    <span>
                      <strong>Comment: </strong> {comment.comment}
                    </span>{" "}
                    <Badge> {comment.rate}</Badge>
                  </div>
                </div>
                )
              })
            ) : (
              <Alert key="info" variant="info">
                Non ci sono commenti per questo film!
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DettagliFilm;
