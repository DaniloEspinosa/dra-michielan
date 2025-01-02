import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full">
        <div className="max-w-7xl mx-auhref px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/">
                <span className="text-2xl font-semibold text-gray-800">
                  Dr. Martina Michielan
                </span>
              </a>
            </div>
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#hero"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Quien soy
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Servicios
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Testimonios
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
