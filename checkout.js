let total = JSON.parse(localStorage.getItem("myglamm-total"));

function totalDisplay (total)
{
   
let displaytotal = document.getElementById("tamount");
let displaytotal1 = document.getElementById("payamount");

console.log(total)

displaytotal.innerText = "₹ " + total[0];
displaytotal1.innerText = "₹" + total;
localStorage.setItem("myglamm-payabletotal",JSON.stringify (total));

}


totalDisplay (total);


// ------------------------apply coupen-------------


function promo(){
    let input = document.getElementById("apply_promo").value;

    if(input ==="masai30")
    {
        total = Math.floor(total- 0.3*total);
        console.log(total);
        localStorage.setItem("myglamm-payabletotal",JSON.stringify (total));
        let displaytotal = document.getElementById("payamount");
        displaytotal.innerText = "₹" + total

        let discount = document.getElementById("discount");
        discount.innerText = " 30 % "
    }
    else
    {
        alert("Invalid PromoCode try again ")
    }
}

