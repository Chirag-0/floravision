import CustomerReview from "./components/CustomerReview"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurBest from "./components/OurBest"
import SellingPlants from "./components/SellingPlants"
import bg from "./assets/backgroundimage.webp";


function App() {
  return (
    <>
      <div className="h-auto md:h-[260vh] sm:h-[420vh] w-full bg-cover bg-position-[center_top]" style={{ backgroundImage: `url(${bg})` }}>  
      <Navbar/>
      <Hero/>
      </div>
      <SellingPlants/>
      <CustomerReview/>
      <OurBest/>
      <Footer/>
    </>
  )
}

export default App
