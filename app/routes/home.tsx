import { Link } from "react-router";
import "../app.css";

export default function Home() {
  const services = [
    { id: 'ambulance', name: 'Ambulance', icon: '🚑', img: 'https://images.unsplash.com/photo-1587748516483-228b4d3929b3?q=80&w=400' },
    { id: 'home-visits', name: 'Home Visits', icon: '🏠', img: 'https://images.unsplash.com/photo-1584515933487-759f2121f2ec?q=80&w=400' },
    { id: 'equipment', name: 'Equipment', icon: '🏥', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400' },
  ];

  const gallery = [
    { title: "ICU Ambulance Interior", url: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=500" },
    { title: "Mobile Oxygen Support", url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=500" },
    { title: "Professional Nursing Care", url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=500" },
    { title: "Advanced Monitoring", url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=500" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800' }}>MEDOCS</h1>
          <p style={{ fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Premium Healthcare & Emergency Services in Sri Lanka.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/contact" className="btn-primary">Get Help Now</Link>
            <a href="https://wa.me/947XXXXXXXXX" className="btn-primary" style={{ background: '#25D366' }}>WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container" style={{ padding: '80px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Our Specialized Care</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {services.map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="service-card">
              <img src={s.img} alt={s.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <h3 style={{ marginTop: '15px' }}>{s.icon} {s.name}</h3>
              <p style={{ color: '#666' }}>Reliable medical solutions provided by our expert clinical team.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW: Aesthetic Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Facility & Equipment Gallery</h2>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <div key={index} className="gallery-item">
                <img src={item.url} alt={item.title} />
                <div className="gallery-overlay">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ padding: '60px 0', textAlign: 'center', background: '#004a99', color: 'white' }}>
        <div className="container">
          <h2>Available 24 Hours a Day, 7 Days a Week</h2>
          <p>We are just a phone call away for any medical requirement.</p>
        </div>
      </section>
    </div>
  );
}  );
}
