function navbar(){
    return`<div id="main">
    <div id="navbar1">
    <div id="nav1">
        <button id="Shipping"><i id="fa1" class="fa-solid fa-gift"></i>myGlamm Superfoods Cacao From Africa</button>
        <button id="collect">SHOP NOW</button>

    </div>
    
    <div id="nav2">
    <button class="icon"><i id="fas1" class="fas fa-store"></i>MyGlamm Store</button>
</div>
</div>
<div id="outer">
<div id="navbar123">
    <img id="img1" src="https://www.investindia.gov.in/themes/investindia/image/unicorns/2021/MyGlamm.png" alt="">
    <div class="search1">
        <div class="search2"><i id="search" class="fas fa-search"></i> <div>
        <div ><input id="sear"type="text" placeholder="Find Lipstick,Eyeliner,Makeup,Tutorial,etc"></div>

    </div></div></div>

    <div id="current">
        <div id="cart"><i id="far1" class="fas fa-trash-restore"></i></i></div>
        <div> <button type="button" class="btn  btn-lg show-modal" data-toggle="modal" data-target="#myModal"><i id="far2" class="far fa-user"></i></button></div>
   
    </div>
</div>
<div id="navbar124">
    <div id="parts1" onmouseover="navbar1()">HOME</div>
    <div id="parts2" onmouseover="navbar2()">MAKE UP</div>
    <div id="parts3" onmouseover="navbar3()">HAIR CARE</div>
    <div id="parts4" onmouseover="navbar4()">SKIN CARE</div>
    <div id="parts5" onmouseover="navbar5()">SANITIZING CARE</div>
    <div id="parts6" onmouseover="navbar6()">COLLECTION</div>
    <div id="parts7" onmouseover="navbar7()">REWARDS</div>
    <div id="parts8" onmouseover="navbar8()">MYGLAMM STUDIO</div>
    <div id="parts9" onmouseover="navbar9()">OFFERS</div>   
</div>
</div>
    </div>`
}
export {navbar} ;