'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import SearchBar from './Search';
import useOutsideClick from '@/hook/outSideClick';
import { FaHome, FaUser, FaPlus, FaCar, FaBuilding, FaRegLightbulb, FaChevronDown, FaLaptop, FaTshirt, FaChild, FaEllipsisH, FaCog, FaSignInAlt, FaTags } from 'react-icons/fa';

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const menu = useRef(null);
  const menuprof = useRef(null) 
  // Utiliser la fonction pour fermer le menu deroulant en cas de clic à l'extérieur
  useOutsideClick(menu, () => setIsCategoriesOpen(false));
  useOutsideClick(menuprof, () => setIsProfileOpen(false));

  const toggleCategories = () => setIsCategoriesOpen((prev) => !prev);
  const toggleProfile = () => setIsProfileOpen((prev) => !prev);

  const handleSearch = (query: string) => {
    // Logique de recherche, par exemple redirection vers une page de résultats
    console.log("Recherche:", query);
    // ou filtrer des données, etc.
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <div className="container max-w-full flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">MonSiteAnnonces</Link>
        </div>
        <SearchBar onSearch={handleSearch} />
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white flex items-center">
            <FaHome className="mr-1" /> Accueil
          </Link>
          <div className="relative">
            <button className="text-gray-300 hover:text-white focus:outline-none flex items-center" onClick={toggleCategories}>
              <FaTags className="mr-1" /> Catégories <FaChevronDown className="ml-1" />
            </button>
            {isCategoriesOpen && (
              <div ref={menu} className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
                <Link href="/category/immobilier" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaBuilding className="mr-2" /> Immobilier
                </Link>
                <Link href="/category/vehicules" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaCar className="mr-2" /> Véhicules
                </Link>
                <Link href="/category/electromenager" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaRegLightbulb className="mr-2" /> Électroménager
                </Link>
                <Link href="/category/electronique" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaLaptop className="mr-2" /> Électronique
                </Link>
                <Link href="/category/homme" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaTshirt className="mr-2" /> Mode Homme
                </Link>
                <Link href="/category/femme" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaTshirt className="mr-2" /> Mode Femme
                </Link>
                <Link href="/category/enfant" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaChild className="mr-2" /> Mode Enfant
                </Link>
                <Link href="/category/autres" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaEllipsisH className="mr-2" /> Autres
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button className="text-gray-300 hover:text-white focus:outline-none flex items-center" onClick={toggleProfile}>
              <FaUser className="mr-1" /> Mon Compte <FaChevronDown className="ml-1" />
            </button>
            {isProfileOpen && (
              <div ref={menuprof} className="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
                <Link href="/profile/view" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaUser className="mr-2" /> Voir Profil
                </Link>
                <Link href="/profile/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaCog className="mr-2" /> Paramètres
                </Link>
                <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                  <FaSignInAlt className="mr-2" /> Se connecter
                </Link>
              </div>
            )}
          </div>
          <Link href="/annonce" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center">
            <FaPlus className="mr-1" /> Déposer une annonce
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
