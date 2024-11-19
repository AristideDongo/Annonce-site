import React from 'react';
import Link from 'next/link';
import CategoryCard from '@/components/Card/CategoryCard';
import ElectroniqueImage from '@/images/category/electronique.jpg'
import HommeImage from '@/images/category/homme.jpg'
import FemmeImage from "@/images/category/femme.jpg"
import ImmobilierImage from "@/images/category/immobilier.jpg"

const categories = [
  {
    title: 'Électronique',
    link: '/category/electronique',
    imageUrl: ElectroniqueImage,
  },
  {
    title: 'Mode Homme',
    link: '/category/homme',
    imageUrl: HommeImage,
  },
  {
    title: 'Mode Femme',
    link: '/category/femme',
    imageUrl: FemmeImage,
  },
  {
    title: 'Immobilier',
    link: '/category/immobilier',
    imageUrl: ImmobilierImage,
  },
];

const PopularCategories: React.FC = () => {
  return (
    <div className="container mb-5 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-10">Catégories Populaires</h2>
      <div className="flex justify-between space-x-1 overflow-x-auto">
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
