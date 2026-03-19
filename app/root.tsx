import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 5%', 
          background: 'white', 
          position: 'sticky', 
          top: 0, 
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          {/* Left Side: Navigation Links */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>HOME</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>ABOUT</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold' }}>CONTACT</Link>
          </div>

          {/* Right Side: Logo as a PNG */}
          <Link to="/">
            <img 
              src="/Medocs%20logo%20full%20new.png" 
              alt="MEDOCS Logo" 
              style={{ height: '60px', width: 'auto', display: 'block' }} 
              onError={(e) => {
                // If it still fails, this logs the error to your browser console
                console.error("Logo failed to load. Check if filename is exactly Medocs logo full new.png in the public folder.");
              }}
            />
          </Link>
        </nav>
        
        <main>
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
