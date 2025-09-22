import type { FC } from "react";

const Banner: FC = () => {
  return (
    <section className="bg-[#3BBDF9] text-white p-8 flex flex-col md:flex-row items-center justify-between  mt-0">
      {/* Text Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Adidas Men Running Sneakers
        </h2>
        <p className="text-sm md:text-base mb-4">
          Performance and design. Taken right to the edge.
        </p>
        <button className="bg-white text-[#3BBDF9] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">
          Shop Now
        </button>
      </div>

      {/* Product Image */}
      <div className="mt-6 md:mt-0">
        <img
          src="/poster.jpg"
          alt="Sneaker"
          className="w-64 md:w-80 drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default Banner;
