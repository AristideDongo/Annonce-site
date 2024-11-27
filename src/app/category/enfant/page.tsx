import Image from 'next/image';
import React from 'react';
import { productsData } from '@/data/productsData';

const CategoryPage = () => {

  return (
    <div className="min-h-screen font-custom p-6">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 mt-16 text-[#333333]">MODE ENFANT</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {productsData.map((annonce) => (
            <div key={annonce.id} className="bg-white p-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {annonce.image && annonce.image[0] ? (
                <div className="relative">
                  <Image
                    src={annonce.image[0]}
                    alt="Photo de l'annonce"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover object-center rounded-t-lg"
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
                  <span className="text-red-500">Aucune image</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2 text-blue-600 hover:text-orange-500 break-words cursor-pointer" style={{ maxHeight: '3em' }}>
                  {annonce.title}
                </h2>
                <p className="text-black text-lg mt-9 font-bold">{annonce.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
