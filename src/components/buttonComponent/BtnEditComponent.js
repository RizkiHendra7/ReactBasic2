import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";

export const BtnEditComponent = (props) => {
  return (
    <Button color="warning" className="mx-1">
      <FontAwesomeIcon icon={faEdit} /> Edit
    </Button>
  );
};
