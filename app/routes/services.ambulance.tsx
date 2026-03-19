export default function AmbulanceService() {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
      <img 
        src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200" 
        className="w-full h-96 object-cover rounded-3xl mb-12" 
        alt="Ambulance"
      />
      <h1 className="text-4xl font-bold text-[#004680] mb-6">Ground Ambulance</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        {/* 🔁 CHANGE THIS: Add your detailed text here */}
        MEDOCS provides high-speed, fully equipped ambulance units...
      </p>
      
      <div className="mt-12 p-8 bg-blue-50 rounded-2xl">
        <h3 className="font-bold mb-4 text-[#004680]">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>24/7 Availability</li>
          <li>Advanced Life Support (ALS)</li>
          <li>Experienced Medical Crew</li>
        </ul>
      </div>
    </div>
  );
}
