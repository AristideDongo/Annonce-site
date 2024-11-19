import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CategoryCardProps {
  title: string;
  imageUrl: string | StaticImageData;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-[300px] hover:text-green-600 transition duration-300 ">
      <Image src={imageUrl} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
