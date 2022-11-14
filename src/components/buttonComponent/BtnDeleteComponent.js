import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "reactstrap";

export const BtnDeleteComponent = () => {
  return (
    <Button color="danger" className="mx-1">
      <FontAwesomeIcon icon={faTrash} /> Delete
    </Button>
  );
};
