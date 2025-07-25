import FAQItem from "./items";

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of CCTV systems do you offer?",
      answer:
        "We provide a range of CCTV solutions including analog HD, IP cameras, wireless systems, and AI-powered smart cameras with facial recognition and motion detection capabilities.",
    },
    {
      question: "How long does installation typically take?",
      answer:
        "Installation time varies based on the system complexity and property size. A standard CCTV installation takes 4-6 hours, while comprehensive smart home systems may take 1-3 days.",
    },
    {
      question: "Do you offer monitoring services?",
      answer:
        "Yes, we provide 24/7 professional monitoring services with immediate response to alarms and suspicious activities. Our monitoring center is UL-certified and staffed by trained professionals.",
    },
    {
      question: "What maintenance do security systems require?",
      answer:
        "We recommend bi-annual maintenance checks for optimal performance. Most systems require minimal maintenance like camera lens cleaning and battery replacements for wireless components.",
    },
    {
      question:
        "Can I integrate my existing security system with your solutions?",
      answer:
        "In most cases, yes. Our technicians can assess your current setup and recommend integration options or necessary upgrades to ensure compatibility with our systems.",
    },
    {
      question: "Are your electric fences safe for pets?",
      answer:
        "Our electric fencing systems use low-amperage pulses that deter without causing harm. They're safe for pets when properly installed with warning signs and appropriate voltage settings.",
    },
    {
      question: "What smart home features can you implement?",
      answer:
        "We offer comprehensive smart home solutions including lighting control, thermostat automation, smart locks, voice control integration, and whole-home security systems that can be managed from your smartphone.",
    },
    {
      question: "Do you provide warranties on your products and services?",
      answer:
        "Yes, we offer product warranties ranging from 1-3 years depending on the equipment, along with a 1-year service warranty on all installations. Extended warranty options are also available.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our security solutions and
            services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-bold mb-4 text-blue-800">
              Still have questions?
            </h2>
            <p className="mb-6 text-blue-700">
              Contact our support team for personalized assistance with your
              security needs.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
