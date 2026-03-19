import { Links, Meta, Outlet, Scripts, ScrollRestoration, Link } from "react-router";
import "./app.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>MEDOCS Health Services (Pvt) Ltd</title>
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#fff' }}>
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 5%', 
          background: 'white', 
          position: 'sticky', 
          top: 0, 
          zIndex: 100,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          flexWrap: 'wrap' // This prevents the menu from squishing on mobile
        }}>
          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold', fontSize: '14px' }}>HOME</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#012a4a', fontWeight: 'bold', fontSize: '14px' }}>CONTACT</Link>
          </div>

          {/* Logo - Top Right */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/Medocs%20logo%20full%20new.png" 
              alt="MEDOCS" 
              style={{ height: '50px', width: 'auto', maxWidth: '150px', objectFit: 'contain' }} 
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
