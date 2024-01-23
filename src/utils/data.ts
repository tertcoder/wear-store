import NikeImg from "../assets/images/Brands/Nike.webp";
import AdidasImg from "../assets/images/Brands/Adidas.webp";
import ReebokImg from "../assets/images/Brands/Reebok.webp";
import VansImg from "../assets/images/Brands/Vans.webp";
import PumaImg from "../assets/images/Brands/Puma.webp";
import OtherImg from "../assets/images/Brands/Other.webp";

export interface shoesInterface {
  brand: string;
  created_at: string;
  description?: string;
  id: string;
  image: string;
  lastPrice?: number;
  name: string;
  price: number;
}
export interface BrandInterface {
  brand: string;
  image: string;
}
export interface ProductInterface {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  lastPrice?: number;
}

export const brands: BrandInterface[] = [
  { brand: "Nike", image: NikeImg },
  { brand: "Adidas", image: AdidasImg },
  { brand: "Reebok", image: ReebokImg },
  { brand: "Vans", image: VansImg },
  { brand: "Puma", image: PumaImg },
  { brand: "Other", image: OtherImg },
];
