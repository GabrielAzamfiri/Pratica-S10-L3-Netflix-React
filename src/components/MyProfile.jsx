import { Component } from "react";
import logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
import { Col, Row } from "react-bootstrap";

class MyProfile extends Component {
  state = {
    checkbox1:false,
    checkbox2:false
  };
  checkCheckbox1 = ()=>{
    this.setState({checkbox1: !this.state.checkbox1});
  }
  checkCheckbox2 = ()=>{
    this.setState({checkbox2: !this.state.checkbox2});
  }
  render() {
    return (
      <div  style={{display: this.props.display}}>
        
        <Row className="justify-content-center">
          <Col sm={10} lg={8} xl={6} className="my-5">
            <h1>Edit Profile</h1>
            <hr className="my-4" />
            <Row className="row justify-content-center">
              <Col sm={4} className="mb-5 ">
                <div className="position-relative">
                  <img src={avatar} width="100%" alt="" />
                  <button type="button" className="btn btn-dark position-absolute start-0 bottom-0 mb-2 ms-2 px-1 border border-white rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-pencil" style={{ scale: "0.6" }} viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                  </button>
                </div>
              </Col>
              <Col sm={8} className="text-start">
                <div className="bg-secondary ps-3 text-center">
                  <p className="py-2">Strive Student</p>
                </div>
                <p className="fs-5">Lenguage:</p>
                <div className="row">
                  <div className="col-4">
                    <select className="form-select bg-black border border-white pe-5" aria-label="Default select example">
                      <option selected>Italiano</option>
                      <option value="1">Rumeno</option>
                      <option value="2">Inglese</option>
                      <option value="3">Francese</option>
                      <option value="4">Spagnolo</option>
                    </select>
                  </div>
                </div>
                <hr className="my-4" />
                <p className="fs-5">Maturity Settings:</p>
                <p className="bg-dark p-2 d-inline">ALL MATURITY RATINGS</p>
                <p className="my-3 fs-7">
                  Show title of <span>all maturity retings</span> for this profile.
                </p>
                <button type="button" className="btn btn-outline-light">
                  EDIT
                </button>
                <hr className="my-4" />
                <p className="fs-5">Autoplay controls</p>
                <div className="mb-2">
                  <input type="checkbox" className="btn-check" id="btncheck1" onClick={this.checkCheckbox1} autocomplete="off" />
                  <label className="btn btn-outline-secondary p-1" for="btncheck1">
                    <svg xmlns="http://www.w3.org/2000/svg" id="btncheck1Icon" width="25" height="25" fill="currentColor" style={{opacity: this.state.checkbox1 ? "1" :"0"} } className="bi bi-check-lg " viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </label>
                  <span className="ms-3">Autoplay next episode in a series on all devices.</span>
                </div>
                <div>
                  <input type="checkbox" className="btn-check" id="btncheck2" onClick={this.checkCheckbox2} autocomplete="off" />
                  <label className="btn btn-outline-secondary p-1" for="btncheck2">
                    <svg xmlns="http://www.w3.org/2000/svg" id="btncheck2Icon" width="25" height="25" fill="currentColor" style={{opacity: this.state.checkbox2 ? "1" :"0"} } className="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                  </label>
                  <span className="ms-3">Autoplay previews while browsing on all devices.</span>
                </div>
              </Col>
            </Row>
            <div className="row my-5">
              <div className="btn-group col-3">
                <button type="button" className="btn btn-outline-light">
                  SAVE
                </button>
              </div>
              <div className="btn-group col-4">
                <button type="button" className="btn btn-outline-light">
                  CANCEL
                </button>
              </div>
              <div className="btn-group col-5">
                <button type="button" className="btn btn-outline-light">
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyProfile;
// const btncheck2 = document.querySelector("#btncheck2");
// const btncheck2Icon = document.querySelector("#btncheck2Icon");
// const btncheck1 = document.querySelector("#btncheck1");
// const btncheck1Icon = document.querySelector("#btncheck1Icon");

// //   funzione che al click della checkbox cambia l'opacità del svg interna
// btncheck1.addEventListener("click", () => {
//   btncheck1Icon.classList.toggle("opacity1");
// });
// btncheck2.addEventListener("click", () => {
//   btncheck2Icon.classList.toggle("opacity1");
// });