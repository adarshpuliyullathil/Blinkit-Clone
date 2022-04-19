import "./Itemcard.css";

function Itemcard(props) {
  return (
    <ul className="card-wrapper uk-animation-toggle ">
      <div className="offer-banner">{props.offer}</div>
      <div className="card-image uk-animation-slide-top-small">
        <img
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="card-title">
        <h6 className="item-title">{props.title}</h6>
      </div>
      <div className="card-quantity">
        <p className="item-quantity">{props.quantity}</p>
      </div>
      <div className="card-price">
        <p className="item-price">₹{props.price}</p>
        <p className="item-price">
          <del className="actual-price">{props.actualprice}</del>
        </p>
      </div>
      <div className="button-wrapper">
        <button className="addto-cart"> Add to cart</button>
      </div>
      
      <div className="large-button-wrapper">
        <button className="to-cart"> ADD </button>
        <button className="add-button"> +</button>
      </div>

    </ul>

    
  );
  
}
export default Itemcard;
