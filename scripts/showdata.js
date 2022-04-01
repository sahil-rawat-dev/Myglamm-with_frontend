function showdata(data,product){
    data.forEach(function (el){
        let div=document.createElement("div");
        div.setAttribute("id","innerchild");
        div.addEventListener("click",()=>{
            var detail=[];
            detail.push(el);
            localStorage.setItem("prdc",JSON.stringify(detail));
            window.location.href="product.html";
        })
        let image=document.createElement("img");
        image.src=el.Image;
        let price=document.createElement("p");
        price.textContent=`₹ ${el.Price}`;
        let name=document.createElement("p");
        name.textContent=el.Name;
        let desc=document.createElement("p");
        desc.textContent=el.Description;
        div.append(image,price,name,desc)
        product.append(div)
    })
}
export{showdata}