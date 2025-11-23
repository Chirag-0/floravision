import BracketTitle from "./BracketTitle"

function OurBest() {
  return (
    <section className="bg-[#1B2316] w-full h-[150vh] md:h-[170vh] lg:h-[140vh] -mt-1 lg:py-2">
      <div className="flex flex-col gap-16 items-center justify-center  lg:p-3">
        <div className="mt-40 md:mt-0 inter font-semibold">
          <BracketTitle text="Our Best O2"/>
        </div>
        <div className="mt-16 md:mt-10">
              <div className="md:flex flex flex-wrap rounded-[4rem] p-3 md:p-4 bg-white/5 backdrop-blur-[17px] border border-white/14 shadow-lg w-78 md:w-100 md:h-150 lg:w-220 items-center justify-center gap-5 h-90 lg:h-96">

                  <img src="/rosegold.png" alt="rosegold" loading="lazy" decoding="async" className='lg:w-100 lg:h-104 md:w-90 md:h-90 h-46 w-36 object-cover -mt-20 md:-mt-40 md:mr-10 lg:mr-22'/>
                  <div className="-mt-20 md:-mt-10 w-66 md:w-78 p-1">
                      <h4 className="text-sm md:text-md opacity-75  inter font-semibold mb-2 text-white text-nowrap">For Your We Have Small And Best O2 Plants <br />Collection’s</h4>
                      <p className="text-[8px] md:text-xs text-wrap  md:text-wrap text-white mb-2 opacity-75  inter font-semibold ">Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                        <br />
                      </p>
                      <p className="text-[8px] md:text-xs text-wrap  md:text-wrap text-white mb-2 opacity-75  inter font-semibold ">Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
                      </p>
                      
                      <div className='flex gap-20 md:gap-38 mt-3 items-center '>
                        <button className="text-xs mt-2 px-4 py-1 rounded-lg border transition text-white hover:scale-105 ">
                        Explore
                        </button>
                        <div className="flex items-center justify-center gap-5">
                           <img src="/right-arrow.png" alt="bag" className='w-2 h-2 mt-1 rotate-180 hover:scale-110'/>  
                           <span className="text-white text-[10px] font-bold">01/04</span>
                           <img src="/right-arrow.png" alt="bag" className='w-2 h-2 mt-1 hover:scale-110'/>  
                        </div>
                      </div> 
                  </div>
                  
              </div> 
               <div className='flex items-center justify-center mt-8 gap-1.5 opacity-75'>
                <div className='w-5 h-1.5 bg-white rounded-2xl'></div>
                <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
              </div>
        </div>

      </div>
    </section>
  )
}
export default OurBest