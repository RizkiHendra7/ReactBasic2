// ==========================
// Untuk Kebutuhan Data Table
// ==========================
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../../dataTables/initiateDataTableKota";

// ==========================
// Untuk Kebutuhan REDUX
// ==========================
import { useDispatch, useSelector } from "react-redux";
import { getListKota } from "../../actions/getDataKota";

import React, { useEffect } from "react";
import { Container } from "reactstrap";

function IndexKotaContainer() {
  //[1] use effect adalah fungsi yang berjalan selepas
  //document dibuat
  //dispatch triggger untuk hit ke axios nantinya bakal
  //hit ke reducer
  const dispatch = useDispatch();

  useEffect(() => {
    //get data
    console.log("1.hit dari container use effect");
    dispatch(getListKota());
  }, [dispatch]);

  //[2] use selector berguna untuk mengambil data dari store redux
  // state.kotareducer kenapa kotareducer karena dia di deklarsai dengan nama
  //kotareducer bisa di cek di folder reducers/index.js kita namakan import nya kota reducer
  const { data, loading, errorMessage } = useSelector(
    (state) => state.kotaReducer
  );

  //[3] untuk kebutuhan sort data table
  const tableData = {
    columns,
    data,
  };

  return (
    <Container>
      <h1>hello</h1>

      {/* [4] berikan validasi jika error atau tidak  */}
      {data ? (
        <DataTableExtensions {...tableData}>
          <DataTable columns={columns} data={data} pagination />
        </DataTableExtensions>
      ) : loading ? (
        <p> Loading . . . . </p>
      ) : (
        <p>{errorMessage}</p>
      )}
    </Container>
  );
}

export default IndexKotaContainer;
