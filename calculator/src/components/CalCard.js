import React, { useState, useEffect } from "react";
import "./CalCard.css";
import { TextField, Grid, Button } from "@mui/material";

const CalCard = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [op, setOp] = useState("");

  const handleErase = () => {
    setVal("");
    setOp("");
    setVal2("");
  };

  const halndleEraseOne = () => {
    if (val.length > 0) setVal(val.substring(0, val.length - 1));
    else if (op !== "") {
      setOp("");
      setVal(val2);
      setVal2("");
    }
  };

  const handleNumClick = (num) => {
    setVal(val + num);
  };

  const halndleOp = (operation) => {
    if(op !== '') return;
    setOp(operation);
    setVal2(val);
    setVal("");
  };

  const calculate = () => {
    if (op === "") return;
    switch (op) {
      case "+":
        setVal((parseFloat(val2) + parseFloat(val)).toString());
        break;
      case "-":
        setVal((parseFloat(val2) - parseFloat(val)).toString());
        break;
      case "*":
        setVal((parseFloat(val2) * parseFloat(val)).toString());
        break;
      case "/":
        setVal((parseFloat(val2) / parseFloat(val)).toString());
        break;
      case "%":
        setVal((parseFloat(val2) % parseFloat(val)).toString());
        break;
      default:
        setVal({ val });
    }
    setOp("");
    setVal2("");
  };

  const handleKeyPress = (event) => {
    const key = event.key;
    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
      if (key === '=' || key === 'Enter') calculate();
      else if (key === "Backspace") halndleEraseOne();
      else if (!isNaN(key) || key === ".") handleNumClick(key);
      else halndleOp(key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [val, val2, op, ]);

  return (
    <div className="wrapper">
      <TextField
        placeholder="RESULT"
        value={val2 + op + val}
        variant="filled"
        color="secondary"
        focused
        sx={{ width: "90%", margin: "5px auto", padding: "5px" }}
        inputProps={{ style: { color: "white" }, autoComplete: "off" }}
      />
      <br />

      <Grid container spacing={2} className="all-btn">
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleErase}>
            C
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleOp.bind(null, "%")}>
            %
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleEraseOne}>
            X
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleOp.bind(null, "/")}>
            /
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "7")}>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "8")}>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "9")}>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleOp.bind(null, "*")}>
            *
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "4")}>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "5")}>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "6")}>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleOp.bind(null, "-")}>
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "1")}>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "2")}>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "3")}>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={halndleOp.bind(null, "+")}>
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "00")}>
            00
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, "0")}>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleNumClick.bind(null, ".")}>
            .
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={calculate}>
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CalCard;
