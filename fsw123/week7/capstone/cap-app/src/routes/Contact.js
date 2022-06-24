import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SpaceImage from '../components/SpaceImage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
        <NavBar />
        <SpaceImage heading='CONTACT.' text='Contact Us Now!'/>
        <Form />
        <Footer />
    </div>
  )
}

export default Contact