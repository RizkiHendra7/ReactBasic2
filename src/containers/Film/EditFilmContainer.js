import React, { Component } from "react";
import { Container } from "reactstrap";
import { BtnBackComponent } from "../../components/buttonComponent/BtnBackComponent";

export default class EditFilmContainer extends Component {
  render() {
    return (
      <Container>
        <BtnBackComponent UrlTarget="index" />
        EditFilmContainer
      </Container>
    );
  }
}
