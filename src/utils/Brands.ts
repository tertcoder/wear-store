import NikeImg from "../assets/images/Brands/Nike.webp";
import AdidasImg from "../assets/images/Brands/Adidas.webp";
import ReebokImg from "../assets/images/Brands/Reebok.webp";
import VansImg from "../assets/images/Brands/Vans.webp";
import PumaImg from "../assets/images/Brands/Puma.webp";
import OtherImg from "../assets/images/Brands/Other.webp";

interface brandInterface {
  brand: string;
  image: string;
}

export const brands: brandInterface[] = [
  { brand: "Nike", image: NikeImg },
  { brand: "Adidas", image: AdidasImg },
  { brand: "Reebok", image: ReebokImg },
  { brand: "Vans", image: VansImg },
  { brand: "Puma", image: PumaImg },
  { brand: "Other", image: OtherImg },
];
