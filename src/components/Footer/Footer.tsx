'use client';
import React, { useState, useEffect } from 'react';
import  Link  from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsSend } from "react-icons/bs";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00204A] text-gray-300 py-10 font-custom relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="text-white text-4xl font-bold text-center">Annonce</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">À propos</h3>
            <p className="text-sm leading-relaxed">
              Nous sommes une plateforme dédiée à la publication {`d'annonces`} pour divers produits et services. Notre mission est de connecter les acheteurs et les vendeurs de manière efficace et sécurisée.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="text-sm leading-relaxed">
              <li><MdEmail/><a href="mailto:contact@siteannonce.com" className="hover:underline">contact@siteannonce360.com</a></li>
              <li className='pt-2'><IoIosCall/><a href="tel:+2250101010101" className="hover:underline">+225 01 01 01 01 01</a></li>
              <li className='pt-2'><FaLocationDot/>Face au camp militaire, Bondoukou, CI</li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Liens utiles</h3>
            <ul className="text-sm leading-relaxed space-y-2">
              <li><Link href="Confidentilite/about" className="hover:text-white">À propos de nous</Link></li>
              <li><Link href="Confidentilite/conditions" className="hover:text-white">Conditions {`d'utilisations`}</Link></li>
              <li><Link href="Confidentilite/Politique" className="hover:text-white">Politique de confidentialité</Link></li>
              <li><Link href="Confidentilite/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Suivez-nous</h3>
            <ul className="flex space-x-4 mb-4">
              <li>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={40} className="inline-block text-xl text-white hover:text-blue-800 transition duration-300 hover:scale-90" />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={40} className="inline-block text-xl text-white hover:text-gray-800 transition duration-300 hover:scale-90" />
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={40} className="inline-block text-xl text-white hover:text-pink-600 transition duration-300 hover:scale-90" />
                </Link>
              </li>
              <li>
                <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={40} className="inline-block text-xl text-white hover:text-green-600 transition duration-300 hover:scale-90" />
                </Link>
              </li>
            </ul>
            {/* Newsletter */}
            <div>
              <h3 className="text-lg mt-3 font-semibold mb-2 text-white">Restez Informer</h3>
              <form className="flex items-center space-x-1">
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="w-full px-4 py-2 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="bg-transparent border-2 border-[#00BBF0] text-white px-4 py-2 rounded-md hover:bg-[#00BBF0] transition duration-300"
                >
                  <BsSend size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Annonces360°. Tous droits réservés.
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#00204A] text-white p-3 rounded-full shadow-lg border-2 transition-all duration-300 ease-in-out transform hover:scale-90"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;