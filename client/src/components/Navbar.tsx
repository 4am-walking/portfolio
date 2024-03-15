import { Link } from 'react-router-dom';
import { useState } from 'react'
import  styles from '../assets/Navbar.module.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false)
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to='/' className={`${styles.logo}`}>xp</Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={`${styles.navLink}`}>home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/signin' className={`${styles.navLink}`}>sign in/sign up</Link>
            </li>
          </ul>
          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;