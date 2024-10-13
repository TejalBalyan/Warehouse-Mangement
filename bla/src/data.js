// src/data.js
const data = [
    {
      id: "1",
      name: "Main Warehouse",
      parent_godown: null,
      children: [
        {
          id: "2",
          name: "Section A",
          parent_godown: "1",
          children: [],
          items: [
            {
              item_id: "item1",
              name: "Screwdriver",
              quantity: 100,
              category: "Tools",
              price: 20,
              status: "in_stock",
              brand: "Black & Decker",
              image_url: "https://m.media-amazon.com/images/I/41-T3GBGYUL.jpg",
              attributes: { type: "Hand Tool", material: "Plastic", warranty_years: 1 },
            },
          ],
        },
      ],
    },
  ];
  
  export default data;
  