import BracketTitle from "./BracketTitle"

function TrendyPlants() {
  return (
    <section className="flex items-center justify-center">
           <div className="flex flex-col gap-6 justify-center items-center mt-20 p-3  w-full md:w-180 lg:w-240 ">
             
               <div className="p-4 flex items-center justify-center">
                <h4 className="text-2xl md:text-3xl font-semibold mb-2 inter">
                  <BracketTitle text="Our Trendy Plants"/>
                </h4>
               </div> 

              {/* For Your Desks */}
             <div className="flex flex-wrap md:flex-nowrap rounded-[5rem] p-8 md:p-5 bg-white/3 backdrop-blur-[17px] border border-white/10 shadow-lg w-70 md:w-176 items-center ">
                <img src="/rosegold2.png" alt="rosegold" loading="lazy" decoding="async" className='w-56 h-68 -mt-20'/>
                <div>
                    <h4 className="text-sm font-semibold mb-2 inter">For Your Desks Decorations</h4>
                    <p className="text-sm text-wrap text-gray-400 mb-2 inter font-semibold">I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                    <p className="inter font-semibold">Rs. 599/-</p>
                    <div className='flex gap-1.5 items-center inter font-medium'>
                        <button className="text-xs mt-2 px-3 py-1 rounded-lg border transition hover:scale-105 cursor-pointer">
                      Explore
                    </button>
                    <img src="/bag.png" alt="bag" loading="lazy" decoding="async" className='w-6 h-6 mt-1 hover:scale-105 cursor-pointer'/>
                    </div> 
                </div>
                
              </div>  

              {/* Desk Decorations */}
             
                <div className="mt-5 flex flex-col-reverse md:flex-row  flex-wrap md:flex-nowrap rounded-[5rem] p-8 md:p-5 bg-white/3 backdrop-blur-[17px] border  border-white/10 shadow-lg w-70 md:w-176  items-center">
                <div>
                    <h4 className="text-sm font-semibold mb-2 inter">For Your Desks Decorations</h4>
                    <p className="text-sm text-wrap text-gray-400 mb-2 inter font-semibold">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                    <p className="inter font-semibold">Rs. 399/-</p>
                    <div className='flex gap-1.5 items-center '>
                        <button className="text-xs mt-2 px-3 py-1 rounded-lg border transition inter font-medium cursor-pointer hover:scale-105">
                      Explore
                    </button>
                    <img src="/bag.png" alt="bag" loading="lazy" decoding="async" className='w-6 h-6 mt-1 cursor-pointer hover:scale-105'/>
                    </div> 
                </div>
                 <img src="/rosegold3.png" alt="rosegold" loading="lazy" decoding="async" className='w-56 h-68 -mt-20'/>
              
              </div>
             
            </div>
    </section>
  )
}
export default TrendyPlants