import React from 'react'
import Image from "next/image"

const Index = () => {
  return (
    <div>
      <section className="py-16 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="mb-12 lg:mb-0">
              <div className="relative h-80 sm:h-96 lg:h-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  //   src="/images/about-team.jpg"
                  alt="Pepscode Technology Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">Pepscode Technology</span>
              </h2>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  We are a registered, wholly owned Nigerian firm. The company
                  was established 2019 and is growing to be one of Nigeria’s
                  leading Information Communication Technology (ICT) companies.
                  Our core services include the supply and installation of
                  digital equipment, Security & Surveillance systems, Computer
                  equipment and consumables. We offer cutting edge ICT
                  consulting services and solutions ranging from Document
                  imaging solutions, e-payment solution, and cloud computing
                  financial solutions, amongst others.
                </p>
                <p>
                  We specialize in cutting-edge security systems including CCTV
                  surveillance, alarm systems, electric fencing, and smart home
                  automation. Our team of certified professionals brings
                  together decades of experience in security technology.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-blue-700">
                  To develop innovative technological solutions and outstanding
                  service to generate Value and competitive advantage and thus
                  guarantee the success of our clients businesses
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-blue-700">
                  To project a company that is differentiated by its knowledge,
                  in which professionals and specialists work in a stimulating
                  environment with the constant challenge of leading in our
                  objective market, creating innovative solutions that allow our
                  clients to compete effectively.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Our Values
                </h3>
                <p className="text-blue-700">
                  Recognize the importance of our customers. Understand and
                  commit to our customers businesses. Take responsibility for
                  delivering service excellence. To comply with stipulations of
                  quality management system and to continually improve its
                  effectiveness.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-medium text-gray-900">10+ Years</span>{" "}
                    of industry experience
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-medium text-gray-900">500+</span>{" "}
                    satisfied clients
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-medium text-gray-900">24/7</span>{" "}
                    professional monitoring
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;