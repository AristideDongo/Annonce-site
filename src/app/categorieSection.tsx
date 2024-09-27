// components/Categories.tsx
'use client';
import Image from 'next/image';

const Categories = () => {
  // Définir les catégories avec leurs images correspondantes
  const categories = [
    { name: 'Électronique', image: '/images/electronique.jpg' },
    { name: 'Mode Homme', image: '/images/homme.webp' },
    { name: 'Mode Femme', image: '/images/mode-femme.jpg' },
    { name: 'Mode Enfant', image: '/images/mode-enfant.jpg' },
    { name: 'Autres', image: '/images/autres.jpg' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Catégories populaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src={category.image}
                alt={category.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
