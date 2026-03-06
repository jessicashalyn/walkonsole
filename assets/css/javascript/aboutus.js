document.addEventListener("DOMContentLoaded", () => {
  const img1Box = document.getElementById("aboutimages1");
  const img2Box = document.getElementById("aboutimages2");
  // Add first image
  if (img1Box) {
    const img1 = document.createElement("img");
    img1.src = "shoemart/Men's Cedric Dress Lace-up Almond Toe Oxfords.jpeg";
    img1.alt = "Formal Brown Leather Shoe";
    img1Box.appendChild(img1);
  }
  // Add second image
  if (img2Box) {
    const img2 = document.createElement("img");
    img2.src = "shoemart/Men Letter Graphic Lace Up Decor Sneakers.jpeg";
    img2.alt = "Yellow and Black Sneaker";
    img2Box.appendChild(img2);
  }
});
