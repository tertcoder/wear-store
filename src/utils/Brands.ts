import NikeImg from "../assets/images/Brands/Nike.png";
import AdidasImg from "../assets/images/Brands/Adidas.png";
import ReebokImg from "../assets/images/Brands/Reebok.png";
import VansImg from "../assets/images/Brands/Vans.png";
import PumaImg from "../assets/images/Brands/Puma.png";
import OtherImg from "../assets/images/Brands/Other.png";

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
