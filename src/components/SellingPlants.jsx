import PlantInfo from "./PlantInfo";

function SellingPlants() {
  return (
    <div className="bg-[#1B2316] w-full h-auto md:h-[350vh] lg:h-[210vh] -mt-1">
      <h1 className="text-2xl text-white text-center p-6 font-bold">
        Our Top Selling Plants
      </h1>

      <div className="p-4">
          <PlantInfo/>
      </div>
    </div>
  );
}
export default SellingPlants;
