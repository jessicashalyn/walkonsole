document.addEventListener("DOMContentLoaded", () => {
  const featuredGrid = document.getElementById("featuredGrid");
  const trendingGrid = document.getElementById("trendingGrid");
  const featuredCollections = [
    { 
      title: "Monochrome Collection", 
      desc: "Perfect for: Modern looks and minimalist aesthetics.", 
      btn: "Check Now", 
      img:"shoemart/#monochromatic #monochrome #monochromestyle #fashionista #fashion #fashionstyle.jpeg" 
    },
    { 
      title: "Sport & Activewear", 
      desc: "Perfect for: training, gym, or high-movement activities.", 
      btn: "Check Now", 
      img: "shoemart/New Balance x J_Crew 2017 Collection.jpeg" 
    },
    { 
      title: "Seasonal Picks", 
      desc: "Perfect for: current trends — like Summer Slides or Winter Boots.", 
      btn: "Check Now", 
      img: "shoemart/Men Letter Graphic Lace Up Decor Sneakers.jpeg" 
    },
    { 
      title: "Travel-Friendly", 
      desc: "Perfect for: vacations, weekend getaways, and long walks.", 
      btn: "Check Now", 
      img: "shoemart/Women's The Legacy.jpeg" 
    },
    { 
      title: "Work & Office Shoes", 
      desc: "Perfect for: daily wear at the office or business-casual outfits.", 
      btn: "Check Now", 
      img: "shoemart/Chunky Loafers Fall Outfit.jpeg" 
    },
    { 
      title: "Limited Edition", 
      desc: "Perfect for: collectors and statement-makers.", 
      btn: "Check Now", 
      img: "shoemart/Air max plus.jpeg" 
    }
  ];

  // Trending products with images
  const trendingProducts = [
    { 
      title: "Sneakers", 
      desc: "Fresh, bold, and always comfortable.", 
      btn: "Shop Now", 
      img: "shoemart/Chic_Air_Force_1_Custom_Black_White_Gray_Shoes_Monochrome_Shadow_Essence_Mens_Womens_2024-removebg-preview.png" 
    },
    { 
      title: "Boots", 
      desc: "Built to go the distance.", 
      btn: "Shop Now", 
      img: "shoemart/download (1).jpeg" 
    },
    { 
      title: "Dress Shoes", 
      desc: "Polished. Powerful. Timeless.", 
      btn: "Shop Now", 
      img: "shoemart/Men's Designer Patterned Loafers - Stylish Flat Dress Shoes with Unique Orange and Black Design for Formal and Casual Outings 2025 - $99_99.jpeg" 
    },
    { 
      title: "Athletic & Performance", 
      desc: "Fresh, bold, and always comfortable.", 
      btn: "Shop Now", 
      img: "shoemart/Lamincoa_Womens_Air_Running_Shoes_Athletic_Women_Sneakers_Non_Slip_Womens_Tennis_Shoes-removebg-preview.png" 
    }
  ];

  // Render cards with images
  function renderCards(data, container) {
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <button>${item.btn}</button>
      `;
      container.appendChild(card);
    });
  }

  renderCards(featuredCollections, featuredGrid);
  renderCards(trendingProducts, trendingGrid);
});
