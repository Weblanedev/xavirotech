import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  img: StaticImageData | string;
  title: string;
  category: string;
  price: number;
  discount: number;
  quantity: number;
  brand?: string;
  old_price?: number;
  orderQuantity?: number;
  sm_desc: string;
  details: {
    specifications: string;
    main_features: string[];
  };
  related_images: Array<StaticImageData | string>
  reviews: {
    id: number;
    user?: StaticImageData | string;
    name: string;
    review_text: string;
    rating: number;
  }[]
}
