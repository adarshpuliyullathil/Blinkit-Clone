import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "./Titlebar.css";
function Titlebar(props) {
  const ITEM_HEIGHT = 50;
  const ITEM_PADDING_TOP = 1 ;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 200,
      },
    },
  };

  const names = [
    "Relevance",
    "Price (Low To High)",
    "Price (High To Low)",
    "Discount (High To Low)",
    "Name (A to Z)",
  ];

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  return (
    <div className="title-bar">
      <div className="indication">
        <a href="/" className="page-indicator">
          Home  {''}
        </a>
        <p className="page-indicator">
          {"  > "}
          { props.data}
        </p>
        <h3 className="indicator-title">{props.data}</h3>
      </div>

      
      <div className="sort-area">
        <label htmlFor="sort-select">sort by</label>

      {/* sort-selection */}

        <div className="sort-select">
          <FormControl sx={{  width: 200 }}>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={personName}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
    </div>
          


      <div className="button-view">
        <button className="item-button">{props.value1}</button>
        <button className="item-button">{props.value2}</button>
        <button className="item-button">{props.value3}</button>
        <button className="item-button">{props.value4}</button>
        <button className="item-button">{props.value5}</button>
        <button className="item-button">{props.value6}</button>
        <button className="item-button">{props.value7}</button>
        <button className="item-button">{props.value8}</button>
        <button className="item-button">{props.value9}</button>
        <button className="item-button">{props.value10}</button>
        <button className="item-button">{props.value11}</button>
        <button className="item-button">{props.value12}</button>
      </div>
    </div>
  );
}
export default Titlebar;
