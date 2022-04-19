import React from "react";
import Titlebar from "../../../cleaning/cleaningcomponents/bodysection/Titlebar";
import "./cardelement.css";
import Itemcard from "../../../cleaning/cleaningcomponents/card/Itemcard";
import image1 from '../../../../../assets/images/breakfast/1.jpg';
import image2 from '../../../../../assets/images/breakfast/2.jpg';
import image3 from '../../../../../assets/images/breakfast/3.jpg';
import image4 from '../../../../../assets/images/breakfast/4.jpg';
import image5 from '../../../../../assets/images/breakfast/5.jpg';
import image6 from '../../../../../assets/images/breakfast/6.jpg';
import image7 from '../../../../../assets/images/breakfast/7.jpg';
import image8 from '../../../../../assets/images/breakfast/8.jpg';
import image9 from '../../../../../assets/images/breakfast/9.jpg';
import image10 from '../../../../../assets/images/breakfast/10.jpg';
import image11 from '../../../../../assets/images/breakfast/11.jpg';
import image12 from '../../../../../assets/images/breakfast/12.jpg';
import image13 from '../../../../../assets/images/breakfast/13.jpg';
import image14 from '../../../../../assets/images/breakfast/14.jpg';
import image15 from '../../../../../assets/images/breakfast/15.jpg';
import image16 from '../../../../../assets/images/breakfast/16.jpg';
import image17 from '../../../../../assets/images/breakfast/17.jpg';
import image18 from '../../../../../assets/images/breakfast/18.jpg';
import image19 from '../../../../../assets/images/breakfast/19.jpg';
import image20 from '../../../../../assets/images/breakfast/20.jpg';

const DUMMY_DATA = [
  {
    id: "m1",
    offer: null,
    image: image1,
    title: "Nestle Maggi Cuppa Cup Noodles (Masala Cup)",
    quantity: "70 g",
    price: 50,
    actualprice: '',
  },
  {
    id: "m2",
    offer: "39% off",
    image: image2,
    title: "Kellogg's Moons & Stars, with Whole Grain, Source",
    quantity: "1.2 kg",
    price: 397,
    actualprice: '₹660',
  },
  {
    id: "m1",
    offer: "8% off",
    image: image3,
    title: "Nissin Mazedar Masala Cup Noodles",
    quantity: "70gm",
    price: 46,
    actualprice: '₹50',
  },
  {
    id: "m2",
    offer: "8% off",
    image: image4,
    title: "Nissin Veggi Manchow Cup Noodles",
    quantity: "70gm",
    price: 46,
    actualprice: '₹50',
  },
  {
    id: "m1",
    offer: "12% off",
    image: image5,
    title: "Nissin Veggi Manchow Cup Noodles",
    quantity: "250gm",
    price: 148,
    actualprice: '₹170',
  },
  {
    id: "m2",
    offer: "24% off",
    image: image6,
    title: "Rishta Fresh & Tasty Idli & Dosa Batter",
    quantity: "1 kg",
    price: 91,
    actualprice:'₹120',
  },
  {
    id: "m1",
    offer: "14% off",
    image: image7,
    title: "ITC Master Chef Corn Cheesy Triangle",
    quantity: "320gm",
    price: 149,
    actualprice: '₹175',
  },
  {
    id: "m2",
    offer: null,
    image: image8,
    title: "Maggi Masala Noodles - Pack of 12",
    quantity: "12 x 70 gm",
    price: 138,
    actualprice: '₹144',
  },
  {
    id: "m1",
    offer: "24% off",
    image: image9,
    title: "Bagrry's Crunchy Fruit & Nut with Cranberries Muesli",
    quantity: "750 g",
    price: 375,
    actualprice: '₹499',
  },
  {
    id: "m2",
    offer: "22% off",
    image: image10,
    title: "Kellogg's Muesli with 21% Fruit, Nut & Seeds | Tastier",
    quantity: "750 g",
    price: 344,
    actualprice: '₹445',
  },
  {
    id: "m2",
    offer: "49% off",
    image: image11,
    title: "Borges Spaghetti Imported Pasta",
    quantity: "500 g",
    price: 126,
    actualprice: '₹250',
  },
  {
    id: "m2",
    offer: "22% off",
    image: image12,
    title: "Nissin Geki - Hot & Spicy Korean Veg Flavoured",
    quantity: "80gm",
    price: 38,
    actualprice: '₹49',
  },
  {
    id: "m2",
    offer: "15% off",
    image: image13,
    title: "Kellogg's Original, High in Iron, High in B Group",
    quantity: "1.2 kg",
    price: 369,
    actualprice: '₹435',
  },
  {
    id: "m2",
    offer: "49% off",
    image: image14,
    title: "Borges Fusilli Durum Wheat Imported Pasta",
    quantity: "500 g",
    price: 126,
    actualprice: '₹250',
  },
  {
    id: "m2",
    offer: null,
    image: image15,
    title: "Kellogg's Crunchy Bites, Source of Fibre, Source of..",
    quantity: "375 g",
    price: 190,
    actualprice:null,
  },
  {
    id: "m2",
    offer: "8% off",
    image: image16,
    title: "Veeba Cheese & Jalapeno Dip",
    quantity: "300 g",
    price: 118,
    actualprice: '₹129',
  },
  {
    id: "m2",
    offer: "30% off",
    image: image17,
    title: "Rishta Multigrain Speciality Idli Dosa Batter",
    quantity: "800 g",
    price: 84,
    actualprice: '₹120',
  },
  {
    id: "m2",
    offer: "8% off",
    image: image18,
    title: "Amma's Special Dosa Idli Batter",
    quantity: "1 kg",
    price: 73,
    actualprice: '₹80',
  },
  {
    id: "m2",
    offer: "48% off",
    image: image19,
    title: "SPT Frozen Soya Chaap",
    quantity: "500gm",
    price: 77,
    actualprice: '₹150',
  },
  {
    id: "m2",
    offer: "22% off",
    image: image20,
    title: "Nissin Geki - Hot & Spicy Korean Chicken Flavoured",
    quantity: "80 g",
    price: 38,
    actualprice: '₹49',
  },
  
  
];
const commProps = {
  data: 'Breakfast & Instant Food',
  value1: 'breakfast cereal',
  value2: 'noodles,pasta & soup',
  value3: 'vermicelli',
  value4: 'instant mixes',
  value5: 'batter',
  value6: 'canned food',
  value7: 'energy bars',
  value8: 'frozen veg snacks',
  value9: 'frozen non-veg snacks',
  value10: 'salad dressings',
  value11: 'chyavanaprash',
  value12: '',

}


function Cardelement() {
  return (
    <section id="card-section">
      <Titlebar { ...commProps }/>
  
        {DUMMY_DATA.map((datas) => (
          <Itemcard
            key={datas.id}
            image={datas.image}
            title={datas.title}
            offer={datas.offer}
            quantity={datas.quantity}
            price={datas.price}
            actualprice={datas.actualprice}
          />
        ))}
    </section>
  );
}
export default Cardelement;
