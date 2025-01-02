import React, { useState } from "react";
import {
  FaWhatsappSquare,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserMd,
  FaUsers,
  FaBrain,
  FaInstagramSquare,
  FaBook,
} from "react-icons/fa";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const services = [
    {
      title: "TERAPIA INDIVIDUAL",
      description: [
        "Dificultades relacionadas con la ansiedad.",
        "Manejo del estrés.",
        "Mejora de la autoestima.",
        "Caminos de crecimiento personal.",
      ],
      icon: <FaUserMd />,
    },
    {
      title: "TERAPIA DE PAREJAS",
      description: [
        "Fortalecer las relación.",
        "Mejorar la comunicación.",
        "Creación de un espacio seguro.",
      ],
      icon: <FaUsers />,
    },
    {
      title: "SESIONES DE COACHING",
      description: [
        "Coaching individual y personalizado destinado a incrementar el crecimiento personal, orientado a la consecución de objetivos y a la resolución de problemas.",
      ],
      icon: <FaBrain />,
    },
  ];

  const testimonials = [
    {
      text: "Encantada con Martina, es muy profesional y a su vez muy cercana en el trato. Me ha ayudado mucho, y lo sigue haciendo. La recomiendo.",
      author: "Sofía",
    },
    {
      text: "Hace dos años que empecé con la doctora Michielan. Me animé a hacerlo ya que estaba pasando un momento difícil en mi vida, hoy puedo decir que fue un gran acierto.",
      author: "Daniel",
    },
    {
      text: "Comencé un trabajo de coaching con Martina porque deseaba hacer un cambio de carrera, ya que trabajaba en algo que nunca me gustó. Martina me acompañó en este proceso y le estoy muy agradecido",
      author: "Carlos",
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
      {/* ------------------------------------------ Main Section-------------------------------------------- */}
      <section
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-50"
        id="/"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21"
            alt="Therapy Session"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Psicóloga Martina Michielan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            PSICÓLOGA CLÍNICA
          </p>
          <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition duration-300">
            Ponte en contacto
            <FaEnvelope className="text-center m-auto" />
          </button>
        </div>
      </section>

      {/*-------------------------------------------------- Hero Section----------------------------------------------- */}
      <section className="py-20 bg-white" id="hero">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 lg:mr-8">
              <img
                src="/images/foto-perfil.webp"
                alt="Psicologa Martina Michielan"
                className="rounded-3xl max-w-md mx-auto w-3/4 md:w-full"
              />
            </div>

            <div className="md:pt-5 lg:w-1/2 lg:pl-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                ¿Quién soy y qué hago?
              </h2>
              <p className="text-gray-600 mb-6">
                Soy Martina, psicóloga italiana licenciada en Psicología Clínica
                e inscrita en la Orden de Psicólogos de la Región del Véneto,
                con el número 9333. Además tengo una formación en Coaching
                Integrativo. Mi función es ayudarte a conseguir la mejor versión
                de ti mismo/a, acompañándote en este viaje de descubrimiento
                personal, en el que podrás ampliar tu conciencia, mejorar tu
                vida, tus relaciones y experimentar un mayor bienestar.
              </p>
              <ul className="space-y-5">
                <li className="flex items-center text-gray-600">
                  <p>
                    🔹 Nuestras reuniones serán un espacio seguro donde podrás
                    mostrarte tal cual eres y compartir lo que sientes con total
                    libertad.
                  </p>
                </li>
                <li className="flex items-center text-gray-600">
                  <p>
                    🔹Me ocuparé de crear un ambiente de acogida, escucha y
                    comprensión para que puedas descubrir tus
                    necesidades/dificultades y acompañarte a afrontarlas.
                  </p>
                </li>
                <li className="flex items-center text-gray-600">
                  <p>
                    🔹En este viaje descubrirás recursos y habilidades dentro de
                    ti que no sabías que tenías, podrás desarrollar nuevos
                    pensamientos y comportamientos que te permitirán vivir mejor
                    tu presente y avanzar hacia el cambio que deseas lograr.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*------------------------------------------------ Services Section-------------------------------------------- */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Sesiones y terapias ofrecidas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <ul className="text-gray-600">
                  {service.description.map((service, i) => {
                    return <li key={i}>🔹{service}</li>;
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------Testimonials Section ------------------------------------------*/}
      <section className="py-20 bg-teal-600" id="testimonials">
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
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Ponte en contacto
          </h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-center">
                  <a
                    href="https://wa.me/34674239610"
                    className="flex items-center"
                    target="_blank"
                  >
                    <FaWhatsappSquare className="text-teal-600 text-xl mr-4" />
                    <p className="text-gray-600">(+34) 674-239610</p>
                  </a>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-teal-600 text-xl mr-4" />
                  <p className="text-gray-600">psi.michielan@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/martinamichielan/"
                    className="flex items-center"
                    target="_blank"
                  >
                    <FaInstagramSquare className="text-teal-600 text-xl mr-4" />
                    <p className="text-gray-600">@martinamichielan</p>
                  </a>
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
                    <p className="text-gray-600">En Castellano o en Italiano</p>
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
