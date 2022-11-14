import React, { Component } from "react";
import { Container } from "reactstrap";
import { BtnBackComponent } from "../../components/buttonComponent/BtnBackComponent";

export default class ViewFilmContainer extends Component {
  render() {
    return (
      <Container>
        <BtnBackComponent UrlTarget="index" />
        ViewFilmContainer
      </Container>
    );
  }
}
