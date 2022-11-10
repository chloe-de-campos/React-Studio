import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  console.log(item.image)
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0.00);



  // function makeBakeryItem(){
  //   console.log('mkaking item')
  //   const p = new BakeryItem
  //   return p
  // }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className= "bakeryGallery">
        {bakeryData.map((item,index) => ( // TODO: map bakeryData to BakeryItem components
          BakeryItem({bakeryItem: item, priceTotal:priceTotal, setPriceTotal: setPriceTotal, theCartItems: cartItems, cartSetter: setCartItems})
          // <button onClick={() => AddToCart(item.name)}> Add to Cart</button>
          // <p>Bakery Item {index}</p>, // replace with BakeryItem component
          // <div class="BakeryItem"> 
          //   <img src={item.image} ></img>
          // <h2> {item.name}</h2>
          // <p>{item.description}</p>
          // <div className="rowRowRow">  
          //   ${item.price}
          // 
          //   </div>
          // </div> // replace with BakeryItem component

        ))}
     
      </div>
      <div>
        <h2>Cart</h2>
        {cartItems}
        {/* {cartItems.map((cartitem) => <li>{cartitem}</li>)} */}
        {/* TODO: render a list of items in the cart */}
        <h4>Total</h4>
        ${priceTotal}
      </div>
    </div>
  );

}

export default App;
