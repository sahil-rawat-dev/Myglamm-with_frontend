import{navbar}from"../components/navbar.js"
  let div=document.getElementById("navcont");
  div.innerHTML=navbar();
import{footer}from"../component/footer.js";
let down=document.getElementById("down");
    down.innerHTML=footer()
var data=JSON.parse(localStorage.getItem("prdc"));
appendta(data)

function appendta(){
data.forEach((el)=>{
    let div=document.createElement("div");
    let div1=document.createElement("div");
     div1.setAttribute("id","show")
    let image=document.createElement("img");
    image.src=el.Image;
    div1.append(image)
    let div2=document.createElement("div");
    div2.addEventListener("click",()=>{
        loadimg(el.Image1)
    })
    let image1=document.createElement("img");
    image1.src=el.Image1;
    div2.append(image1)
    let div3=document.createElement("div");
    div3.addEventListener("click",()=>{
        loadimg(el.Image2)
    })
    let image2=document.createElement("img");
    image2.src=el.Image2;
    div3.append(image2)
    let div4=document.createElement("div");
    div4.addEventListener("click",()=>{
        loadimg(el.Image3)
    })
    let image3=document.createElement("img");
    image3.src=el.Image3;
    div4.append(image3)
    let div5=document.createElement("div");
    div5.addEventListener("click",()=>{
        loadimg(el.Image4)
    })
    let image4=document.createElement("img");
    image4.src=el.Image4;
    div5.append(image4)
    let div6=document.createElement("div");
    div6.addEventListener("click",()=>{
        loadimg(el.Image5)
    })
    let image5=document.createElement("img");
    image5.src=el.Image5;
    div6.append(image5)

      let price=document.createElement("p");
      price.textContent=`₹ ${el.Price}`;
      let name=document.createElement("p");
      name.textContent=el.Name;
      let desc=document.createElement("p");
      desc.textContent=el.Description;
      let use=document.createElement('p');
      use.textContent=el.use;
      let benifit=document.createElement("p");
      benifit.textContent=el.benifit;
      let btn= document.createElement("button");
      btn.textContent="ADD TO CART";
      btn.addEventListener("click",()=>{
              addtocart(el)
      })
      btn.setAttribute("id","cart1")
      let btn1=document.createElement("button");
      btn1.addEventListener("click",()=>{
          window.location.href="./Cart/cart.html"
      })
      btn1.textContent="Go to Cart"
      btn1.setAttribute("id","cartbtn")

      let productimg=document.createElement("div");
      productimg.setAttribute("id","top");
      productimg.append(div2,div3,div4,div5,div6)
      let property=document.createElement("p");
      property.textContent=el.exproperty;
      div.append(div1,productimg,price,name,desc,use,benifit,property,btn,btn1)
      document.getElementById("container").append(div)  
})
}
function loadimg(el){
    console.log(el)
    let main=document.getElementById("show");
   main.innerHTML=""
   let image=document.createElement("img");
   image.src=el;
   main.append(image)
}
let arr= JSON.parse(localStorage.getItem("myglammCart"))||[];

function addtocart(el){
    arr.push(el)
    console.log(arr)
  localStorage.setItem("myglammCart",JSON.stringify(arr))
  alert("item added to cart")
}