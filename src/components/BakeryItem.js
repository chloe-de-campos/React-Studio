// TODO: create a component that displays a single bakery item

import cartItems from "../App";
import setCartItems from "../App";
// import App from "../App";
// import AddToCart from "../App";
// // const BakeryItem = () => {
//     return {
//     }
    
//     // name: ItemData.name,

//     // console.log(ItemData.name)

    
//     // let dname = ItemData.name 
//     // this.description =ItemData.description
//     // this.price =ItemData.price
//     // this.image = ItemData.image


//     // const itemDiv = document.createElement('div');
//     // itemDiv.innerHTML = "<p>dddd </p>"
//     // document.getElementById('bakeryGallery').appendChild(itemDiv);
//     // function getName (){   
//     //     return dname
//     // }
//     // itemDiv.innerHTML = "this text is inside a div";
    
// }

// export default BakeryItem;


export default function BakeryItem(props) {
    function addToCart(item){
        props.cartSetter(props.theCartItems+props.bakeryItem.name)
        props.setPriceTotal(props.priceTotal+props.bakeryItem.price)
        
    }
    
    return(
 
            <div class="BakeryItem"> 
                <img src={props.bakeryItem.image} ></img>
                <h2> {props.bakeryItem.name}</h2>
                <p>{props.bakeryItem.description}</p>
                <p>${props.bakeryItem.price}</p>
                <button onClick={() => addToCart()}> Add to Cart</button>
            </div> 
            

    )
}