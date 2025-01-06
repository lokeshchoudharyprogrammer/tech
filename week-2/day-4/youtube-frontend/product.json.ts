interface RootObject {
  status: string;
  message: string;
  products: Product[];
}

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color?: string;
  category: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;
}