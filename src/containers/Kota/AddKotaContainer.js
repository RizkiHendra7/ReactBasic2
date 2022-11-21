import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addKota } from "../../actions/kotaAction";
import { BtnBackComponent } from "../../components/buttonComponent/BtnBackComponent";

function AddKotaContainer() {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk event handel submit");
    dispatch(addKota({ nama: name, latitude: latitude, longitude: longitude }));
  };

  // useEffect(() => {
  //   console.log("isian useEffect ", response);
  // }, [response]);

  return (
    <div>
      <h4>Add Kota</h4>
      <BtnBackComponent UrlTarget={"indexKota"}></BtnBackComponent>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          className="form-control "
          type="text"
          name="name"
          placeholder="nama ....."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="form-control "
          type="text"
          name="longitude"
          placeholder="longitude ....."
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
        />
        <input
          className="form-control "
          type="text"
          name="latitude"
          placeholder="latitude ....."
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKotaContainer;
