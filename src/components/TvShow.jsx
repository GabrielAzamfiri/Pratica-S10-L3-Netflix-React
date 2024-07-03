import { Component } from "react";

class TvShow extends Component{
    render() {
        return (
            <div className="d-flex text-white align-items-center column-gap-5" data-bs-theme="dark">
        <h1>TV Shows</h1>

        <div>
          <select className="form-select bg-black border border-grigio-strano pe-5" aria-label="Default select example">
            <option defaultValue>Genres</option>
            <option value="1">Amore</option>
            <option value="2">Anime</option>
            <option value="3">Azione</option>
            <option value="4">Horror</option>
          </select>
        </div>
        <div className="d-flex ms-auto">
          <div className="border border-grigio-strano px-3 py-1 btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-menu-button-fill" viewBox="0 0 16 16">
              <path
                d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
          <div className="border border-grigio-strano px-3 py-1 btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-grid-fill" viewBox="0 0 16 16">
              <path
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"
              />
            </svg>
          </div>
        </div>
      </div>
        )
    }
}

export default TvShow;