import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Try to autoplay, fallback to muted autoplay if needed
    const playVideo = async () => {
      try {
        await videoRef.current?.play();
      } catch (err) {
        // If autoplay fails, try with muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current
            .play()
            .catch((e) => console.log("Video play failed:", e));
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Secure Your World with{" "}
            <span className="text-blue-400">Pescode</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
            Advanced CCTV, alarm systems, electric fencing, and smart home
            solutions for complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <a href="#content" className="animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
