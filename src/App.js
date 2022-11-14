import React, { Component } from "react";
import { Container } from "reactstrap";
// ================
// Custom Component
// ================
import CarouselComponent from "./components/CarouselComponent";
import NavbarComponent from "./components/NavbarComponent";
// ==========================
// Untuk Kebutuhan Data Table
// ==========================
import DataTable from "react-data-table-component";
import { columns, data } from "./DummyData/initiateDataTable.js";

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
        <Container>
          <CarouselComponent />
        </Container>
        <Container>
          <DataTable columns={columns} data={data} pagination />
        </Container>
      </div>
    );
  }
}
