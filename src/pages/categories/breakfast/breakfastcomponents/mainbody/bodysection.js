import './bodysection.css'
import Cardelement from '../card/cardelement';
import Accordion from '../accordian/Accordion';



function Bodysection() {
    return (
      <section id="section-body" >
        <Accordion/>
        <Cardelement />
      </section>
    );
  }
  export default Bodysection;