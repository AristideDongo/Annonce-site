import React from 'react';
import CategoryCard from '@/components/Card/CategoryCard';

const categories = [
  {
    title: 'Électronique',
    imageUrl: '/images/category/electronique.jpg'
  },
  {
    title: 'Mode Homme',
    imageUrl: '/images/category/homme.jpg'
  },
  {
    title: 'Mode Femme',
    imageUrl: '/images/category/femme.jpg'
  },
  {
    title: 'Mode Enfant',
    imageUrl: '/images/category/enfant.jpg'
  },
  {
    title: 'Immobilier',
    imageUrl: '/images/category/immobilier.jpg'
  },
];

const PopularCategories: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Catégories Populaires</h2>
      <div className="flex justify-between space-x-6 overflow-x-auto">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
