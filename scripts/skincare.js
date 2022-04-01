import{navbar}from"../components/navbar.js"
  let div=document.getElementById("navcont");
  div.innerHTML=navbar();
let data=[{
    "Name":"WIPEOUT GERM Killing Face Wash",
     "Price":119,
    "Image":"https://files.myglamm.com/site-images/800x800/Facewash_3.jpg",
   "Description":"Tea Tree Oil & Vitamin E-infused Face Wash",
     "Use":`Kills germs
     Removes impurities, nourishes, moisturizes and keeps face germ-free
     Enriched with tea tree oil a natural antiviral and antibacterial agent
     Enhanced with vitamin E beads that nourishes the skin
     Enriched with cucumber extract that moisturizes the skin and keeps it soft
     Enriched with aloe vera extract that soothes and calms the skin
     Infused with turmeric extract, an anti-inflammatory that reduces irritation and pigmentation
     Infused with sandalwood extract, an antiseptic that purifies the skin
     Infused with tulsi oil, an antifungal that treats infection and other skin ailments
     Contains chlorhexidine known for its disinfectant powers
     Non-comedogenic`,
    "benifit":`Kills germs
    Light gel texture
    Removes impurities, nourishes, moisturizes and keeps face germ-free
    Non-comedogenic
    Gentle on your skin, tough on dirt, pollution and germs`,
    "Image1":"https://files.myglamm.com/site-images/800x800/Facewash_3.jpg",
    "Image2":"https://files.myglamm.com/site-images/800x800/GFW1-(3).jpg",
    "Image3":"https://files.myglamm.com/site-images/800x800/GFW1-(2).jpg",
    "Image4":"https://files.myglamm.com/site-images/800x800/Facewsh-(4).jpg",
    "Image5":"https://files.myglamm.com/site-images/800x800/Wipeout-Group_37.jpg",
     },
    {
    "Name":"K.Play Sheet Mask",
    "Price":145,
    "Image":"https://files.myglamm.com/site-images/800x800/1645444170737-BRSGt-(1).jpeg",
    "Description":"Mandarin-infused Brightening Sheet Mask",
     "Use":`Apply this face mask after cleansing and toning your skin.
     Align the mask using the eye and nose cut-outs as a guide and spread it out across your face.
     Leave the mask on for 20-30 minutes and relax.
     Remove the mask and gently pat any excess serum onto the face and neck. Let your skin soak it all in.`,
    "benifit":`Enriched with mandarin and white truffle
    Brightening and moisturising
    Strengthens and rejuvenates the skin
    Mild formula
    Gives your skin a youthful glow`,
    "Image1":"https://files.myglamm.com/site-images/800x800/BRSGt-(2).jpg",
    "Image2":"https://files.myglamm.com/site-images/800x800/BRSGt-(3).jpg",
    "Image3":"https://files.myglamm.com/site-images/800x800/BRSGt-(5).jpg",
    "Image4":"https://files.myglamm.com/site-images/800x800/BRSGt-(6).jpg",
    "Image5":"https://files.myglamm.com/site-images/800x800/BRSGt-(4).jpg",
     },
    {
    "Name":"MYGLAMM WIPEOUT GERM KILLING FACE SCRUB - ROSE & HONEY",
    "Price":129,
     "Image":"https://files.myglamm.com/site-images/800x800/VFFD-(1).jpg",
    "Description":"Rose & Honey Infused Germ-killing & Purifying Face scrub",
     "Use":`Kills germs

     Exfoliates dead skin cells 
     
     Antioxidant honey extracts
     
     Soothing rose extracts
     
     Leaves skin feeling fresh and soft`,
    "benifit":`Benefits

    Exfoliates skin
    Removes dead skin and impurities for smooth skin.
    
    Soothing & Antioxidant
    Along with  anti-bacterial and anti-fungal properties,  gives your skin a relaxing and calming effect. 
    
    Kills germs
    The rose & honey face scrub formulated with chlorhexidine safeguards against germs and protects skin from dirt and pollution.`,
    "Image1":"https://files.myglamm.com/site-images/800x800/VFFD-(2).jpg",
    "Image2":"https://files.myglamm.com/site-images/800x800/FSC3.jpg",
    "Image3":"https://files.myglamm.com/site-images/800x800/FSC4.jpg",
    "Image4":"https://files.myglamm.com/site-images/800x800/FSC5.jpg",
    "Image5":"https://files.myglamm.com/site-images/800x800/FSC6.jpg",
           },
    {
    "Name":"MANISH MALHOTRA KESAR FACE PACK GEL",
    "Price":945,
    "Image":"https://files.myglamm.com/site-images/800x800/1645445886291-KESAR-FACE-PACK-GEL-1200.jpeg",
    "Description":"Gel-based Natural Face Pack",
    "Use":`Gel based face pack 
    Made from pure, concentrated aloe vera juice and enriched with ayurvedic ingredients like kesar
    Blended with kesar and ginger
    Lightweight formula
    Deeply nourishes dull, dehydrated skin
    Helps lighten darks spots and pigmentation
    Acts as a powerful antioxidant and detoxes the skin
    Helps heal and regenerate the skin
    Brightens the skin
    Improves elasticity and tones the skin
    Improves blood circulation for healthier, radiant skin
    Formulated for all skin types`,
    "benifit":`Deeply nourishing
    Intensely hydrating
    Helps lighten darks spots and pigmentation
    Helps heal and regenerate the skin
    Brightens the skin
    Improves elasticity and tones the skin
    Detoxes the skin
    Soaks the skin in antioxidants
    Improves circulation for healthier, radiant skin`,
    "Image1":"https://files.myglamm.com/site-images/800x800/KESAR-CLOSE-UP_1.jpg",
    "Image2":"https://files.myglamm.com/site-images/800x800/KESAR-FACE-PACK-GEL_3.jpg",
    "Image3":"https://files.myglamm.com/site-images/800x800/Kesar_2.jpg",
    "Image4":"https://files.myglamm.com/site-images/800x800/Aloe-Vera_3.jpg",
    "Image5":"https://files.myglamm.com/site-images/800x800/vegan_29.jpeg",
        },
    {
    "Name":"MYGLAMM 10% NIACINAMIDE CLARIFYING SERUM ENRICHED WITH MORINGA & TIGER GRASS",
     "Price":699,
     "Image":"https://files.myglamm.com/site-images/800x800/Product-shot-01_4.jpg",
     "Description":"Clinically Tested, Highly Concentrated Face Serum with Niacinamide & Natural Extracts",
    "Use":`Highly concentrated formula with 10% Niacinamide

    Enriched with nourishing moringa & tiger grass
    
    Unique light-weight, serum-gel texture
    
    Balances out & evens skin tone
    
    Has anti-inflammatory benefits 
    
    Helps regulate sebum production
    
    Reduces blemishes and tackles redness`,
     "benifit":`Benefits
     Treats Acne and Blemishes
     Niacinamide concentration helps reduce dark spots, treat hyperpigmentation and reduce pore lining; resulting in reduced acne. This makes it the perfect choice for oily skin.
     Provide Moisture Boost
     The addition of hyaluronic acid in this formula allows the skin to retain moisture, resulting in smooth, hydrated skin.
     Reduces Inflammation 
     Formulated to help reduce redness and inflammation of the skin, and the natural antioxidants added to this formula calm and soothe the skin.
     The MyGlamm Serum Range is rooted in science-based innovation combined with natural actives formulated especially for Indian skin, to deliver lasting results and a more balanced, even and healthy skin tone.`,
     "Image1":"https://files.myglamm.com/site-images/800x800/Key-Ingredients-08_4.jpg",
     "Image2":"https://files.myglamm.com/site-images/800x800/Benefit-04_4.jpg",
     "Image3":"https://files.myglamm.com/site-images/800x800/Good-for-you-05_4.jpg",
     "Image4":"https://files.myglamm.com/site-images/800x800/How-to-use-When-to-use-06_4.jpg",
     "Image5":"https://files.myglamm.com/site-images/800x800/Product-shot-01_4.jpg",
            },
    {
    "Name":"MYGLAMM YOUTHFULL HYDRATING CLEANSING MASK WITH WATER BANK TECHNOLOGY",
    "Price":1095,
    "Image":"https://files.myglamm.com/site-images/800x800/Cleansing-Mask-Swatch.jpg",
    "Description":"Marine 3-in-1 Exfoliating, Cleansing & Hydrating Face Mask",
     "Use":`Unique jelly-like texture
     High-moisture exfoliating mask
     Foams well to effectively remove dirt & impurities
     Glides softly & thickly on skin
     Deeply hydrates & leaves skin soft & clean`,
    
     "benifit":`Long-lasting hydration: This cleansing mask is formulated with a unique gelling system that absorbs and retains moisture long after use.
     Massages and exfoliates: Get that spa experience without stepping out. The soft, jelly-like texture of this mask exfoliates while providing you with a gentle massage as you apply it.
     Introducing MyGlamm YOUTHfull - a comprehensive, first-of-its-kind, marine-inspired skincare range made in South Korea. It uses Water Bank Technology that enables faster penetration of moisture into the skin. It also contains Marine Complex 5, a blend of marine actives rich in nutrients that have anti-inflammatory and anti-ageing benefits. A complete range of skincare essentials that will transform your skin, keeping it fresh, hydrated and glowing.`,
     "Image1":"https://files.myglamm.com/site-images/800x800/Cleansing-Mask-Swatch_1.jpg",
     "Image2":"https://files.myglamm.com/site-images/800x800/Cleansing-Mask-Open-Product.jpg",
     "Image3":"https://files.myglamm.com/site-images/800x800/Closed-Product.jpg",
     "Image4":"https://files.myglamm.com/site-images/800x800/vegan_101.jpeg",
     "Image5":"https://files.myglamm.com/site-images/800x800/Cleansing-Mask-Swatch.jpg",
                },
    {
    "Name":"SUPERCHARGED SKIN - FACE CREAM & SLEEPING MASK COMBO",
    "Price":699,
    "Image":"https://files.myglamm.com/site-images/800x800/SUPERFOODS-Strawberry-&-Blueberry-Face-Cream-SUPERFOODS-Blueberry-&-Kakadu-Plum-Sleeping-Mask.jpg",
    "Description":"Thai duo will help you charge your face and give you a natural radiance like never before.",
    "Use":`With the goodness of exotic Superfoods from Thailand, this face cream & sleeping mask combo gives you nourishment like no other. The berry-infused, lightweight face cream is enriched with nourishing extracts of Superfoods- strawberry & blueberry, its lightweight texture makes it feel natural and non-greasy on your skin. The revitalizing overnight formula of the sleeping mask gives your skin a well-rested and radiant appearance the next morning. Rich in vitamin B3, this sleeping mask revives your skin’s natural glow & recharges dehydrated skin by balancing its moisture levels while you sleep. `,
    "benifit":`Brightens the skin: This strawberry face cream brightens the skin & lightens the appearance of scars.  
    Fights free radicals: Contains antioxidant-rich strawberries & blueberries that help fight free radicals to give you healthier skin. 
    Moisturizes & protects: Contains shea-butter that hydrates & nourishes the skin.
    Prevents premature ageing: The antioxidant content promotes collagen production, which in turn improves the skin’s elasticity 
    Lightweight texture: This face cream is super-light & gets quickly absorbed into the skin.
    SUPERFOODS Blueberry & Kakadu Plum Sleeping Mask
    
    Repairs & revitalizes skin: This natural sleeping mask revives skin’s radiance with a Vit B3 (Niacinamide) gel network that gets activated when applied to the skin.
    Nourishes and hydrates skin: Kakadu plum extracts provide intense nutrition to the skin and add to its natural moisture level.
    Rich in antioxidants: Blueberry extracts combat daily free radical damage.
    Enhanced Properties: `,
    "Image1":"https://files.myglamm.com/site-images/800x800/SUPERFOODS-Strawberry-&-Blueberry-Face-Cream-SUPERFOODS-Blueberry-&-Kakadu-Plum-Sleeping-Mask.jpg",
    "Image2":"https://files.myglamm.com/site-images/800x800/Blueberry---Kakadu-Plum-Sleeping-Mask-2_2.jpg",
    "Image3":"https://files.myglamm.com/site-images/800x800/SUPERFOODS-Strawberry-&-Blueberry-Face-Cream-SUPERFOODS-Blueberry-&-Kakadu-Plum-Sleeping-Mask.jpg",
    "Image4":"https://files.myglamm.com/site-images/800x800/Blueberry---Strawberry-Face-Cream-2_2.jpg",
    "Image5":"https://files.myglamm.com/site-images/800x800/Blueberry---Kakadu-Plum-Sleeping-Mask-2_2.jpg",
                },]

    localStorage.setItem("skincare",JSON.stringify(data));
    import{footer}from"../component/footer.js";
   let down=document.getElementById("down");
    down.innerHTML=footer()
  import{showdata}from"./showdata.js"
    var arr=JSON.parse(localStorage.getItem("skincare"));
    console.log(arr)
    let product=document.getElementById("product");
   showdata(arr,product)