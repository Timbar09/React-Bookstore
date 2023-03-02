import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <div>
    <Navbar />
    <main className="main">
      <Outlet />
    </main>
  </div>
);

export default Layout;
