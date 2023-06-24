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
  const addCategory = () => {
    axios
      .post("https://retoolapi.dev/jUsVnU/category", category)
      alert('category added')
      
  };


  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <TextField
            id="standard-basic"
            label="Add Category"
            variant="standard"
            onChange={(e) => {
              setCategory({ category: e.target.value });
            }}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addCategory}>
          ADD CATEGORY
        </Button>
      </CardActions>
    </Card>
  );
}
