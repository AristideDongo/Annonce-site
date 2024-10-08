import Image from 'next/image';
import React from 'react';

const CategoryPage = () => {
  const annonces = [
    {
      _id: '1',
      title: 'Annonce 1',
      price: '15000 FCFA',
      photos: '',
    },
    {
      _id: '2',
      title: 'Annonce 2',
      price: '10000 FCFA',
      photos: '',
    },
    {
      _id: '3',
      title: 'Annonce 3',
      price: '25000 FCFA',
      photos: '',
    },
  ];


  return (
    <div className="min-h-screen font-custom bg-gray-200 p-6">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 mt-16 text-[#333333]">AUTRES</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {annonces.map((annonce) => (
            <div key={annonce._id} className="bg-white p-1 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {annonce.photos && annonce.photos[0] ? (
                <div className="relative">
                  <Image
                    src={annonce.photos[0]}
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
