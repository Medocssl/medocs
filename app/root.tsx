import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <nav style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '15px 5%', sticky: 'top', background: 'white', zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          {/* Replace 'logo.jpg' with the actual name of your logo file in public folder */}
          <Link to="/">
            <img src="/Medocs-logo-full-new.jpg" alt="MEDOCS Logo" style={{ height: '50px' }} />
          </Link>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" style={{ 
              background: '#004a99', color: 'white', padding: '10px 25px', 
              borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' 
            }}>
              Hotline: 0770 118 118
            </Link>
          </div>
        </nav>
        
        <main className="page-fade">
          <Outlet />
        </main>

        <footer style={{ padding: '40px 5%', background: '#012a4a', color: 'white', marginTop: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
              <h3>MEDOCS Health Services (Pvt) Ltd.</h3>
              <p>No 309, 3rd Floor, Jana Jaya City, Rajagiriya.</p>
            </div>
            <div>
              <p>Email: medocssl@gmail.com</p>
              <p>Hotline: 0764400400,</p>
            </div>
          </div>
        </footer>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
