import type { FC } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "/WhatsApp Image 2025-09-22 at 01.21.21_b2ca6466.jpg",
    name: "Sneaker",
    rating: 4,
    price: 240,
    actualPrice: 400,
    discount: 40,
  },
  {
    image: "/sneaker.jpeg",
    name: "Running Shoes",
    rating: 5,
    price: 1200,
    actualPrice: 1800,
    discount: 33,
  },
  {
    image: "/product3.jpg",
    name: "Casual Shoes",
    rating: 3,
    price: 800,
    actualPrice: 1200,
    discount: 20,
  },
   {
    image: "/sneaker.jpeg",
    name: "Casual Shoes",
    rating: 3,
    price: 800,
    actualPrice: 1200,
    discount: 20,
  },
   {
    image: "/product2.jpg",
    name: "Casual Shoes",
    rating: 3,
    price: 800,
    actualPrice: 1200,
    discount: 20,
  },
   {
    image: "/product1.jpg",
    name: "hand Bag",
    rating: 3,
    price: 800,
    actualPrice: 1200,
    discount: 20,
  },
];

const ProductGrid: FC = () => {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-y-auto max-h-[70vh] p-2">
        {products.map((p, index) => (
          <ProductCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
