import { Link } from "react-router";

export default function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ color: '#004a99' }}>About MEDOCS Health Services</h1>
      <p>
        MEDOCS Health Services (Pvt) Ltd is a premier healthcare provider in Sri Lanka, 
        dedicated to bringing high-quality medical care directly to those who need it most.
      </p>
      <section style={{ background: '#f0f7ff', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <h3>Our Mission</h3>
        <p>To provide reliable, professional, and compassionate medical assistance through innovation and clinical excellence.</p>
      </section>
      
      <h3 style={{ marginTop: '30px' }}>Why Choose Us?</h3>
      <ul>
        <li><strong>24/7 Availability:</strong> Always ready for emergencies.</li>
        <li><strong>Expert Staff:</strong> Qualified doctors and nursing professionals.</li>
        <li><strong>Advanced Gear:</strong> Modern medical equipment for rental.</li>
      </ul>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', color: '#004a99', fontWeight: 'bold' }}>
        ← Back to Home
      </Link>
    </div>
  );
}
