import type { FC } from "react";
import Banner from "./Banner";
import FilterPanel from "./FilterPanel";
import ProductGrid from "./ProductGrid";

const Home: FC = () => {
  return (
    <div className="px-2 md:px-1 pt-0">
      <Banner />
      <FilterPanel />
      <ProductGrid />
    </div>
  );
};

export default Home;
