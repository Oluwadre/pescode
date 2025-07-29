import Access from "@/assets/images/access.svg";
import Electric from "../../../public/electric.jpg";
import Intercom from "@/assets/images/intercom.svg";
import Analytics from "@/assets/images/data.svg";
import Video from "@/assets/images/video.svg";
import Smart from "../../../public/smart.jpg";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      title: "Access Control",
      description:
        "With the help of contemporary access control systems, you can manage who has access to both the entire building and specific rooms.",
      icon: Access,
    },
    {
      title: "Alarm Systems",
      description: "24/7 monitored intrusion detection with instant alerts",
      icon: Intercom,
    },
    {
      title: "Electric Fencing",
      description: "Non-lethal perimeter protection with smart sensors",
      icon: Analytics,
    },
    {
      title: "Video survilance",
      description:
        "You'll need and want our cameras and video solutions to keep your family and house safe.",
      icon: Video,
    },
  ];

  return (
    <section
      className="py-16 relative bg-cover bg-center bg-no-repeat"
      id="services"
      style={{
        backgroundImage:
          "url('https://cctvservices.net/wp-content/uploads/2023/10/iStock-1186996701-1.jpg')",
      }}
    >
      {/* Dark overlay for background image */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Our Security Solutions
        </h2>
        <p className="text-lg text-center mb-12 text-gray-300 max-w-3xl mx-auto">
          Integrating technologies to create solutions built around your
          security needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="relative h-[380px] overflow-hidden group">
              {/* Default State - Centered and properly sized image */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-48">
                  {" "}
                  {/* Fixed size container */}
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Hover State */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "0 0 25px #00000026",
                  background: "#fff",
                  padding: "46px 20px 45px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Container (Top) */}
                <div className="relative h-48 w-full mb-6">
                  {" "}
                  {/* Same size as default */}
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Container (Bottom) */}
                <div className="flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
