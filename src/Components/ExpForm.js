import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";

export default function ExpForm() {
  const [category, setCategory] = useState({
    category: "",
  });
  const [data, setData] = useState([]);
  const [flag, setflag] = useState(false);
  const [status, setStatus] = useState("");
  const flagtrigger = () => {
    setflag(true);
    setTimeout(() => {
      setflag(false);
      window.location.reload();
    }, 3000);
  };

  const addCategory = () => {
    if (category.category == "") {
      setStatus("error");
    } else {
      axios
        .get(
          `https://retoolapi.dev/jUsVnU/category?category=${category.category}`
        )
        .then((res) => {
          if (res.length != 0) {
            setStatus("failure");
          } else {
            axios.post("https://retoolapi.dev/jUsVnU/category", category);
            setCategory({ category: "" });
            setStatus("Success");
            flagtrigger();
          }
        });
    }

    console.log(data);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      {flag && (
        <div className="category_mssg">Category added: {category.category}</div>
      )}
      {!flag && status == "error" && (
        <div className="danger">Category is blank</div>
      )}
      {!flag && status == "failure" && (
        <div className="danger">Category already there</div>
      )}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <TextField
            id="outlined-helperText"
            label="Add Category"
            onChange={(e) => {
              setCategory({ category: e.target.value });
            }}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="large" onClick={addCategory}>
          ADD CATEGORY
        </Button>
      </CardActions>
    </Card>
  );
}
