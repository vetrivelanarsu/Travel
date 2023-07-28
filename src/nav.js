import "./nav.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


export default function Nav(){



 return(
    <div className="nav">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="center-nav">
          <p>Events</p>
          <p>Organisation</p>
          <p>About</p>
        </div>
        <div className="last-nav">
          <FontAwesomeIcon icon={faSun}  size="lg" />
          <FontAwesomeIcon icon={faBell} size="lg"/>
          <img src="https://reqres.in/img/faces/7-image.jpg" alt="barry" /> 
        </div>
    </div>
 )

}

