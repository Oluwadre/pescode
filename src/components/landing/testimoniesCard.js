export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  className = "",
}) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${className}`}>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <blockquote className="text-gray-600 mb-6">
        <p className="italic">&quot;{content}&quot;</p>
      </blockquote>
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-gray-700 font-bold">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
