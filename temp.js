const hoverMenTopWearMenu = [
    "Printed T-Shirts",
    "Oversized T-shirts",
    "Plain T-Shirts",
    "Full Sleeve T-Shirts",
    "Half Sleeve T-Shirts",
    "Henleys",
    "Polo T-Shirts",
    "T-shirt Combos",
    "Sweatshirts & Hoodies",
    "Jackets",
    "Sweaters",
    "Shirts",
    "Co-ord Sets",
    "Kurtas",
    "Vests",
    "Plus Size Topwear",
    "Customize T-shirts",
    "All Topwear",
  ];

  const result = hoverMenTopWearMenu.map((item) => {
    const name = item;
    const search = { 
      name: item.substring(0, item.lastIndexOf(' ')),
      description: item.substring(0, item.lastIndexOf(' ')),
    };
    const filter = {
      subCategory: item.substring(item.lastIndexOf(' ') + 1),
    };
    
    return { name, search, filter };
  });
  
  console.log(result);


 