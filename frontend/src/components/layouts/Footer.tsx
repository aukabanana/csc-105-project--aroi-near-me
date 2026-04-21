export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 mt-10">
      
      {/* เส้นคั่น */}
      <div className="border-t border-gray-700 mb-6"></div>

      {/* กล่อง footer */}
      <div className="bg-gray-1000 backdrop-blur-md rounded-xl py-6 text-center shadow-md">
        
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-white">
          Aroi Near Me
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-xs sm:text-sm mt-1">
          Find something aroi nearby.
        </p>

        {/* Copyright */}
        <p className="text-gray-500 text-[10px] sm:text-xs mt-2">
          © 2026 Aroi Near Me. All rights reserved.
        </p>

      </div>
    </footer>
  );
}