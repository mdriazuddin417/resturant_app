import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png";

export const heroData = [
  {
    id: 1,
    name: "Icecream",
    description: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    description: "Fresh Strawberries",
    price: "15.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Chicken kebab",
    description: "Mixed Kebab Plate",
    price: "8.25",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    description: "Mixed Kebab",
    price: "5.25",
    imageSrc: Fi1,
  },
];

export const categories = [
  { id: 1, name: "Chicken", urlParamName: "chicken" },
  { id: 2, name: "Curry", urlParamName: "curry" },
  { id: 3, name: "Rice", urlParamName: "rice" },
  { id: 4, name: "Fish", urlParamName: "fish" },
  { id: 5, name: "Fruits", urlParamName: "fruits" },
  { id: 6, name: "Icecream", urlParamName: "icecreame" },
  { id: 7, name: "Soft Drinks", urlParamName: "drinks" },
];
