import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <header className={styles.header}>
    <nav className={`${styles.nav} container padding-x flex flex-ai-c`}>
      <span>
        <NavLink to={links[0].path} className={styles.logo} style={{ border: 0, color: '#3183ed' }}>
          Bookstore Miles
        </NavLink>
      </span>
      <ul className={`${styles.links} flex flex-ai-fe`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
