// ============================================================
// MENIU DUOMENYS — pridėti/keisti produktus čia
// ============================================================
export interface MenuItem {
  cat: "Bruschetta" | "Pizzas" | "Especiales";
  name: string;
  es: string;
  en: string;
  price: number;
  veg?: boolean;
  spicy?: boolean;
  featured?: boolean;
  img?: string;
}

export const MENU: MenuItem[] = [
  { cat: "Bruschetta", name: "Milano", es: "4 quesos", en: "4 cheeses", price: 6.0, veg: true },
  { cat: "Bruschetta", name: "Roma", es: "Atún y cebolla", en: "Tuna and onion", price: 6.0 },
  { cat: "Bruschetta", name: "Classica", es: "Mozzarella, tomate en rodaja y aceite de ajo", en: "Mozzarella, tomato slice and garlic oil", price: 6.0, veg: true },

  { cat: "Pizzas", name: "Pan de Ajo / Queso", es: "Crema de ajo, aceite y queso", en: "Oil and garlic cream with cheese", price: 9.0, veg: true },
  { cat: "Pizzas", name: "Margarita", es: "Tomate y mozzarella", en: "Tomato and mozzarella", price: 10.0, veg: true, featured: true, img: "/images/Margarita.png" },
  { cat: "Pizzas", name: "Hawaiana", es: "Queso, tomate, jamón y piña", en: "Cheese, tomato, ham, pineapple", price: 12.5, featured: true, img: "/images/Hawaiana.png" },
  { cat: "Pizzas", name: "Barbacoa", es: "Jamón, ternera, pollo y salsa barbacoa", en: "Ham, beef, chicken and BBQ sauce", price: 12.5, featured: true, img: "/images/Barbacoa.png" },
  { cat: "Pizzas", name: "Carbonara", es: "Crema de huevo, nata, parmesano y beicon", en: "Eggs, cream, parmesan and bacon", price: 12.5 },
  { cat: "Pizzas", name: "Atún y Cebolla", es: "Atún y cebolla", en: "Tuna and onions", price: 12.5 },
  { cat: "Pizzas", name: "Atún y Gambas", es: "Atún y langostinos", en: "Tuna and prawns", price: 13.0 },
  { cat: "Pizzas", name: "Defy", es: "Tomate, mozzarella fresca, speck, rúcula y parmesano", en: "Tomato, fresh mozzarella, smoked ham, arugula and parmesan", price: 13.0 },
  { cat: "Pizzas", name: "Fume", es: "Beicon y provolón ahumado", en: "Bacon and smoked provolone", price: 13.0 },
  { cat: "Pizzas", name: "Champiñón y Beicon", es: "Champiñón y beicon", en: "Mushroom and bacon", price: 12.5 },
  { cat: "Pizzas", name: "Capriccio", es: "Pizza blanca con tomate fresco, jamón serrano, rúcula y parmesano", en: "White pizza with fresh tomato, serrano ham, arugula and parmesan", price: 13.0 },
  { cat: "Pizzas", name: "Jamón", es: "Jamón cocido", en: "Ham", price: 11.5 },
  { cat: "Pizzas", name: "Jamón y Champiñón", es: "Jamón cocido y champiñón", en: "Ham and mushroom", price: 12.5 },
  { cat: "Pizzas", name: "Siciliana", es: "Salami picante, alcaparra y anchoa", en: "Spicy salami, caper and anchovies", price: 13.0, spicy: true },
  { cat: "Pizzas", name: "Vegetal", es: "Mezcla de verduras salteadas", en: "Vegetable mix", price: 12.0, veg: true },
  { cat: "Pizzas", name: "Boluda", es: "Atún, langostinos, pimiento rojo y cebolla", en: "Tuna, prawns, red pepper and onion", price: 13.5 },
  { cat: "Pizzas", name: "4 Estaciones", es: "Jamón cocido, pimientos, anchoas y champiñón", en: "Ham, pepper, anchovies and mushroom", price: 12.5 },
  { cat: "Pizzas", name: "4 Quesos", es: "4 quesos", en: "4 cheeses", price: 12.5, veg: true, featured: true, img: "/images/4-Quesos.png" },
  { cat: "Pizzas", name: "Especial", es: "Jamón, pimientos, cebolla, huevo duro, aceitunas verdes", en: "Ham, pepper, onion, boiled egg and green olives", price: 13.0, featured: true, img: "/images/Especial.png" },
  { cat: "Pizzas", name: "Tango", es: "Jamón cocido, champiñón, salami picante, anchoas, aceitunas negras y pimientos", en: "Ham, mushroom, spicy salami, anchovies, black olives and pepper", price: 13.0 },
  { cat: "Pizzas", name: "Pampa", es: "Espinaca, mezcla de huevo, nata, parmesano, pimiento rojo", en: "Spinach, egg mix, cream, parmesan and red pepper", price: 13.5, veg: true },
  { cat: "Pizzas", name: "Fugazzeta", es: "Cebolla", en: "Onion", price: 12.0, veg: true },
  { cat: "Pizzas", name: "Tierra del Fuego", es: "Salami picante", en: "Spicy salami", price: 12.0, spicy: true },
  { cat: "Pizzas", name: "Porteña", es: "Jamón cocido, palmito, huevo duro, salsa rosa", en: "Ham, palm heart, boiled egg and cocktail sauce", price: 13.5 },
  { cat: "Pizzas", name: "Criolla", es: "Beicon, cebolla, pimiento y huevo duro", en: "Bacon, onion, pepper and boiled egg", price: 13.0 },
  { cat: "Pizzas", name: "Calzone", es: "Queso y tomate + 3 ingredientes a elegir", en: "Cheese and tomato + 3 ingredients", price: 14.0, featured: true, img: "/images/Calzone.png" },
  { cat: "Pizzas", name: "Paisana", es: "Salami picante, maíz y aceitunas negras", en: "Spicy salami, sweet corn and black olives", price: 12.5, spicy: true },
  { cat: "Pizzas", name: "Pera", es: "Pera, gorgonzola, aceitunas negras y parmesano", en: "Pear, gorgonzola, black olives and parmesan", price: 13.0, veg: true },
  { cat: "Pizzas", name: "Provolón", es: "Salsa rosa, jamón, provolón y huevo duro", en: "Pink sauce, ham, provolone and boiled egg", price: 12.5 },
  { cat: "Pizzas", name: "Jalapeña", es: "Cheddar, carne picada, jalapeño y chorizo", en: "Cheddar, minced beef, jalapeño and chorizo", price: 13.0, spicy: true },
  { cat: "Pizzas", name: "Búfala", es: "Queso búfala, tomate cherry, albahaca", en: "Buffalo cheese, cherry tomato, basil", price: 12.5, veg: true, featured: true, img: "/images/Búfala.png" },
  { cat: "Pizzas", name: "Los Canos", es: "Pizza blanca con tomate seco, aceitunas negras y champiñones", en: "White pizza with dried tomato, black olives and mushrooms", price: 12.5, veg: true },
  { cat: "Pizzas", name: "Pizza Boloñesa", es: "Carne picada, queso, tomate y cebolla", en: "Minced meat, cheese, tomato and onion", price: 13.0 },
  { cat: "Pizzas", name: "Cabra", es: "Queso de cabra, beicon y cebolla caramelizada", en: "Goat cheese, bacon and caramelized onion", price: 13.0, featured: true, img: "/images/Cabra.png" },
  { cat: "Pizzas", name: "Kebab", es: "Pollo con salsa barbacoa o yogur", en: "Chicken kebab with BBQ or yogurt sauce", price: 13.0 },
  { cat: "Pizzas", name: "Serrana", es: "Jamón serrano, albahaca y queso búfala", en: "Serrano ham, basil and buffalo cheese", price: 13.0 },
  { cat: "Pizzas", name: "Recinto", es: "Mortadela, pesto de pistacho, albahaca y parmesano", en: "Mortadella, pistachio pesto, basil and parmesan", price: 13.0 },

  { cat: "Especiales", name: "Milanesa con Patatas", es: "Milanesa con patatas fritas", en: "Breaded steak with fries", price: 15.0 },
  { cat: "Especiales", name: "Napolitana con Patatas", es: "Napolitana con patatas fritas", en: "Neapolitan-style with fries", price: 18.0 },
  { cat: "Especiales", name: "Empanadas", es: "Jamón y queso / Carne / Pollo / Humita", en: "Ham and cheese / Beef / Chicken / Corn", price: 3.0 },
];
