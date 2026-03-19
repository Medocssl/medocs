import { Link } from "react-router";

export default function Home() {
  const services = [
    { id: 'ambulance', name: 'Ambulance', icon: '🚑' },
    { id: 'home-visits', name: 'Home Visits', icon: '🏠' },
    { id: 'equipment', name: 'Equipment Rental', icon: '🏥' },
    { id: 'air-escorts', name: 'Air Escorts', icon: '✈️' },
    { id: 'palliative', name: 'Palliative Care', icon: '❤️' },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <header style={{ background: '#004a99', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <h1>MEDOCS Health Services (Pvt) Ltd</h1>
        <nav>
          <Link to="/about" style={{ color: 'white', margin: '0 10px' }}>About</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 10px' }}>Contact</Link>
        </nav>
      </header>

      <section style={{ margin: '40px 0' }}>
        <h2>Quality Medical Care, Anytime, Anywhere</h2>
        <p>Providing professional healthcare solutions across Sri Lanka.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {services.map(s => (
          <Link key={s.id} to={`/services/${s.id}`} style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', textDecoration: 'none', color: 'black' }}>
            <div style={{ fontSize: '40px' }}>{s.icon}</div>
            <h3>{s.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
