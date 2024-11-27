'use client'
import Image from "next/image";
import React, { useState } from "react";
import { ProfileProps } from "@/types/user";

const ProfilePage: React.FC<ProfileProps> = ({ user, posts }) => {
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleChangeProfilePicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl mt-20 mx-auto p-6">
      {/* Section Profil */}
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 bg-white shadow-lg p-6 rounded-lg">
        <div className="relative">
          <Image
            src={profileImage}
            width={100}
            height={100}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
          <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleChangeProfilePicture}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828V7H15.172z"
              />
            </svg>
          </label>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600 mt-2">Email: {user.email}</p>
          <p className="text-gray-600 mt-1">Téléphone: {user.phone}</p>
        </div>
      </div>

      {/* Section Annonces */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Vos annonces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={post.image}
                  width={400}
                  height={200}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 mt-2">{post.price} FCFA</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Aucune annonce postée.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
