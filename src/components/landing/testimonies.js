import TestimonialCard from "./testimoniesCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      content:
        "Pescode installed our CCTV system and we couldn't be happier. The quality is excellent and their team was professional throughout.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "The alarm system they installed in our office has given us real peace of mind. Their monitoring service is top-notch.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Property Manager",
      content:
        "We've used Pescode for multiple properties. Their electric fencing solutions are the best in the business.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
