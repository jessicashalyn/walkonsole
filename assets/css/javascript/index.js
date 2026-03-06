const imagePaths = [
  "shoemart/51+KJgRVnzL._AC_SY575_.jpg",
  "shoemart/61oebTJthoL._AC_SY575_-removebg-preview.png",
  "shoemart/71k4xvmLqWL._AC_SY695_.jpg",
  "shoemart/Review__Carbon_Plate_Marathon_Air_Cushion_Men_Sports_Running_Shoes_Breathable_Lightweight_Women_____-removebg-preview.png",
  "shoemart/The Cloudultra 2_ Cushioned, Ultrarunning Trail Shoe.jpeg",
  "shoemart/Tendance sporty, les sneakers s'offrent un dressing couture.jpeg",
  "shoemart/Buy Campus Women's Camp-Clancy Running Shoes at Best price Now - 2023.jpeg",
  "shoemart/download (3).jpeg",
  "shoemart/download (4).jpeg",
  "shoemart/download (7).jpeg",
  "shoemart/Men's Designer Patterned Loafers - Stylish Flat Dress Shoes with Unique Orange and Black Design for Formal and Casual Outings 2025 - $99_99.jpeg",
  "shoemart/Lamincoa Womens Air Running Shoes Athletic Women Sneakers Non Slip Womens Tennis Shoes.jpeg",
  "shoemart/Originals Sneakers & Clothing _ adidas US.jpeg",
  "shoemart/Hush Puppies Mens Shoes Brown Adults Slip On Leather Cushioned Arthur Size.jpeg",
  "shoemart/geyo.jpeg",
  "shoemart/Buy_Campus_Women_s_Camp-Clancy_Running_Shoes_at_Best_price_Now_-_2023-removebg-preview.png",
  "shoemart/Lacoste Blue Loafer Shoes for Men – Premium Shoes from Wearify.jpeg",
  "shoemart/Chunky Loafers Fall Outfit.jpeg",
  "shoemart/Reebok Men's Smash Edge Sneaker.jpeg",
  "shoemart/Puma_Super_Liga_OG_Retro_Sneaker_-_Men_s_-_Free_Shipping___DSW-removebg-preview.png",
  "shoemart/Neymar Jr - 2019 2020 Neymar 2019 Png, Transparent Png , Transparent Png Image - PNGitem.jpeg",
  "shoemart/Low dunks.jpeg",
  "shoemart/Mavre Dune Orthopedic Sneakers.jpeg",
  "shoemart/Look men casual streetwear Puma.jpeg",
  "shoemart/Kids Knu Skool Shoes (4-8 Years) in Purple_ Vans UK.jpeg"
];

// Build products array
const products = [];
for (let i = 0; i < imagePaths.length; i++) {
  products.push({
    name: `Shoe ${i + 1}`,
    price: 500 + (i + 1) * 50, // sample price logic
    img: imagePaths[i]
  });
}

// Render products dynamically
const productGrid = document.getElementById("productGrid");

function renderProducts(list) {
  productGrid.innerHTML = ""; // clear existing
  list.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;

    productGrid.appendChild(card);
  });
}

// Initial render
renderProducts(products);


// ------------------- CATEGORY IMAGES -------------------

// Define your category images
const shoeImagePaths = {
  sneakers: "shoemart/Jordan 1 Retro OG Lost and Found High - 40_5.jpeg",
  dress: "shoemart/Men_s_Cedric_Dress_Lace-up_Almond_Toe_Oxfords-removebg-preview.png",
  boots: "shoemart/Originals Sneakers & Clothing _ adidas US.jpeg",
  sandals: "shoemart/Clogs _ Crocs.jpeg"
};

// Inject <img> into each category card
for (const [id, src] of Object.entries(shoeImagePaths)) {
  const category = document.getElementById(id);
  if (category) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = id + " image";
    img.classList.add("shoe-img");
    category.insertBefore(img, category.firstChild); // put image at top
  }
}

// Shake effect for category images
document.querySelectorAll(".shoe-img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("shake");
  });

  img.addEventListener("animationend", () => {
    img.classList.remove("shake");
  });
});
