import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./Accordion.css";

function Accordion() {
 
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <section id="accordion-section">
      <Scrollbar style={{ height: "100%" }}>
        
      {/* <Tabs
     
     orientation="vertical"
     
     value={value}
     onChange={handleChange}
     aria-label="Vertical tabs example"
     sx={{ borderRight: 1, borderColor: "#eee" }}
   >
     <Tab className="list-tabs"
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14,
         fontWeight: 300  
         
       }}
       label="Breakfast Cereal"
     />
     <Tab
     className="list-tab"
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Noodles, Pasta & Soup"
     />
     <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Vermicelli"
     />
     <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Instant Mixes"
     />
     <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Batter"
     />
     <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Canned Food"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Frozen Veg Snacks"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Frozen Non-Veg Snacks"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Salad Dressings"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Chyawanprash"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Eggs"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Chinese Sauces"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Fruit Juices"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Cooking Sauces & Paste"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Bread"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
         
       }}
       label="Poha, Dailya & Other Grains"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
       }}
       label="Frozen Veg"
          />
          <Tab
       sx={{
         borderBottom: 1,
         borderColor: "#eee",
         alignItems: "flex-start",
         color: "#666",
         textTransform: "none",
         fontFamily: "Okra,Helvetica",
         fontSize: 14
       }}
       label="Dips & Spreads"
     />
   </Tabs>

         */}



      <ul>
        <div className="empty-div "></div>
        <li className="uk-accordion-inactive ">
          Breakfast & Instand Foods
        </li>
        <ul className="accordian" uk-accordion="collapsible: true">
          <ul>
            <li className="uk-accordion-title" href="#">
              Breakfast Cereal
            </li>
            <ul className="uk-accordion-content">
              <li className="sub-items">
                <p>Flakes</p>
              </li>
              <li className="sub-items">
                <p>Muesli</p>
              </li>
              <li className="sub-items">
                <p>Oats</p>
              </li>
              <li className="sub-items">
                <p>Kids Cereals</p>
              </li>
            </ul>
          </ul>

          <ul>
            <li className="uk-accordion-title" href="#">
              Noodles,Pasta&Soup
            </li>
            <ul className="uk-accordion-content">
              <li className="sub-items">
                <p>Instant Noodles</p>
              </li>
              <li className="sub-items">
                <p>Hakka Noodles</p>
              </li>
              <li className="sub-items">
                <p>Cup Noodles</p>
              </li>
              <li className="sub-items">
                <p>Instant Pasta</p>
              </li >
              <li className="sub-items">
                <p>Soup</p>
              </li>
              <li className="sub-items">
                <p>Pasta & Macroni</p>
              </li>
            </ul>
          </ul>

          <li className="uk-accordion-inactive">Vermicelli</li>

          <ul className="accordian" uk-accordion="collapsible: true">
            <ul>
              <li className="uk-accordion-title" href="#">
                Instant Mixes
              </li>
              <ul className="uk-accordion-content">
                <li className="sub-items">
                  <p>Breakfast Mixes</p>
                </li>
                <li className="sub-items">
                  <p>Ready To Eat</p>
                </li>
              </ul>
            </ul>
          </ul>

          <li className="uk-accordion-inactive">Batter</li>

          <li className="uk-accordion-inactive">Canned Food</li>

          <li className="uk-accordion-inactive">Energy Bars</li>

          <ul className="accordian" uk-accordion="collapsible: true">
            <ul>
              <li className="uk-accordion-title" href="#">
                Frozen Veg Snacks
              </li>
              <ul className="uk-accordion-content">
                <li className="sub-items">
                  <p>Frozen Potato Snacks</p>
                </li>
                <li className="sub-items">
                  <p>Other Frozen Snacks</p>
                </li>
                <li className="sub-items">
                  <p>Frozen Indian Breads</p>
                </li>
              </ul>
            </ul>
          </ul>

          <ul className="accordian" uk-accordion="collapsible: true">
            <ul>
              <li className="uk-accordion-title" href="#">
                Frozen Non-Veg Snacks
              </li>
              <ul className="uk-accordion-content">
                <li className="sub-items">
                  <p>Frozen Chicken Snacks </p>
                </li>
                <li className="sub-items">
                  <p>Seafood Snacks-Frozen</p>
                </li>
                <li className="sub-items">
                  <p>Frozen Exotic Meat Snack</p>
                </li>
              </ul>
            </ul>
          </ul>

          <li className="uk-accordion-inactive">Salad Dressings</li>

          <li className="uk-accordion-inactive">Chyawaprash</li>
        </ul>
        </ul> 
         </Scrollbar>
    </section>
  );
}

export default Accordion;
