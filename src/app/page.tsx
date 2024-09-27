'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa'; // Import des icônes
import Pagination from './pagination';
import Categories from './categorieSection';
import useOutsideClick from '@/hook/outSideClick'; // Import du hook personnalisé

const productsData = [
  // Exemples de produits
  {
    id: 1,
    title: 'Produit 1',
    image: '',
    location: 'Bordeaux',
    price: 9.99,
    category: 'electronique',
    date: '2024-09-20',
  },
  {
    id: 2,
    title: 'Produit 2',
    image: '',
    location: 'Paris',
    price: 19.99,
    category: 'mode-homme',
    date: '2024-09-21',
  },
  {
    id: 3,
    title: 'Produit 3',
    image: '',
    location: 'Marseille',
    price: 29.99,
    category: 'mode-femme',
    date: '2024-09-22',
  },
];

export default function Home() {
  const itemsPerPage = 45;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedLocation, setSelectedLocation] = useState('Tous');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState(''); // État pour le tri
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // État pour la sidebar
  const sidebarRef = useRef(null); // Référence à la sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Utiliser la fonction pour fermer la sidebar en cas de clic à l'extérieur
  useOutsideClick(sidebarRef, () => setIsSidebarOpen(false));

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesLocation = selectedLocation === 'Tous' || product.location === selectedLocation;
    const matchesPrice = (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice));
    return matchesCategory && matchesLocation && matchesPrice;
  });

  // Trier les produits en fonction de l'option choisie
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === 'Plus récent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'Plus ancien') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOption === 'Prix croissant') {
      return a.price - b.price;
    } else if (sortOption === 'Prix décroissant') {
      return b.price - a.price;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16">
        <div className="container mt-10 mx-auto text-center">
          <h1 className="text-4xl font-bold">Bienvenue sur AnnonceCôte</h1>
          <p className="mt-4 text-lg">
            Trouvez les meilleures offres {`d'achats`} et de ventes en ligne
          </p>
        </div>
      </section>

      {/* Section Catégories */}
      <Categories />

      {/* Bouton pour ouvrir la sidebar */}
      <div className="container mx-auto my-4">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
        >
          <FaBars className="mr-2" /> Filtres et Tri
        </button>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef} // Utiliser la référence sur l'élément de la sidebar
        className={`fixed top-0 left-0 w-80 h-full bg-white shadow-md transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="p-4">

          {/* Filtre par catégorie */}
          <div>
            <label htmlFor="category" className="block mt-20 text-sm font-medium text-gray-700">
              Catégorie
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
          <option value="Tous">Sélectionnez une catégorie</option>
          <option value="immobilier">Immobilier</option>
          <option value="vehicule">Véhicules</option>
          <option value="electronique">Electronique</option>
          <option value="electromenager">Electroménager</option>
          <option value="mode-homme">Mode Homme</option>
          <option value="mode-femme">Mode Femme</option>
          <option value="mode-enfant">Mode Enfant</option>
          <option value="autres">Autres</option>
            </select>
          </div>

          {/* Filtre par localisation */}
          <div className="mt-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Localisation
            </label>
            <select
              id="location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Tous">Tous</option>
              <option value="Bordeaux">Bordeaux</option>
              <option value="Paris">Paris</option>
              <option value="Marseille">Marseille</option>
            </select>
          </div>

          {/* Filtre par prix min et max */}
          <div className="mt-4">
            <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">
              Prix Min
            </label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Min"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">
              Prix Max
            </label>
            <input
              type="number"
              id="max-price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Max"
            />
          </div>

          {/* Tri des résultats */}
          <div className="mt-10">
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
              Trier par
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Sélectionnez une option</option>
              <option value="Plus récent">Plus récent</option>
              <option value="Plus ancien">Plus ancien</option>
              <option value="Prix croissant">Prix croissant</option>
              <option value="Prix décroissant">Prix décroissant</option>
            </select>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 mb-4 mt-10 flex items-center"
          >
            <FaTimes className="mr-5" /> Fermer
          </button>
        </div>
      </div>

      {/* Résultats des produits */}
      <section className="container mx-auto my-8">
        <h2 className="text-2xl text-center font-bold mb-4">Annonces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentItems.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-500 mb-1">
                <FaMapMarkerAlt className="inline mr-1" />
                {product.location}
              </p>
              <p className="text-green-500 font-bold mb-2">{product.price} €</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
