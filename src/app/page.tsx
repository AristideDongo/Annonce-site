'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaBars } from 'react-icons/fa';
import Pagination from './pagination';
import Categories from './categorieSection';
import useOutsideClick from '@/hook/outSideClick';
import { productsData } from '@/data/productsData';
import FilterSidebar from '@/components/FilterSidebar';

export default function Home() {
  const itemsPerPage = 45;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  // const [selectedLocation, setSelectedLocation] = useState('Tous');
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
    const matchesPrice = (minPrice === '' || product.price >= parseFloat(minPrice)) &&
      (maxPrice === '' || product.price <= parseFloat(maxPrice));
    return matchesCategory && matchesPrice;
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white py-16">
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
      <FilterSidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortOption={sortOption}
        setSortOption={setSortOption}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        sidebarRef={sidebarRef}
      />
      {/* Résultats des produits */}
      <section className="container mx-auto my-8">
        <h2 className="text-2xl text-center font-bold mb-4">Annonces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentItems.map((product) => (
            <Link key={product.id} href={`/details/${product.id}`} >
              <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
                <Image
                  src={product.image[0]}
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
                <p className="text-green-500 font-bold mb-2">
                  {product.price} FCFA
                </p>
              </div>
            </Link>
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
