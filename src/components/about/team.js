import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ibile United",
      role: "CEO & Founder",
      bio: "With 15+ years in security technology, John leads our vision and strategy.",
    //   image: "/images/team-john.jpg",
    },
    {
      name: "Baylis stitches",
      role: "Technical Director",
      bio: "Baylis oversees all technical implementations and system designs.",
    //   image: "/images/team-sarah.jpg",
    },
    {
      name: "ElDrebanks",
      role: "Operations Manager",
      bio: "Michael ensures our installations meet the highest quality standards.",
    //   image: "/images/team-michael.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals behind Pepscode Technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                //   src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
