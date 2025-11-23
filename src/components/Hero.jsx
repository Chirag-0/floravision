import {  Star } from 'lucide-react';
import TrendyPlants from './TrendyPlants';

function Hero() {
  return (
      <section className=" text-white min-h-screen  sm:h-auto  md:h-[242vh] w-full flex items-center lg:h-[220vh] ">
    
      <div className="relative  md:w-screen lg:max-w-7xl max-w-7xl mx-auto px-2 md:px-6 lg:px-6 py-12  ">
        <div className="flex p-3 flex-wrap items-center gap-20 md:gap-20 lg:gap-30 justify-center  lg:flex-nowrap">
          
          <div className='flex flex-col gap-6 w-full md:w-1/2 lg:w-[130%] '>
            <div>
                <h1 className="text-4xl  md:text-6xl  text-nowrap  font-bold">
                  Earth's Exhale
                </h1>
                <p className="text-md mb-1 md:text-lg text-gray-300 inter font-medium">
                  Transform Your Space with Nature's Beauty. Discover our curated collection of plants that bring life, freshness, and tranquility to your home and office.
                </p>
                
                <div className='flex items-center gap-2 '>     
                <button className="border text-white px-2 md:px-5 mt-1 md:mt-1 py-1 md:py-3 rounded-lg transition hover:scale-105 cursor-pointer inter">
                  Buy Now
                </button>
                  <div>
                    <div className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 hover:scale-105 cursor-pointer'>
                      <img src="/polygon-2.png" alt="Play Button" className="h-2 w-2 md:h-3 md:w-3 "/>
                    </div>
                  </div>
                  <div className='indie-flower'>Live Demo...</div>
                </div> 
             </div>

             <div className='inter w-58 h-46 mt-12 rounded-2xl bg-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg'>
             <div className="flex flex-col p-2 mt-2 gap-4 ">
              <div className='flex gap-1.5 items-center'>
                  <img src="/girl.png" alt="User" className="h-8 w-8 rounded-full" />
                  <div className='flex flex-col'>
                    <p>Ronnie Hamill</p>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="text-yellow-400 " />
                      ))}
                    </div>
                  </div>
                </div>
               <p className='text-sm w-56'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
            </div>
            </div>
          </div>
 
          <div className="inter flex flex-col  items-center gap-6 relative">
            <div className=" rounded-xl h-56 -mt-20 mb-4 flex items-center justify-center  absolute ">
               <img src="/rosegold.png" alt="Featured Plant" loading='lazy' decoding='async' className="h-56 w-56 object-cover rounded-xl z-30" />
            </div>
             
            <div className="rounded-xl p-6 w-66 h-100 -mt-10 max-w-sm flex flex-col items-center bg-white/3 backdrop-blur-[17px] border border-white/10 shadow-lg" style={{
              clipPath: "polygon(0% 0%, 26% 10%, 48% 14%, 73% 8%, 98% 1%, 100% 100%, 0% 100%)",
            }}>  
           
            <div className='mt-46'>
              <h3 className="opacity-75 mb-2">Indoor plant</h3>
              <div className='flex items-center gap-5 mb-4'>
                  <p className="text-gray-400 text-xl opacity-75">Aglaonema  plant</p>
                  <img src="right-arrow.png" alt="arrow" className='w-2 h-2 transition hover:scale-110 opacity-75'/>
              </div>
              <button className="border px-4 text-white py-2 rounded-lg transition hover:scale-105 opacity-75">
                Buy Now
              </button>
            </div>
             <div className='flex items-center justify-center mt-6 gap-1.5'>
                <div className='w-3 h-1 bg-white rounded-2xl'></div>
                <div className='w-1 h-1 bg-white rounded-full'></div>
                <div className='w-1 h-1 bg-white rounded-full'></div>
              </div>
          </div>
          </div>
       
        </div>

           {/* Our trendy plants */}
            <TrendyPlants/>
      </div>
    </section>
  )
}
export default Hero