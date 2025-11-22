import BracketTitle from "./BracketTitle";
import PlantInfo from "./PlantInfo";

function SellingPlants() {
  return (
    <div className="bg-[#1B2316] w-full h-auto md:h-[350vh] lg:h-auto -mt-1">
      <h1 className="text-2xl text-white text-center p-6 font-semibold inter">
        <BracketTitle text="Our Top Selling Plants" />
      </h1>

      <div className="p-4 lg:pb-20">
          <PlantInfo/>
      </div>
    </div>
  );
}
export default SellingPlants;
