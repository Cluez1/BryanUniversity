import './Pricing.css'
import{Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
            <h3>-Basic-</h3>
            <span className='bar'></span>
            <p>3 Days</p>
            <p>-Views- </p>
            <p>-Features-</p>
            <p>-3Days-</p>
            <p>-Private Quarters(3 passenger limit)-</p>
            <Link to='/contact' className='btn'>Book Now!</Link>
            </div>

            <div className='card'>
            <h3>-Advanced-</h3>
            <span className='bar'></span>
            <p>4 Days</p>
            <p>-Views- </p>
            <p>-Features-</p>
            <p>-Free Movie Access-</p>
            <p>-2 Private Quarters-</p>
            <Link to='/contact' className='btn'>Book Now!</Link>
            </div>

            <div className='card'>
            <h3>-First Class-</h3>
            <span className='bar'></span>
            <p>4 Days</p>
            <p>-Views- </p>
            <p>-Features-</p>
            <p>-3Days-</p>
            <p>-Private Quarters(3 passenger limit)-</p>
            <Link to='/contact' className='btn'>Book Now!</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing