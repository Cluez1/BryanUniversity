import { Link } from 'react-router-dom'
import { UserContext } from '../context/userProvider'

export default function Navbar(){
  const {logout} = useContext(UserContext)
  return (
    <div className="navbar">
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/public">Public</Link>
      {token && <button onClick={logout}>Logout
      </button>}
    </div>
  )
}