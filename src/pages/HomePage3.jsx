import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  FaBrain,
  FaUserFriends,
  FaBook,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dr. Sarah Mitchell</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-200">
          Home
        </Link>
        <Link to="/services" className="hover:text-blue-200">
          Services
        </Link>
        <Link to="/about" className="hover:text-blue-200">
          About
        </Link>
        <Link to="/contact" className="hover:text-blue-200">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div className="min-h-screen">
    <div className="relative h-[500px]">
      <img
        src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34"
        alt="Calming office setting"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Mental Wellness
          </h1>
          <p className="text-xl mb-6">
            Professional Psychological Services with Dr. Sarah Mitchell
          </p>
          <div className="space-x-4">
            <Link
              to="/services"
              className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Individual Therapy",
      icon: <FaBrain />,
      description:
        "One-on-one sessions focused on personal growth and healing.",
    },
    {
      title: "Group Therapy",
      icon: <FaUserFriends />,
      description:
        "Supportive group sessions for shared experiences and learning.",
    },
    {
      title: "Workshops",
      icon: <FaBook />,
      description: "Educational workshops on various mental health topics.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="text-blue-600 hover:text-blue-800">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div className="container mx-auto py-12 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        About Dr. Sarah Mitchell
      </h2>
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
        alt="Dr. Sarah Mitchell"
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <p className="text-gray-700 mb-6">
        With over 15 years of experience in clinical psychology, Dr. Mitchell
        specializes in cognitive behavioral therapy and mindfulness-based
        approaches to mental wellness.
      </p>
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Client Testimonials</h3>
        <blockquote className="italic text-gray-600">
          "Dr. Mitchell's approach helped me develop new perspectives and coping
          strategies that have truly transformed my life."
        </blockquote>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-blue-600 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <span>123 Wellness Street, NYC 10001</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded"
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const App3 = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App3;
