import { useParams, Link } from "react-router";

const info = {
  ambulance: { 
    title: "Ambulance Services", 
    text: "Our fleet consists of modern, ICU-equipped ambulances staffed by trained paramedics. We ensure safe, rapid transport for both emergency and pre-planned hospital transfers.",
    details: ["24/7 Dispatch", "Advanced Life Support", "Oxygen & Monitoring", "Ventilator Support"]
  },
  'home-visits': { 
    title: "Doctor Home Visits", 
    text: "Avoid the hospital queues. Our qualified medical officers visit you at home for consultations, minor procedures, and routine check-ups.",
    details: ["Senior Citizen Care", "Post-Surgical Monitoring", "Wound Dressing", "Prescription Management"]
  },
  equipment: { 
    title: "Medical Equipment Rental", 
    text: "Convert your home into a recovery suite with our high-grade medical gear. We deliver, install, and provide training on all equipment.",
    details: ["Electric Hospital Beds", "Oxygen Concentrators", "CPAP/BiPAP Machines", "Wheelchairs & Commodes"]
  },
  'air-escorts': { 
    title: "Medical Air Escorts", 
    text: "For international patients or those needing repatriation, we provide flight nurses and doctors to accompany patients on commercial or private flights.",
    details: ["International Coordination", "Bed-to-Bed Transfer", "Flight Nursing Staff", "Medical Clearance Support"]
  },
  palliative: { 
    title: "Palliative Care", 
    text: "Compassionate care focused on providing relief from the symptoms and stress of a serious illness. We prioritize quality of life for both the patient and the family.",
    details: ["Pain Management", "Emotional Support", "Nutritional Counseling", "Home Nursing"]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const s = info[serviceId];

  return (
    <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#004a99', fontSize: '2.5rem' }}>{s?.title}</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto', color: '#555' }}>{s?.text}</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', margin: '40px 0' }}>
        {s?.details.map(detail => (
          <span key={detail} style={{ background: '#eef6ff', padding: '10px 20px', borderRadius: '50px', color: '#004a99', fontWeight: 'bold' }}>
            ✓ {detail}
          </span>
        ))}
      </div>

      <Link to="/contact" className="btn-primary">Book This Service</Link>
      <Link to="/" style={{ display: 'block', marginTop: '30px', color: '#666' }}>← Back to Home</Link>
    </div>
  );
}
