import {Link} from 'react-router-dom';
import './mainNav.css'

export const MainNav = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/Home" >Home</Link></li>
                <li><Link to="/Editor">Editor</Link></li>
                <li><Link to="/Summary">Summary</Link></li>
            </ul>
        </nav>
    </>
  )
}
