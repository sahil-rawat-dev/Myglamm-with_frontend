

// ------------------
var parent = document.getElementById("product_div");
let cart = JSON.parse(localStorage.getItem("myglammCart"));


// ------------if cart is empty show err-------

var empty_cart = document.getElementById("sub_div");

// console.log(cart.length);
if (cart.length<1) {
  empty_cart.style.display = "block";

} else {
  empty_cart.style.display = "none";
  empty_cart.style.display = "none";
}

// -----------------------------
var total_value = document.getElementById("total_value");
var bag_heading = document.getElementById("bag_heading");
var checkout_btn = document.getElementById("checkout_btn");

// -------------append cart count ----------------
var bag_item = document.createElement("h1");
bag_item.innerText = "(" + cart.length + ")";
bag_heading.append(bag_item);

// ---------------------------
if (cart.length >= 1) {
  bag_heading.style.display = "flex";
  total_value.style.display = "flex";
}





var subtotal = 0;
var totalPrice = 0;
var qty = 1;
// -----total------------


// -------------



function showProducts() {

    cart.map(function (product) {
        cart.innerHTML = null;

        let div = document.createElement("div");
            div.setAttribute("style", "Margin-top:30px; display:flex;");

  // ----------image------
        let img = document.createElement("img");
        img.src = product.Image;
  //  --------------amount and total------
       let amount = document.createElement("p");
           amount.style.fontWeight = "900";
           amount.style.marginLeft ="20px"

       let product_price = document.createElement("p");
          product_price.setAttribute("style", "font-size:20px; margin: 40px 40px;")
           product_price.textContent = "₹" + product.Price;
           
       let total_amount = document.getElementById("total_price");
     

        totalPrice += product.Price;
       
        amount.innerText = "₹ " + totalPrice;
        total_amount.innerHTML = null;
        total_amount.append(amount);
        
  // -----------title----------

        let product_name = document.createElement("p");
        product_name.setAttribute("style", "font-size:16px; margin: 20px 35px;width:350px")
        product_name.textContent = product.Name;

  // --------------------quantity-----------
        let quantity_div = document.createElement("div");
        quantity_div.setAttribute("style", "display:flex;justify-content:center; align-items:center; width:100px;height:60px; background-color:#EEEEEE;margin:30px 100px;position:relative;");
        
        let plus = document.createElement("p");
        plus.innerText = "+";
        plus.setAttribute("style", "font-size:30px; margin-left:10px;cursor:pointer;")
        plus.onclick = increassQuantirty;

        let quantity = document.createElement("p");
        quantity.innerText = qty;
        quantity.setAttribute("style", "font-size:30px;")

        let minus = document.createElement("p");
        minus.innerText = "-";
        minus.setAttribute("style", "font-size:30px; margin-right:12px;cursor:pointer;color:#BDBDBD;")
        minus.addEventListener("click", decressQuantirty);



        quantity_div.append(minus, quantity, plus);
  // ----------------------
     
      
        var q = 1
        function increassQuantirty() {
            if(q >= 5){
                quantity.innerText = 5;
                individual_total_amount.innerText =  product.Price * +quantity.innerText;
           
                plus.style.color = "#BDBDBD";

            } else {
                quantity.innerText = ++q;
                individual_total_amount.innerText =  product.Price * +quantity.innerText;
                minus.style.color = "black";

                totalPrice += product.Price ;
                console.log(totalPrice +" totalPrice");
                
                amount.innerText =  "₹ " + totalPrice;
                total_amount.innerHTML = null;
                total_amount.append(amount);

                console.log(product.Price * +quantity.innerText);

            }
        }

        // console.log(subtotal+ increassQuantirty());
        
        var s = q;
        function decressQuantirty() {
            if (q <= 1) {
                quantity.innerText = 1;
                individual_total_amount.innerText =  product.Price * +quantity.innerText;
                minus.style.color = "#BDBDBD";
                plus.style.color = "black";
                // individual_total_amount.innerText = "₹" + product.price * c;
            }
            else{
                quantity.innerText = --q;
               
                individual_total_amount.innerText =  product.Price * +quantity.innerText;
                  subtotal = (Number(individual_total_amount.innerText) + subtotal)
                  console.log(subtotal, "decrease item");
                  plus.style.color = "black";

                  totalPrice -= product.Price;
                  console.log(totalPrice+" totalPrice");

                  amount.innerText =  "₹ " + totalPrice;
                  total_amount.innerHTML = null;
                  total_amount.append(amount);

                }
        }

     
        var individual_total_amount = document.createElement("p");
        individual_total_amount.innerText =   product.Price * qty;

        individual_total_amount.setAttribute("style", "font-size:20px; margin-top: 40px;")

    // ------------------------>remove item<-------------------

    var remove_item = document.createElement("img");
    remove_item.src =
      "https://www.pngfind.com/pngs/m/9-98161_x-mark-x-alphabet-icon-hd-png-download.png";
    remove_item.setAttribute(
      "style",
      "width:30px; height:20px;margin:40px 70px;cursor:pointer;"
    );

    remove_item.onclick = function () {
      removetoCart(event, product);
    };

    //--------------------> HR line<---------------------

    let line = document.createElement("hr");

    line.setAttribute(
      "style",
      "margin-top:15px;height: 1px;background-color: #E0E0E0; border:none"
    );

  
    div.append(img, product_name, product_price, quantity_div, individual_total_amount, remove_item );

    parent.append(div, line);
  });

}

showProducts();







// ---------------------checkout function----------


var checkoutbtn = document.getElementById("checkout_btn");
checkoutbtn.onclick = function()
{
  if(localStorage.getItem("myglamm-total")===null)
  {
      localStorage.setItem("myglamm-total",JSON.stringify([]));
  }
  
  let myglammtotal = JSON.parse(localStorage.getItem("myglamm-total"));
  
  myglammtotal.pop()
  myglammtotal.push(totalPrice);

  localStorage.setItem("myglamm-total",JSON.stringify (myglammtotal));
  
    window.location.href = "../checkout.html"
}


// ---------- gift line ------------

let gift = document.getElementById("gift");
    
let offer =Math.floor((Math.random() * 100) + 1);


gift.innerHTML = `You will earn  ₹ ${offer} Good Points as cashback on this order.`



// -------------remove function--------


function removetoCart(e, prod) {
  e.preventDefault();

  var newprods = cart.filter(function (p) {
    if (p != prod) {
      return p;
    }
  });
  localStorage.removeItem("myglammCart");

  localStorage.setItem("myglammCart", JSON.stringify(newprods));
  location.reload();
}
