import React, { Component } from "react";
import { Container } from "reactstrap";
// ================
// Custom Component
// ================
import CarouselComponent from "./components/CarouselComponent";
import NavbarComponent from "./components/NavbarComponent";
// ==========================
// REACT ROUTER DOM Dan routing
// ==========================
import LandingPageContainer from "./containers/LandingPage/LandingPage.js";
import IndexFilmContainer from "./containers/Film/IndexFilmContainer.js";
import EditContainer from "./containers/Film/EditFilmContainer.js";
import ViewContainer from "./containers/Film/ViewFilmContainer.js";
import CreateContainer from "./containers/Film/CreateFilmContainer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    judul: "Belajar React.",
    developBy: "Rizki Hendra P",
  };

  render() {
    return (
      <div>
        <NavbarComponent
          judulPage={this.state.judul}
          developBy={this.state.developBy}
        />

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Container>
                  <CarouselComponent />
                </Container>
              }
            />
            <Route path="/index" element={<IndexFilmContainer />} />
            <Route path="/create" element={<CreateContainer />} />
            <Route path="/edit/:id" element={<EditContainer />} />
            <Route path="/view/:id" element={<ViewContainer />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
