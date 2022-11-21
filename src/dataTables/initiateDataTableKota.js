import React from "react"; 
import { Link } from "react-router-dom"; 
import { BtnEditComponent } from "../components/buttonComponent/BtnEditComponent";
import { BtnViewComponent } from "../components/buttonComponent/BtnViewComponent";
import { BtnDeleteComponent } from "../components/buttonComponent/BtnDeleteComponent"; 

export const columns = [ 
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "latitude",
      selector: (row) => row.latitude,
      sortable: true 
    },
    {
      name: "longitude",
      selector: (row) => row.longitude,
      sortable: true,
    },
    {
      name: "Action",
      button: true,
      width: "20%",
      cell: (row) => (
        <div>
          <Link to={"/view/" + row.id}>
            <BtnViewComponent></BtnViewComponent>
          </Link>
  
          <Link to={"/edit/" + row.id}>
            <BtnEditComponent></BtnEditComponent>
          </Link>
  
          <Link to={"detail/" + row.id}>
            <BtnDeleteComponent></BtnDeleteComponent>
          </Link>
        </div>
      ),
    },
  ];