import {  Star } from 'lucide-react';

function Hero() {
  return (
      <section className=" text-white h-[410vh]  sm:h-auto  md:h-[242vh] w-full flex items-center lg:h-[210vh]">
    
      <div className="relative  md:w-[100vw] lg:max-w-7xl max-w-7xl mx-auto px-2 md:px-6 lg:px-8 py-12 ">
        <div className="flex p-3 flex-wrap items-center gap-20 md:gap-20 lg:gap-76 justify-center">
          
          <div className='flex flex-col gap-6 w-full md:w-1/2'>
            <div>
                <h1 className="text-4xl  md:text-6xl font-bold leading-tight text-nowrap">
                  Earth's Exhale
                </h1>
                <p className="text-md mb-1 md:text-lg text-gray-300">
                  Transform Your Space with Nature's Beauty. Discover our curated collection of plants that bring life, freshness, and tranquility to your home and office.
                </p>
                
                <div className='flex items-center gap-2 '>     
                <button className="border text-white px-2 md:px-5 mt-1 md:mt-1 py-1 md:py-3 rounded-lg transition font-semibold">
                  Explore Now
                </button>
                  <div>
                    <div className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2'>
                      <img src="/polygon-2.png" alt="Play Button" className="h-2 w-2 md:h-3 md:w-3 "/>
                    </div>
                  </div>
                  <div>Live Demo...</div>
                </div> 
             </div>

             <div className='w-56 h-46 mt-10 rounded-2xl bg-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg'>
             <div className="flex flex-col p-2 mt-2 gap-4 ">
              <div className='flex gap-1.5 items-center'>
                  <img src="/girl.png" alt="User" className="h-8 w-8 rounded-full" />
                  <div className='flex flex-col'>
                    <p>Ronnie Hamill</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="text-yellow-400 " />
                      ))}
                    </div>
                  </div>
                </div>
               <p className='text-sm w-56'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
            </div>
            </div>
          </div>
 
          <div className=" flex flex-col  items-center gap-6 ">
            <div className=" rounded-2xl p-6 w-66 h-100 -mt-10 max-w-sm  bg-white/5 backdrop-blur-[17px] border border-white/5 shadow-lg flex flex-col items-center ">
              <div className=" rounded-xl h-56 -mt-16 mb-4 flex items-center justify-center">
                <img src="/rosegold.png" alt="Featured Plant" className="h-full w-full object-cover rounded-xl" />
              </div>
              <h3 className=" mb-2">Indoor plant</h3>
              <div className='flex items-center gap-5 mb-4'>
                  <p className="text-gray-400 text-xl font-semibold ">Aglaonema  plant</p>
                  <img src="right-arrow.png" alt="arrow" className='w-2 h-2 transition hover:scale-110'/>
              </div>
              <button className="border px-4 text-white py-2 rounded-lg transition font-semibold hover:scale-105">
                Buy Now
              </button>
           
          </div>
          </div>
       
        </div>

           {/* Our trendy plants */}

           <div className="flex flex-col justify-center items-center mt-20 p-3  w-full md:w-180 lg:w-300">
             
               <div className="p-4 flex items-center justify-center">
                <h4 className="text-2xl md:text-3xl font-semibold mb-2">Our Trendy plants</h4>
               </div> 

              {/* For Your Desks */}
             <div className="flex flex-wrap md:flex-nowrap rounded-[5rem] p-8 md:p-4 g-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg w-70 md:w-170 items-center ">
                <img src="/rosegold2.png" alt="rosegold" className='w-56 h-56'/>
                <div>
                    <h4 className="text-sm font-semibold mb-2">For Your Desks Decorations</h4>
                    <p className="text-sm text-wrap text-gray-400 mb-2">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p>Rs. 599/-</p>
                    <div className='flex gap-1.5 items-center '>
                        <button className="text-xs mt-2 px-3 py-1 rounded-lg border transition">
                      Explore
                    </button>
                    <img src="/bag.png" alt="bag" className='w-6 h-6 mt-1'/>
                    </div> 
                </div>
                
              </div>  

              {/* Desk Decorations */}
                <div className="mt-5 flex flex-wrap md:flex-nowrap rounded-[5rem] p-8 md:p-4 g-white/5 backdrop-blur-[17px] border border-white/10 shadow-lg w-70 md:w-170 items-center">
                <div>
                    <h4 className="text-sm font-semibold mb-2">For Your Desks Decorations</h4>
                    <p className="text-sm text-wrap text-gray-400 mb-2">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                    <p>Rs. 399/-</p>
                    <div className='flex gap-1.5 items-center '>
                        <button className="text-xs mt-2 px-3 py-1 rounded-lg border transition">
                      Explore
                    </button>
                    <img src="/bag.png" alt="bag" className='w-6 h-6 mt-1'/>
                    </div> 
                </div>
                 <img src="/rosegold3.png" alt="rosegold" className='w-56 h-56'/>
              </div>  
               
            </div>
      </div>
    </section>
  )
}
export default Hero