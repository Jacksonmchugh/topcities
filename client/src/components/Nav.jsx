
import { Link, NavLink } from 'react-router-dom'



export default function Nav() {
  return (
    <nav className="flex-row">
      <div>
        <NavLink to ="/" className={({ isActive})=>
      isActive ? "active" : undefined}>Home</NavLink>
        <NavLink to='/About' className={({ isActive})=>
      isActive ? "active" : undefined}>About </NavLink>
        <NavLink to="/Cities" className={({ isActive})=>
      isActive ? "active" : undefined}>Cities </NavLink>
      <NavLink to="/Comments">Comments</NavLink>
        
        <NavLink to='/CityForm' className={({ isActive})=>
      isActive ? "active" : undefined}>City Form</NavLink>
        
      </div>
    </nav>
  )
}

