const foods = [
    {
      name: "Cheeseburger",
      composition: "Salam Bro",
      image: "https://ik.imagekit.io/jq1luxum6oz/https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/DOUBLECHEESEBURGER8d660f.jpg?tr=w-250,h-250",
      price: 4600,
    },
    {
      name: "Hamburger",
      composition: "Burger King",
      image: "https://bloximages.newyork1.vip.townnews.com/chronicleonline.com/content/tncms/assets/v3/editorial/d/e5/de5e3bde-0a9c-11ec-90f7-db8d8f5af4e3/612e95bc58d1f.image.jpg?resize=250%2C250",
      price: 6600,
    },
    {
      name: "Pizza",
      composition: "DoDo Pizza",
      image: "https://bloximages.newyork1.vip.townnews.com/wktv.com/content/tncms/assets/v3/editorial/0/69/06925512-5caf-11ed-8d21-37999604f15b/6365c63a85811.image.png?resize=250%2C250",
      price: 20202,
    },
    {
      name: "Steak",
      composition: "MeatShop",
      image: "https://www.saveur.com/uploads/2019/03/18/OXFWJ5GX5PV4YDBOG4BI6M2IRM.jpg?auto=webp",
      price: 5600,
    },
    {
      name: "Doner",
      composition: "Big Doner",
      image: "https://xdfinn.github.io/doner-truck/images/cheese-shawarma.jpg",
      price: 1200,
    },
    {
        name: "Coca-Cola",
        composition: "Drink",
        image: "https://static.wixstatic.com/media/a4c9ad_21eca7e64dce4b0687c5ef8d4c77bfb9~mv2.jpg/v1/fill/w_250,h_250,al_c,q_90,enc_auto/a4c9ad_21eca7e64dce4b0687c5ef8d4c77bfb9~mv2.jpg",
        price: 600,
    },
     ];
     
     const foodList = document.getElementById("food-list");
     
     for (let i = 0; i < foods.length; i++) {
    const foodDiv = document.createElement("div");
         foodDiv.classList.add("food");
     
    const foodname = document.createElement("h2");
    foodname.textContent = foods[i].name;
     
    const foodImage = document.createElement("img");
    foodImage.src = foods[i].image;
    foodImage.alt = foods[i].name;

    
    const foodcomposition = document.createElement("p");
    foodcomposition.textContent = foods[i].composition;

    const foodprice = document.createElement("h5");
    foodprice.textContent = foods[i].price;
     
    foodDiv.appendChild(foodname);
    foodDiv.appendChild(foodImage);
    foodDiv.appendChild(foodcomposition)
    foodDiv.appendChild(foodprice);
    foodList.appendChild(foodDiv);
     }
