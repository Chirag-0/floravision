import { DiscAlbum } from "lucide-react";

const plantInfo = [
   { 
    img: '/rosegold.png',
    name: 'Aglaonema plant',
    bag: '/bag.png',
    price: 'Rs. 599/-',
    description: 'Aglaonema, commonly known as Chinese Evergreen, is a popular indoor plant known for its attractive foliage and low maintenance requirements.'
   },
   {
    img: '/rosegold2.png',
    name: 'Plantain Lilies',
    bag: '/bag.png',
    price: 'Rs. 380/-',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.'
   },
    {
    img: '/cactus.png',
    name: 'Cactus',
    bag: '/bag.png',
    price: 'Rs. 259/-',
    description: 'It is known for their ability to thrive in arid environments.',
    width: 'w-'
   },
   {
    img: '/swisscheeseplant.png',
    name: 'Swiss Cheese Plant',
    bag: '/bag.png',
    price: 'Rs. 400/-',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves.'
   },
    {
    img: '/sansevieria.png',
    name: 'Sansevieria plant',
    bag: '/bag.png',
    price: 'Rs. 450/-',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.'
   },
    {
    img: '/agave.png',
    name: 'Agave plant',
    bag: '/bag.png',
    price: 'Rs. 359/-',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.'
   },
];

function PlantInfo() {
  return (
    <div className="flex gap-12 flex-wrap items-center justify-center p-5 inter">
        {plantInfo.map((plant) => (
            <div className="flex flex-col flex-wrap relative w-62 md:w-80 p-8 bg-white/5 backdrop-blur-[17px] border border-white/14 shadow-lg rounded-[5rem]" key={plant.name}>

            <div className="-mt-20 z-100 ">
              {plant.name === 'Cactus' ? (
                <img src={plant.img} alt={plant.name} className="object-cover h-62 w-66"/>
              ) : (
              <img src={plant.img} alt={plant.name} className="object-cover"/>
              )}
            </div>

          {/* Card content */}
          <div className="relative z-10 mt-2">
            <h3 className="text-2xl text-gray-100 font-semibold">
              {plant.name}
            </h3>

            <p className="mt-3 text-sm text-gray-300 leading-relaxed h-36 ">
               {plant.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-2xl text-gray-100 ">{plant.price}</div>
              </div>

              {/* cart button */}
              <button
                aria-label="Add to cart"
                className="w-8 h-8 p-1.5 rounded-lg border border-white/20 flex items-center justify-center text-gray-100 hover:bg-white/5 transition"
              >
                <img src={plant.bag} alt={plant.name} />
              </button>
            </div>
          </div>
                </div>
        ))}
    </div>
  )
}
export default PlantInfo