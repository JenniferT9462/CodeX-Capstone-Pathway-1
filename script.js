
// BootStrap OffCanvas JS 
const offcanvasElementList = document.querySelectorAll('.offcanvas');
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl));



// Created a object for my shop and nested item info in the shop object. So, I can access them later.
let shop;
shop = {
    whiteTshirt:  {
        title: "Gamer Anna White T-Shirt",
        info: "White T-Shirt w/ Gamer Anna logo",
        price: 19.99

    },
    blackTshirt:  {
        title: "Gamer Anna Black T-Shirt",
        info: "Black T-Shirt w/Gamer Anna logo",
        price: 19.99

    },
    whiteHoodie:  {
        title: "Gamer Anna White Hoodie",
        info: "White hoodie w/Gamer Anna logo",
        price: 29.99

    },
    blackHoodie:  {
        title: "Gamer Anna Black Hoodie",
        info: "Black hoodie w/Gamer Anna logo",
        price: 29.99
    }
}
// Set up for functions
let cartList = document.getElementById("cartList");
let addToCartButtonWhtT = document.getElementById("addToCartButtonWhtT");
let addToCartButtonBlkT = document.getElementById("addToCartButtonBlkT");
let addToCartButtonWhtH = document.getElementById("addToCartButtonWhtH");
let addToCartButtonBlkH = document.getElementById("addToCartButtonBlkH");


// Items in cart count and total amount with items added
let subtotal = document.getElementById("subtotal");
let subtotalAmt = 0;
let subtotalItems = 0;

// Function for white t-shirt
let cart = [];
function addToCartWt() {

    let cartItemTitle, cartItemInfo,cartItemPrice;
    cartItemTitle = shop.whiteTshirt.title;
    cart.push(cartItemTitle);
    cartItemInfo = shop.whiteTshirt.info;
    cart.push(cartItemInfo);
    cartItemPrice = shop.whiteTshirt.price;
    cart.push(cartItemPrice);

    console.log(cart);

    cartList.innerHTML += `
        <li>
            <img src="img/tShirt2.png" alt="Item Image" height="60" width="60" class="cartItemImg">
            <h5 class="cartItemTitle">${cartItemTitle}</h5>
            <p class="cartItemInfo">${cartItemInfo}</p>
            <p class="cartItemPrice">$${cartItemPrice}</p>
        </li>
        `;
    // Add item prices together and count items and display them
    subtotalAmt = shop.whiteTshirt.price + subtotalAmt
    subtotal.innerHTML = `$${subtotalAmt.toFixed(2)}`;
    ++subtotalItems;
    numItems.innerHTML = `${subtotalItems}`;
    
}
addToCartButtonWhtT.onclick = addToCartWt;


// Function for addToCart for black T-shirt
function addToCartBt() {
    
    let cartItemTitle, cartItemInfo, cartItemPrice;
    cartItemTitle = shop.blackTshirt.title;
    cart.push(cartItemTitle);
    cartItemInfo = shop.blackTshirt.info;
    cart.push(cartItemInfo);
    cartItemPrice = shop.blackTshirt.price;
    cart.push(cartItemPrice);

    console.log(cart);

    cartList.innerHTML += `
        <li>
            <img src="img/tShirt1.png" alt="Item Image" height="60" width="60" class="cartItemImg ml-0">
            <h5 class="cartItemTitle">${cartItemTitle}</h5>
            <p class="cartItemInfo">${cartItemInfo}</p>
            <p id="itemPrice" class="cartItemPrice">$${cartItemPrice}</p>
        </li>
       
       
    `;
    // Display number of items and calculate subtotal
    subtotalAmt = shop.blackTshirt.price + subtotalAmt
    subtotal.innerHTML = `$${subtotalAmt.toFixed(2)}`;
    ++subtotalItems;
    numItems.innerHTML = `${subtotalItems}`;

}
addToCartButtonBlkT.onclick = addToCartBt;

// TODO: functions for hoodies

function addToCartWh() {
    let cartItemTitle, cartItemInfo, cartItemPrice;
    cartItemTitle = shop.whiteHoodie.title;
    cart.push(cartItemTitle);
    cartItemInfo = shop.whiteHoodie.info;
    cart.push(cartItemInfo);
    cartItemPrice = shop.whiteHoodie.price;
    cart.push(cartItemPrice);

    console.log(cart);

    cartList.innerHTML += `
        <li>
            <img src="img/whtHoodie.png" alt="Item Image" height="60" width="60" class="cartItemImg">
            <h5 class="cartItemTitle">${cartItemTitle}</h5>
            <p class="cartItemInfo">${cartItemInfo}</p>
            <p id="itemPrice" class="cartItemPrice">$${cartItemPrice}</p>
        </li>
       
       
    `;
    // Display number of items and calculate subtotal
    subtotalAmt = shop.whiteHoodie.price + subtotalAmt
    subtotal.innerHTML = `$${subtotalAmt.toFixed(2)}`;
    ++subtotalItems;
    numItems.innerHTML = `${subtotalItems}`;


}
addToCartButtonWhtH.onclick = addToCartWh;

function addToCartBh() {
    let cartItemTitle, cartItemInfo, cartItemPrice;
    cartItemTitle = shop.blackHoodie.title;
    cart.push(cartItemTitle);
    cartItemInfo = shop.blackHoodie.info;
    cart.push(cartItemInfo);
    cartItemPrice = shop.blackHoodie.price;
    cart.push(cartItemPrice);

    console.log(cart);

    cartList.innerHTML += `
        <li>
            <img src="img/blkHoodie.png" alt="Item Image" height="60" width="60" class="cartItemImg">
            <h5 class="cartItemTitle">${cartItemTitle}</h5>
            <p class="cartItemInfo">${cartItemInfo}</p>
            <p id="itemPrice" class="cartItemPrice">$${cartItemPrice}</p>
        </li>
       
       
    `;
    // Display number of items and calculate subtotal
    subtotalAmt = shop.blackHoodie.price + subtotalAmt
    subtotal.innerHTML = `$${subtotalAmt.toFixed(2)}`;
    ++subtotalItems;
    numItems.innerHTML = `${subtotalItems}`;


}
addToCartButtonBlkH.onclick = addToCartBh;  

// TODO: Check to see if item is already in the cart and give an alert if it is in the cart




// Quantity for cart
// function quantityChange() {
//     if (document.querySelector("btn-plus")) {
//       products.inCart = products.inCart + 1;
//     } else if (document.querySelector("btn-minus")) {
//       products.inCart = products.inCart - 1;
//     }
//   }





// TODO: Haven't decided if I want to make checkout work yet




