import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpForm from "./ExpForm";

export default function AddExp() {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [cat, setCat] = useState([]);
  const [amount,setAmount] = useState('');
  const date = Date()
  const handlesubmit = ()=>
  {
    const obj = {
      date:date,
      category:selectedCategory,
      amount:amount
    }

    axios.post('https://retoolapi.dev/qeN8pu/data',obj)
    
    alert("Expense submitted")
  }
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await axios.get("https://retoolapi.dev/jUsVnU/category");
        setCat(res.data);
        
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <TextField
            id="standard-basic"
            label="Enter Amount"
            variant="standard"
            onChange={(e)=>setAmount(e.target.value)}
          />
        </Typography>
<br/>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              label="Category"
              onChange={handleChange}
            >
              {cat.map((obj) => (
                <MenuItem value={obj.category}>{obj.category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={handlesubmit}>Add Expense</Button>
      </CardActions>
    </Card>
    <br/>
    <br/><br/><br/><br/><br/>
    <ExpForm/>
    </>
  );
}
