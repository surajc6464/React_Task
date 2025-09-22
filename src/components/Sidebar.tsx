

const Sidebar: React.FC = () => {

  const COLORS = [
    { id: "blue", label: "Blue", hex: "#3B82F6" },
    { id: "red", label: "Red", hex: "#EF4444" },
    { id: "black", label: "Black", hex: "#111827" },
    { id: "yellow", label: "Yellow", hex: "#F59E0B" },
    { id: "pink", label: "Pink", hex: "#EC4899" },
    { id: "white", label: "White", hex: "#FFFFFF" },
  ];

  const BRANDS = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "Under Armour",
    "Skechers",
    "Vans",
    "New Balance",
    "Fila",
    "Woodland",
    "Bata",
    "Converse",
  ];

  return (
    <div className="h-full w-60 scroll-auto">
        {/* Hot Deals Section */}
        <div className="bg-[#F6F7F9] mb-8 px-7 rounded-md">
          <h3 className="text-lg font-bold mb-4">Hot Deals</h3>
          <div className="space-y-2">
            {["Nike", "Airmax", "Adidas", "Vans", "All Stars"].map(
              (brand, i) => (
                <div key={i} className="flex justify-between px-2 py-2">
                  <span>{brand}</span>
                  <span className="text-blue-600 font-medium">
                    {Math.floor(Math.random() * 100)}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-8 px-4 bg-[#F6F7F9] rounded-md">
          <h3 className="text-lg font-bold mb-4">Prices</h3>
          <p className="text-sm text-gray-600 mb-2">Range: $13.99 - $25.99</p>
          <input
            type="range"
            min="1399"
            max="2599"
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>

        {/* Colors */}
        <div className="mb-8 px-4 bg-[#F6F7F9] rounded-md">
          <h3 className="text-lg font-bold mb-4">Color</h3>
          <div className="flex gap-3 flex-wrap">
            {COLORS.map((c) => (
              <label key={c.id}>
                <input
                  type="radio"
                  name="color"
                  className="appearance-none w-6 h-6 rounded-full border border-gray-400 
                             checked:ring-2 checked:ring-offset-1"
                  style={{ backgroundColor: c.hex }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-8 px-4 bg-[#F6F7F9] rounded-md">
          <h3 className="text-lg font-bold mb-4">Brands</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-2 scrollbar-hide">
            {BRANDS.map((brand, i) => (
              <div key={i} className="flex justify-between">
                <span>{brand}</span>
                <span className="text-blue-600 font-medium">
                  {Math.floor(Math.random() * 100)}
                </span>
              </div>
            ))}
          </div>
            </div>
          {/* "More" button */}
        
        <div className="p-1 bg-[#F6F7F9] rounded-md">
          <h3 className="text-lg text-center font-bold mb-4 ">More</h3>
          
        </div>
      </div>
  
      
  );
};

export default Sidebar;
