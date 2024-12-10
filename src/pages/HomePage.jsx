import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserMd,
  FaUsers,
  FaBrain,
  FaHeart,
  FaBook
} from "react-icons/fa";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const services = [
    {
      title: "Terapia individual",
      description:
        "Sesiones individuales centradas en el crecimiento personal y la sanación.",
      icon: <FaUserMd />,
    },
    {
      title: "Terapia de parejas",
      description: "Fortalecer las relaciones y mejorar la comunicación",
      icon: <FaUsers />,
    },
    {
      title: "Terapia cognitivo conductual",
      description:
        "Enfoque basado en evidencia para superar pensamientos desafiantes",
      icon: <FaBrain />,
    },
    {
      title: "Apoyo emocional",
      description:
        "Orientación a través de emociones difíciles y transiciones de vida.",
      icon: <FaHeart />,
    },
  ];

  const testimonials = [
    {
      text: "El enfoque de la Dr. Michielan transformó por completo mi perspectiva sobre la vida.",
      author: "NOMBRE DE PACIENTE o ANONIMO",
    },
    {
      text: "El ambiente cálido y comprensivo me hizo sentir seguro para abrirme.",
      author: "NOMBRE DE PACIENTE o ANONIMO",
    },
    {
      text: "He visto una mejora notable en mi relación gracias a la terapia de pareja.",
      author: "NOMBRE DE PACIENTE o ANONIMO",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="font-sans">
      {/* ------------------------------------------ Hero Section-------------------------------------------- */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
            alt="Therapy Session"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Dra. Martina Michielan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Psicologa</p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition duration-300">
            Ponte en contacto
            <FaEnvelope className="text-center m-auto" />
          </button>
        </div>
      </section>

      {/*-------------------------------------------------- About Section----------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 mr-8">
              <img
                src="/images/foto-perfil.png"
                alt="Dr. Sarah Smith"
                className="rounded-full  max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                ¿Quien soy?
              </h2>
              <p className="text-gray-600 mb-6">
                Soy una profesional en psicología con más de 5 años de
                experiencia, me especializo en ayudar a personas y parejas a
                afrontar los desafíos de la vida. Mi enfoque combina técnicas
                basadas en evidencia con atención compasiva.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  SI HAY ALGUN DOCTORADO O MASTER AGREGARLO AQUI!!!
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Licenciada en AGREGAR LUGAR DONDE SE OBTUVO LA LICENCIATURA!!!
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Certificado de AGREGAR UN CERTIFICADO!!!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*------------------------------------------------ Services Section-------------------------------------------- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Sesiones y terapias ofrecidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl text-teal-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------Testimonials Section ------------------------------------------*/}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Testimonios de algunos pacientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-gray-800">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*--------------------------------------------------------- Contact Section -------------------------------------------*/}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Ponte en contacto
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="text-teal-600 text-xl mr-4" />
                  <p className="text-gray-600">(+34) 674-239610</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-teal-600 text-xl mr-4" />
                  <p className="text-gray-600">psi.michielan@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-teal-600 text-xl mr-4" />
                  <p className="text-gray-600">Barcelona - España</p>
                </div>
                <div className="flex items-center">
                  <FaBook className="text-teal-600 text-xl mr-4" />
                  <div>
                    <p className="text-gray-600">
                      Sesiones online o presenciales
                    </p>
                    <p className="text-gray-600">
                      En Castellano o en Italiano
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Tu email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
