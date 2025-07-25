// import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  const services = [
    {
      title: "CCTV Systems",
      description: "4K cameras with night vision and AI motion detection",
      //   icon: "cctv",
      //   link: "/services/cctv"
    },
    {
      title: "Alarm Systems",
      description: "24/7 monitored intrusion detection with instant alerts",
      //   icon: "alarm",
      //   link: "/services/alarms"
    },
    {
      title: "Electric Fencing",
      description: "Non-lethal perimeter protection with smart sensors",
      //   icon: "fencing",
      //   link: "/services/fencing"
    },
    {
      title: "Smart Homes",
      description: "Integrated security with home automation",
      //   icon: "smart",
      //   link: "/services/smart-homes"
    },
  ];

  return (
    <section className="py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Security Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i}>
              {service.title}
              {service.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
