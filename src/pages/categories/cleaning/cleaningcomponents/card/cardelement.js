import React from "react";
import Titlebar from "../bodysection/Titlebar";
import "./cardelement.css";
import Itemcard from "./Itemcard";
import image1 from "../../../../../assets/images/cleaning/ariel.jpg";
import image2 from "../../../../../assets/images/cleaning/2.jpg"
import image3 from "../../../../../assets/images/cleaning/3.jpg"
import image4 from "../../../../../assets/images/cleaning/4.jpg"
import image5 from "../../../../../assets/images/cleaning/5.jpg"
import image6 from "../../../../../assets/images/cleaning/6.jpg"
import image7 from "../../../../../assets/images/cleaning/7.jpg"
import image8 from "../../../../../assets/images/cleaning/8.jpg"
import image9 from "../../../../../assets/images/cleaning/9.jpg"
import image10 from "../../../../../assets/images/cleaning/10.jpg"
import image11 from "../../../../../assets/images/cleaning/11.jpg"
import image12 from "../../../../../assets/images/cleaning/12.jpg"
import image13 from "../../../../../assets/images/cleaning/13.jpg"
import image14 from "../../../../../assets/images/cleaning/14.jpg"
import image15 from "../../../../../assets/images/cleaning/15.jpg"
import image16 from "../../../../../assets/images/cleaning/16.jpg"


const DUMMY_DATA = [
  {
    id: "m1",
    offer: "49% off",
    image: image1,
    title: "Ariel Complete Detergent Powder",
    quantity: "4 kg",
    price: 641,
    actualprice: '₹1280',
  },
  {
    id: "m2",
    offer: "34% off",
    image: image2,
    title: "SaveMore Pine Liquid Phenyl",
    quantity: "5 l",
    price: 151,
    actualprice: '₹230',
  },
  {
    id: "m3",
    offer: "20% off",
    image: image3,
    title: "Gainda Phenyl (White) ",
    quantity: "5l",
    price: 200,
    actualprice: '₹250',
  },
  {
    id: "m4",
    offer: "",
    image: image4,
    title: "Vim Lemon Dishwash Bar- Pack of 3",
    quantity: "3 x 200 g",
    price: 49,
    actualprice:'₹50',
  },

  {
    id: "m5",
    offer: "49% off",
    image: image5,
    title: "SaveMore Citrus Floor Cleaner",
    quantity: "1 l",
    price: 91,
    actualprice: '₹180',
  },
  {
    id: "m6",
    offer: "8% off",
    image: image6,
    title: "Lizol Disinfectant Surface & Floor Cleaner (Citrus)",
    quantity: "1 l",
    price: 187,
    actualprice: '₹205',
  },

  {
    id: "m7",
    offer: "8% off",
    image: image7,
    title: "Comfort After Wash Fabric Conditioner (Lily Fresh)",
    quantity: "2 l",
    price: 440,
    actualprice: '₹480',
  },
  {
    id: "m8",
    offer: "17% off",
    image: image8,
    title: "Lizol Disinfectant Surface Floor Cleaner (Floral)",
    quantity: "5 l",
    price: 664,
    actualprice: '₹809',
  },

  {
    id: "m9",
    offer: "",
    image: image9,
    title: "Vim Lemon Dishwash Gel",
    quantity: "250 ml",
    price: 50,
    actualprice: null,
  },
  {
    id: "m10",
    offer: "14% off",
    image: image10,
    title: "Vim Lemon Gel Dishwash Liquid",
    quantity: "500gm",
    price: 355,
    actualprice: '₹415',
  },

  {
    id: "m11",
    offer: "12% off",
    image: image11,
    title: "Surf Excel Matic Top Load Liquid Detergent",
    quantity: "2 l",
    price: 355,
    actualprice: '₹415',
  },
  {
    id: "m12",
    offer: "20% off",
    image: image12,
    title: "Surf Excel Matic Front Load Detergent Powder - Free 1 kg",
    quantity: "3 kg + 1 kg",
    price: 730,
    actualprice: '₹830',
  },

  {
    id: "m13",
    offer: "15% off",
    image: image13,
    title: "Gala No Dust 90 cm Broom (Plastic & Grass like Fiber, Blue & Brown)",
    quantity: "1 unit",
    price: 160,
    actualprice: '₹190',
  },
  {
    id: "m14",
    offer: '11% off',
    image: image14,
    title: "Genteel Liquid Detergent - Buy 1 Get 1 Free",
    quantity: "2 x 1 kg",
    price: 292,
    actualprice: '₹330',
  },
  {
    id: "m15",
    offer: '7% off',
    image: image15,
    title: "Scotch Brite Sponge Scrub",
    quantity: "2 units",
    price: 60,
    actualprice: '₹65',
  },
  {
    id: "m16",
    offer: '35% off',
    image: image16,
    title: "SaveMore Liquid Phenyl",
    quantity: "1 l",
    price: 41,
    actualprice: '₹64',
  },
];

const commProps = {
  data: 'Cleaning Essentials',
  value1: 'diswashing accessories',
  value2: 'detergent powders & bars',
  value3: 'disinfectants',
  value4: 'liquid detergants',
  value5: 'laundary additives',
  value6: 'dishwashing bars',
  value7: 'dishwashing gels & powder',
  value8: 'cleaning tools',
  value9: 'toilet cleaners & more',
  value10: 'floor cleaners and more',
}


function Cardelement() {
  return (
    <section id="card-section">
      <Titlebar {...commProps}/>
  
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
