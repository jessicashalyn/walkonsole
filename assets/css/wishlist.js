let wishlist = [
  { 
    id: 1, 
    name: "Puma Super Liga OG Retro Sneaker", 
    price: 1299, 
    img: "shoemart/Puma Super Liga OG Retro Sneaker - Men's - Free Shipping _ DSW.jpeg" 
  },
  { 
    id: 2, 
    name: "tendance sporty les sneakers sofferent undressing couture", 
    price: 1699, 
    img: "shoemart/Tendance_sporty__les_sneakers_s_offrent_un_dressing_couture-removebg-preview.png" 
  },
  { 
    id: 3, 
    name: "Allbirds Men's Tree Dasher Slip-On", 
    price: 1599, 
    img: "shoemart/Allbirds Men's Tree Dasher Relay, Slip-On Sneakers, Blue, Size 10.jpeg" 
  }
  
];
const wishlistContainer = document.getElementById("wishlist-items");
function renderWishlist() {
  wishlistContainer.innerHTML = "";
  wishlist.forEach(item => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.className = "wishlist-img";

    const details = document.createElement("div");
    details.className = "wishlist-details";
    details.innerHTML = `<strong>${item.name}</strong><br>Rs. ${item.price}`;

    li.appendChild(img);
    li.appendChild(details);
    wishlistContainer.appendChild(li);
  });
}
renderWishlist();
