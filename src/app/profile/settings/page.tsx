'use client';

import React, { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    oldPassword: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour la mise à jour des informations utilisateur
    console.log('Données soumises:', formData);
  };

  return (
    <div className="mx-auto max-w-7xl mt-20 p-10">
      <h1 className="text-2xl font-semibold mb-4">Paramètres du compte</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Entrez votre nom"
            />
          </div>

          {/* Ancien mot de passe */}
          <div>
            <label className="block text-sm font-medium mb-1">Ancien mot de passe</label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Entrez votre mot de passe"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Nouveau mot de passe */}
          <div>
            <label className="block text-sm font-medium mb-1">Nouveau mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Entrez un nouveau mot de passe"

            />
          </div>



          {/* Numero de telephone */}
          <div>
            <label className="block text-sm font-medium mb-1">Numero de telephone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Entrez votre numéro"
            />
          </div>

          {/* Confirmation du mot de passe */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Confirmez votre mot de passe"
            />
          </div>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
