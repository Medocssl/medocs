import { Link } from "react-router";

export default function Contact() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Contact Us</h1>
      <div style={{ border: '2px solid #004a99', display: 'inline-block', padding: '30px', borderRadius: '15px' }}>
        <h2>📞 Hotline: [Your Number]</h2>
        <p>📧 Email: info@medocs.lk</p>
        <p>📍 Location: Colombo, Sri Lanka</p>
        <div style={{ marginTop: '20px' }}>
            <strong>Follow Us:</strong> Facebook | Instagram | LinkedIn
        </div>
      </div>
      <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#004a99' }}>← Back to Home</Link>
    </div>
  );
}
