import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCalendarAlt, FaBook, FaBrain, FaEnvelope } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-gray-800">Dr. Sarah Wilson</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                Services
              </Link>
              <Link to="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
                Resources
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/services" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link to="/resources" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to My Practice</h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm Dr. Sarah Wilson, a licensed psychologist dedicated to helping you achieve mental wellness and personal growth.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center">
            <FaCalendarAlt className="mr-2" />
            Schedule Appointment
          </button>
        </div>
        <div className="mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136"
            alt="Professional Psychologist"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education & Qualifications</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Ph.D. in Clinical Psychology - Stanford University</li>
              <li>Licensed Clinical Psychologist - State Board Certified</li>
              <li>Cognitive Behavioral Therapy Certification</li>
              <li>Member of American Psychological Association</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Anxiety and Depression</li>
              <li>Trauma and PTSD</li>
              <li>Relationship Counseling</li>
              <li>Stress Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Individual Therapy",
            description: "One-on-one sessions focused on personal growth and healing.",
            icon: <FaBrain />
          },
          {
            title: "Group Therapy",
            description: "Supportive group sessions for shared experiences and growth.",
            icon: <FaBook />
          },
          {
            title: "Consultations",
            description: "Initial consultations to discuss your needs and treatment options.",
            icon: <FaEnvelope />
          }
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl text-blue-600 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Resources = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Recommended Reading</h3>
          <ul className="space-y-4">
            {[
              "The Body Keeps the Score",
              "Feeling Good: The New Mood Therapy",
              "The Anxiety and Phobia Workbook"
            ].map((book, index) => (
              <li key={index} className="flex items-center">
                <FaBook className="text-blue-600 mr-2" />
                <span>{book}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
          <div className="space-y-4">
            {[
              "Understanding Anxiety in Today's World",
              "The Impact of Sleep on Mental Health",
              "Building Healthy Relationships"
            ].map((article, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="font-medium text-gray-900">{article}</h4>
                <p className="text-gray-600 mt-1">Read more →</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;