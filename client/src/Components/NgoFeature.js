//This component displays the food request posted by the restaurant and allows the NGO to either accept or decline the food request.

import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardElement from "./CardElement";
import axios from "axios";
import HomeHeader from "./HomeHeader";
import { useNavigate } from "react-router-dom";
import "../css/CardElement.css";

function NgoFeature() {
  console.log("EHEREREE");
  const navigator = useNavigate();
  const [items, setItems] = useState();

  //Fetching all the food requests posted by the restaurant.
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    } else {
      const getData = async () => {
        const res = await axios.get(
          "https://tiserverb00.herokuapp.com/getItems"
        );
        console.log(res.data);
        const ds = [];
        res.data.map((i) => {
          if (i.status === "NOT_ACCEPTED") {
            ds.push(i);
          }
        });
        console.log(ds);
        setItems(ds);
      };
      getData();
    }
  }, []);

  return items ? (
    <div>
      <HomeHeader />
      <h2 className="heading">List of food requests</h2>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "2%" }}
      >
        {items.map((i, idx) => (
          <CardElement
            itemName={i.name}
            content={i.sender.address}
            weight={i.weight}
            sender={i.sender}
            itemId={i._id}
            index={idx}
            className="grid"
            // imageUrl={i.imageUrl}
          ></CardElement>
        ))}
      </Grid>
    </div>
  ) : (
    <p>loading</p>
  );
}

export default NgoFeature;