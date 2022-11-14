import React, { Component } from 'react'
import { Container } from "reactstrap"; 

// ==========================
// Untuk Kebutuhan Data Table
// ==========================
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "../../dataTables/initiateDataTable.js";

//untuk kebutuhan search dataTable
const tableData = {
  columns,
  data,
};

export default class IndexFilmContainer extends Component {
  render() {
    return (
        <Container>
            <DataTableExtensions {...tableData}>
              <DataTable columns={columns} data={data} pagination />
            </DataTableExtensions>
          </Container>  
    )
  }
}
