import { React, useState } from "react";
import "./Accordion.css";
import { Scrollbar } from "react-scrollbars-custom";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Accordion() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section id="accordion-section">
      <Scrollbar style={{ height: "100%" }}>
        
      {/* <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Cleaning Essentials" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        {open ? (
          <RemoveIcon sx={{ color: "green" }} />
        ) : (
          <AddIcon sx={{ color: "green" }} />
        )}
        <ListItemText primary="Dishwashing Accessories" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Scrubbers and Cleaning Aids" />
              </ListItemButton>             
        </List>
          </Collapse>
          
          <ListItemButton onClick={handleClick}>
        {open ? (
          <RemoveIcon sx={{ color: "green" }} />
        ) : (
          <AddIcon sx={{ color: "green" }} />
        )}
        <ListItemText primary="Dishwashing Accessories" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Scrubbers and Cleaning Aids" />
              </ListItemButton> 
              <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Scrubbers and Cleaning Aids" />
              </ListItemButton>     
        </List>
          </Collapse>
          
    </List> */}


      <ul>
        <div className="empty-div "></div>

        <li className="uk-accordion-inactive">Cleaning Essentials</li>
        <ul className="accordian" uk-accordion="collapsible: true">
          <ul>
            <li className="uk-accordion-title" href="#">
              Dishwashing Accessories
            </li>
            <li className="uk-accordion-content">
              <p>Scrubbers and Cleaning Aids</p>
            </li>
          </ul>

          <ul>
            <li className="uk-accordion-title" href="#">
              Detergent Powder & Bars
            </li>
            <ul className="uk-accordion-content">
              <li className="sub-items">
                <p>Detergent Powders</p>
              </li>
              <li className="sub-items">
                <p>Detergent Bars</p>
              </li>
            </ul>
          </ul>

          <ul>
            <li className="uk-accordion-title" href="#">
              Disinfectants
            </li>
            <ul className="uk-accordion-content">
              <li className="sub-items">
                <p>Disinfectant Sprays</p>
                </li>
              <li className="sub-items" >
                <p>Multipurpose Disinfectants</p>
              </li >          
            </ul>
          </ul>

          <li className="uk-accordion-inactive " href="#">
            Liquid Detergents
          </li>

          <li className="uk-accordion-inactive " href="#">
            Laundary Additives
          </li>

          <li className="uk-accordion-inactive " href="#">
            Dishwashin Bar
          </li>

          <li className="uk-accordion-inactive " href="#">
            Dishwashing Gels & Powder
          </li>
        </ul>

        <ul className="accordian" uk-accordion="collapsible: true">
          <ul>
            <li className="uk-accordion-title" href="#">
              Cleaning Tools
            </li>
            <ul className="uk-accordion-content">
              <li className="sub-items">
                <p>Brooms & Mops</p>
                </li>
                <li className="sub-items">               
                <p>Cleaning Accessories</p>
              </li>   
              </ul>
          </ul>

          <li className="uk-accordion-inactive " href="#">
            Toilet Cleaners & More
          </li>

          <li className="uk-accordion-inactive " href="#">
            Floor Cleaners & More
          </li>
        </ul>
        </ul>
        </Scrollbar>
    </section>
    
  );
}

export default Accordion;


 
