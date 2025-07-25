export default function ProcessSteps() {
  const steps = [
    {
      title: "Free Consultation",
      description: "We assess your property's security needs",
      icon: "📞",
    },
    {
      title: "Custom Plan",
      description: "Tailored solution for your budget",
      icon: "📝",
    },
    {
      title: "Professional Install",
      description: "Certified technicians implement your system",
      icon: "🛠️",
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
