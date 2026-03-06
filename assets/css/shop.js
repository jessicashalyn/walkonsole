document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const orderSummary = document.getElementById("order-summary");
  const products = [
    {
      name: "Puma Super Liga OG Retro Sneaker - Men's",
      price: 1299,
      oldPrice: 1499,
      rating: "⭐ 4.5 | (1235)",
      color: "White/Black",
      img: "shoemart/Puma Super Liga OG Retro Sneaker - Men's - Free Shipping _ DSW.jpeg"
    },
    {
      name: "Mens Argyle Pattern Non Elastic Socks Black - Size 6-11",
      price: 399,
      oldPrice: 499,
      rating: "⭐ 4.5 | (105)",
      color: "Multicolor",
      img: "shoemart/Mens_Argyle_Pattern_Non_Elastic_Socks_Black_-_Black___6-11-removebg-preview.png"
    },
    {
      name: "Allbirds Men's Tree Dasher Slip-On",
      price: 1599,
      oldPrice: 1799,
      rating: "⭐ 4.6 | (210)",
      color: "Blue",
      img: "shoemart/Allbirds Men's Tree Dasher Relay, Slip-On Sneakers, Blue, Size 10.jpeg"
    }
  ];
  if (orderSummary) {
    const gifContainer = document.createElement("div");
    gifContainer.className = "gif-container";

    const gifImg = document.createElement("img");
    gifImg.src = "shoemart/40d39621f6d6b02236bc0b1418e3e7a6.gif"; // path to your GIF file
    gifImg.alt = "Special Offer";

    gifContainer.appendChild(gifImg);
    orderSummary.parentNode.insertBefore(gifContainer, orderSummary);
  }

  // Render products dynamically
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    const details = document.createElement("div");
    details.className = "product-details";
    details.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rs. ${product.price} <del>Rs. ${product.oldPrice}</del></p>
      <p>${product.rating}</p>
      <p>Color: ${product.color}</p>
    `;

    card.appendChild(img);
    card.appendChild(details);
    productList.appendChild(card);
  });
});
