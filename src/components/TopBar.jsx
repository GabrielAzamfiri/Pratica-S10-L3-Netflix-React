import { Component } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";
class TopBar extends Component {
  handleSelect = eventKey => {
    switch (eventKey) {
      case "home":
        this.props.homePage();
        break;
      case "profile":
        this.props.profilePage();
        break;
      case "setting":
        this.props.settingPage();
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <header style={{ background: "linear-gradient(180deg, rgba(1, 1, 10, 1) 0%, rgba(26, 29, 32, 1) 64%)" }}>
        <Navbar expand="lg">
          <Container className="container-fluid container-lg">
            <Navbar.Brand href="home">
              <img src={logo} alt="netflix_logo" width="120px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto my-2 my-lg-0">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link1">TV Shows</Nav.Link>
                <Nav.Link href="#link2">Movies</Nav.Link>
                <Nav.Link href="#link3">Recently Added</Nav.Link>
                <Nav.Link href="#link4">My List</Nav.Link>
              </Nav>
              <Nav className="navbar-nav my-2 my-lg-0 align-items-center column-gap-3 flex-row justify-content-end" onSelect={this.handleSelect}>
                <Nav.Link href="#link5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#e3e3e3" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Nav.Link>
                <Nav.Link href="#link6">KIDS</Nav.Link>
                <Nav.Link href="#link7" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#e3e3e3" className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                  </svg>
                </Nav.Link>
                <Nav.Link href="#profile" eventKey="profile" onClick={this.handleSelect}>
                  <img src={avatar} width="50px" alt="avatar" />
                </Nav.Link>
                <NavDropdown title="" id="basic-nav-dropdown" align="end">
                  <NavDropdown.Item eventKey="home" href="#home">
                    Home
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="profile" href="#profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="setting" href="#setting">
                    Settings
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default TopBar;
