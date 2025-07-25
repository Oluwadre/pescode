export default function ComparisonTable() {
    const features = [
      {
        name: "24/7 Monitoring",
        pepscode: "✓",
        others: "Limited hours"
      },
      {
        name: "Equipment Warranty",
        pepscode: "10 Years",
        others: "1-2 Years"
      },
      {
        name: "Response Time",
        pepscode: "<30 mins",
        others: "2+ hours"
      }
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pepscode?</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Feature</th>
                  <th className="px-6 py-3 text-left font-medium">Pepscode</th>
                  <th className="px-6 py-3 text-left font-medium">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{feature.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">{feature.pepscode}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{feature.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }