import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

const Navbar = () => (
  <header>
    <nav className="container padding-x">
      <span>
        <NavLink to={links[0].path} style={{ backgroundColor: 'transparent', borderTop: 'none' }}>
          Bookstore
        </NavLink>
      </span>
      <ul>
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
