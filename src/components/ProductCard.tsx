import type { FC } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type ProductCardProps = {
  image: string;
  name: string;
  rating: number;
  price: number;
  actualPrice: number;
  discount: number;
};

const ProductCard: FC<ProductCardProps> = ({ image, name, rating, price, actualPrice, discount }) => {
  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-500 w-4 h-4" />
      ) : (
        <FaRegStar key={i} className="text-gray-300 w-4 h-4" />
      )
    );

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
      {/* Product Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
          {discount}% OFF
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>

        {/* Ratings */}
        <div className="flex items-center mt-2 space-x-1">{renderStars()}</div>

        {/* Price Section */}
        <div className="mt-3">
          <span className="text-xl font-bold text-green-600">₹{price}</span>
          <span className="text-sm line-through text-gray-500 ml-2">
            ₹{actualPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
