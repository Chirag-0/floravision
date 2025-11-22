function ProductPage() {
  return (
    <div>
        <div className="bg-[url('/backgroundimage.jpg')] h-auto md:h-[260vh] sm:h-[420vh] w-full bg-cover bg-position-[center_top] ">  
            <Navbar/>
            <Hero/>
        </div>
        <SellingPlants/>
    </div>
  )
}
export default ProductPage