import NikeImg from "../assets/images/Brands/Nike.webp";
import AdidasImg from "../assets/images/Brands/Adidas.webp";
import ReebokImg from "../assets/images/Brands/Reebok.webp";
import VansImg from "../assets/images/Brands/Vans.webp";
import PumaImg from "../assets/images/Brands/Puma.webp";
import OtherImg from "../assets/images/Brands/Other.webp";

import AirJordanShadowImg from "../assets/images/AirForceShadow.png";
import Shoes01 from "../assets/images/Shoes01.png";
import AirMax from "../assets/images/AirMax.png";
import Reebok01 from "../assets/images/Reebok01.png";
import AirJordanKakty from "../assets/images/AirJordanKakty.png";
import AirJordan from "../assets/images/AirJordan.png";

export interface BrandInterface {
  brand: string;
  image: string;
}

export const brands: BrandInterface[] = [
  { brand: "Nike", image: NikeImg },
  { brand: "Adidas", image: AdidasImg },
  { brand: "Reebok", image: ReebokImg },
  { brand: "Vans", image: VansImg },
  { brand: "Puma", image: PumaImg },
  { brand: "Other", image: OtherImg },
];

export interface ProductInterface {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  lastPrice?: number;
}
export const products: ProductInterface[] = [
  {
    id: 1000 * Math.random(),
    name: "Air Force 1 Shadow",
    brand: "Nike",
    image: AirJordanShadowImg,
    price: 100,
    lastPrice: 120,
  },
  {
    id: 1000 * Math.random(),
    name: "Shoes 01",
    brand: "unknown",
    image: Shoes01,
    price: 56.38,
  },
  {
    id: 1000 * Math.random(),
    name: "Air Max",
    brand: "Nike",
    image: AirMax,
    price: 102.04,
  },
  {
    id: 1000 * Math.random(),
    name: "Reebok 01",
    brand: "Reebok",
    image: Reebok01,
    price: 69.9,
    lastPrice: 75,
  },
  {
    id: 1000 * Math.random(),
    name: "Air Jordan Kakty",
    brand: "Nike",
    image: AirJordanKakty,
    price: 104.9,
  },
  {
    id: 1000 * Math.random(),
    name: "Air Jordan",
    brand: "Nike",
    image: AirJordan,
    price: 125,
    lastPrice: 130,
  },
];
