import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import SpaceImage from "../components/SpaceImage"
import PricingCards from "../components/Pricing"

const Pricing = () => {
  return (
    <div>
    <NavBar />
    <SpaceImage heading='PRICING' text='Start the voyage of the lifetime' />
    <PricingCards />
    <Footer />
    </div>
  )
}

export default Pricing