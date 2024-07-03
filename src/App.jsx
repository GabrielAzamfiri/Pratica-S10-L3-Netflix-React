import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TvShow from "./components/TvShow";
import CarouselGrid from "./components/CarouselGrid";
import MyFooter from "./components/MyFooter";
import MyProfile from "./components/MyProfile";
import MySettingPage from "./components/MySettingPage";
import { Component } from "react";
import SimpleSlider from "./components/SimpleSlider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheShow from "./components/TheShow";
import DettagliFilm from "./components/DettagliFilm";

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <TopBar/>
          <Routes>
            <Route
              path="/"
              element={
                <main className="container-fluid container-lg my-5" >
                  <TvShow />
                  <div className="my4 ">
                    <div className="my-5">
                      <CarouselGrid film="one piece" carouselTitle="Best Anime" />
                      <CarouselGrid film="naruto" carouselTitle="Best anime until Shippuden" />
                      <CarouselGrid film="transformers" carouselTitle="Tranding Last Week" />
                      <CarouselGrid film="Harry Potter" carouselTitle="Watch It Again" />
                      <SimpleSlider film="pokemon" carouselTitle="Gotta Catch 'Em All" />
                    </div>
                  </div>
                </main>
              }
            />
            <Route path="/Profile" element={<MyProfile/>} />
            <Route path="/Settings" element={<MySettingPage/>} />
            <Route path="/TheShow/:nomeFilm" element={<TheShow/>} />
            <Route path="/TheShow/:nomeFilm/:filmId" element={<DettagliFilm/>} />

          </Routes>
        </BrowserRouter>
        <MyFooter />
      </div>
    );
  }
}

export default App;
