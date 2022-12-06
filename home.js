//login

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

// search

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// shopCart

let shopCart = document.querySelector('.shopCart');

document.querySelector('#homeCart').onclick = () =>{
  shopCart.classList.toggle('active');
}

// shopCart working

if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready);
}
else{
  ready();
}

function ready(){
  var removeCarbuttons = document.getElementsByClassName('boxdel');
  console.log(removeCarbuttons);
  for(var i=0 ; i<removeCarbuttons.length ; i++){
    var button =removeCarbuttons[i];
    button.addEventListener('click',removeCartItem);
  }

  // 
  var quantityInputs = document.getElementsByClassName('.quantity');
  for (var i=0 ; i<quantityInputs.length ; i++){
    var input = quantityInputs[i];
    input.addEventListener("change",quantityChange);
  }
}

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  CartTotal();
}

// shopCart total

function CartTotal(){
  var cartContent = document.getElementsByClassName(".boxCon")[0];
  var cartBoxes = document.getElementsByClassName("cartbox");
  var total = 0;

  for (var i = 0 ; i< cartBoxes.length ; i++){
    var cartBox = cartBoxes[i];
    var productPrice = document.getElementsByClassName("cartPrice")[0];
    var quantityEle = document.getElementsByClassName("quantity")[0];

    var price = parseFloat(productPrice.innerHTML.replace("$",""));
    var quantity = quantityEle.value;

    total = total + ( price * quantity);

    document.getElementsByClassName("totalPrice")[0].innerText = "$" + total;
  }
}

function quantityChange(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  CartTotal();
}