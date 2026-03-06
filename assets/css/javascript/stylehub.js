document.addEventListener("DOMContentLoaded", () => {
  const stylehubList = document.getElementById("stylehub-list");

  const styles = [
    { 
      title: "Streetwear Sneakers", 
      desc: "Casual, bold, and perfect for everyday looks.", 
      img: "shoemart/Shoes, Sneakers, Boots, & Clothing + FREE SHIPPING _ Zappos_com.jpeg", 
      btn: "Start Shopping" 
    },
    { 
      title: "Formal Shoes", 
      desc: "Polished footwear for business and special occasions.", 
      img: "shoemart/Men's Designer Patterned Loafers - Stylish Flat Dress Shoes with Unique Orange and Black Design for Formal and Casual Outings 2025 - $99_99.jpeg", 
      btn: "Start Shopping" 
    },
    { 
      title: "Athletic & Running Shoes", 
      desc: "Designed for movement, comfort, and performance.", 
      img: "shoemart/Timberland_s_Ultra-Flexible_New_Boots_Are_Built_to_Move-removebg-preview.png", 
      btn: "Start Shopping" 
    }
  ];

  styles.forEach(style => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${style.img}" alt="${style.title}">
      <h3>${style.title}</h3>
      <p>${style.desc}</p>
      <button>${style.btn}</button>
    `;
    stylehubList.appendChild(card);
  });
});
