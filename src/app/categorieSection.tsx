import React from 'react';
import Link from 'next/link';
import CategoryCard from '@/components/Card/CategoryCard';

const categories = [
  {
    title: 'Électronique',
    link: '/category/electronique',
    imageUrl: '/images/category/electronique.jpg',
  },
  {
    title: 'Mode Homme',
    link: '/category/homme',
    imageUrl: '/images/category/homme.jpg',
  },
  {
    title: 'Mode Femme',
    link: '/category/femme',
    imageUrl: '/images/category/femme.jpg',
  },
  {
    title: 'Mode Enfant',
    link: '/category/enfant',
    imageUrl: '/images/category/enfant.jpg',
  },
  {
    title: 'Immobilier',
    link: '/category/immobilier',
    imageUrl: '/images/category/immobilier.jpg',
  },
];

const PopularCategories: React.FC = () => {
  return (
    <div className="container mb-5 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Catégories Populaires</h2>
      <div className="flex justify-between space-x-6 overflow-x-auto">
        {categories.map((category) => (
          <Link key={category.title} href={category.link}>
            <CategoryCard
              title={category.title}
              imageUrl={category.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
