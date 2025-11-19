function Footer() {
  return (
    <section className="bg-[#1B2316] w-full h-screen md:h-[83vh] lg:h-[48vh] -mt-1">
      <div className="flex flex-wrap gap-20 md:gap-20 lg:gap-66 p-3 ">
        <div className="flex flex-col text-white gap-3">
            <div className="flex items-center gap-2 p-2">
              <img src="/plant.png" alt="FloraVision" className="h-10 w-10 " />
              <span className="text-2xl font-bold text-white">FloraVision</span>
            </div>
            <p className="text-wrap w-66 px-2 text-xs font-semibold">"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
            <div className="flex gap-3 font-bold m-2 mt-10 text-sm">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>
         </div>

          <div>
              <span className="text-sm font-bold text-white">Quick Link's</span>
              <div className="text-white flex flex-col font-medium text-sm gap-1 mt-3 underline">
                <span>Home</span>
                <span>Type’s Of plant’s</span>
                <span>Contact</span>
                <span>Privacy</span>
              </div>
          </div>
          <div className="flex flex-col gap-5 text-white">
              <span className="text-sm font-bold text-white">For Every Update.</span>
              <div className="flex ">
                <input type="email" placeholder="Enter email" className="px-2 p-1 border-2 rounded-md border-white"/>
                <button className="bg-white text-black rounded-md text-xs p-1 font-bold">SUBSCRIBE</button>
              </div>
              <div className="lg:mt-16 text-sm">
                FloraVision © all right reserve
              </div>
          </div>
      </div>
    </section>
  )
}
export default Footer