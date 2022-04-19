import React from "react";
import "./Sectionbody.css";
import Accordion from "../accordion/Accordion";
import Cardelement from "../card/cardelement";



function Sectionbody() {
  return (
    <section id="section-body" >
      <Accordion />
      <Cardelement />
    </section>
  );
}
export default Sectionbody;
