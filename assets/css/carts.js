document.addEventListener("DOMContentLoaded", () => {
  const cartItemsSection = document.getElementById("cart-items");
  const suggestedItemsSection = document.getElementById("suggested-items");

  // Cart item
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";

  const cartImg = document.createElement("img");
  cartImg.src = "shoemart/Puma Super Liga OG Retro Sneaker - Men's - Free Shipping _ DSW.jpeg"; 
  cartImg.alt = "Puma Super Liga OG Retro Sneaker";

  const cartDetails = document.createElement("div");
  cartDetails.className = "item-details";
  cartDetails.innerHTML = `
    <h3>Puma Super Liga OG Retro Sneaker - Men's</h3>
    <p>Rs. 1299 <del>Rs. 1499</del> ⭐ 4.5 | (1235)</p>
    <p>Color: White/Black</p>
  `;

  cartItem.appendChild(cartImg);
  cartItem.appendChild(cartDetails);
  cartItemsSection.appendChild(cartItem);

  // Suggested item
  const suggestedItem = document.createElement("div");
  suggestedItem.className = "suggested-item";

  const suggestedImg = document.createElement("img");
  suggestedImg.src = "shoemart/Mens_Argyle_Pattern_Non_Elastic_Socks_Black_-_Black___6-11-removebg-preview.png"; 
  suggestedImg.alt = "Mens Argyle Pattern Non Elastic Socks";

  const suggestedDetails = document.createElement("div");
  suggestedDetails.className = "item-details";
  suggestedDetails.innerHTML = `
    <h3>Mens Argyle Pattern Non Elastic Socks Black - Size 6-11</h3>
    <p>Rs. 399 <del>Rs. 499</del> ⭐ 4.5 | (105)</p>
    <p>Color: Multicolor</p>
  `;

  suggestedItem.appendChild(suggestedImg);
  suggestedItem.appendChild(suggestedDetails);
  suggestedItemsSection.appendChild(suggestedItem);
});
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the buttons
  const checkoutBtn = document.querySelector(".checkout-btn");
  const continueBtn = document.querySelector(".continue-btn");

  // Proceed to Checkout
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      window.location.href = "checkout.html"; 
    });
  }

  // Continue Shopping
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      window.location.href = "index.html"; 
    });
  }
});
