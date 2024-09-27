'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FormData, Errors } from '@/types/AdFormType';
import { locations } from '@/data/locations';

const PostAdForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    photos: ['', '', '', '', '', ''],
    category: '',
    price: '',
    phone: '',
    whatsapp: '',
    location: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [photoPreviews, setPhotoPreviews] = useState<string[]>(['', '', '', '', '', '']);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
  
    if (!formData.title) {
      newErrors.title = 'Le titre est requis';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Le titre ne doit pas dépasser 100 caractères';
    }
  
    if (!formData.description) {
      newErrors.description = 'La description est requise';
    } else if (formData.description.length > 700) {
      newErrors.description = 'La description ne doit pas dépasser 700 caractères';
    }
  
    if (!formData.category) {
      newErrors.category = 'La catégorie est requise';
    }
  
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Le prix doit être un nombre positif';
    }
  
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Le numéro de téléphone doit comporter 10 chiffres';
    }
  
    if (formData.whatsapp && !phoneRegex.test(formData.whatsapp)) {
      newErrors.whatsapp = 'Le numéro WhatsApp doit comporter 10 chiffres';
    }
  
    if (!formData.location || !locations.some(option => option.value === formData.location)) {
      newErrors.location = 'La localisation sélectionnée n\'est pas valide';
    }
    
    const filledPhotos = formData.photos.filter(photo => photo !== '');
    if (filledPhotos.length < 3) {
      newErrors.photos = 'Au moins trois photos sont requises';
    }
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handlePhotoChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newPhotos = [...formData.photos];
      newPhotos[index] = e.target.files[0].name; // Store filename or another relevant data
      setFormData((prevData) => ({
        ...prevData,
        photos: newPhotos,
      }));
      
      // Set the preview URL
      const newPhotoPreviews = [...photoPreviews];
      newPhotoPreviews[index] = URL.createObjectURL(e.target.files[0]);
      setPhotoPreviews(newPhotoPreviews);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('/api/post-ad', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi des données');
        }
  
        const result = await response.json();
        console.log(result);
        alert("L'annonce a été postée avec succès !");
        
        // Réinitialiser le formulaire
        setFormData({
          title: '',
          description: '',
          photos: ['', '', '', '', '', ''],
          category: '',
          price: '',
          phone: '',
          whatsapp: '',
          location: ''
        });
        setPhotoPreviews(['', '', '', '', '', '']);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Formulaire invalide');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mb-6 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Titre
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500`}
          required
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500`}
          rows={4}
          required
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      
      <div>
  <label className="block text-sm font-medium text-gray-700">
    Photos
  </label>
  <div className="grid grid-cols-3 gap-4">
    {formData.photos.map((photo, index) => (
      <div key={index} className="relative">
        <label className="flex items-center justify-center h-32 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200">
          {photoPreviews[index] ? (
            <Image
              src={photoPreviews[index]}
              width={200}
              height={200}
              alt={`Preview ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
          <input
            type="file"
            name="photos"
            onChange={(e) => handlePhotoChange(index, e)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </label>
      </div>
    ))}
  </div>
  {errors.photos && <p className="text-red-500 text-xs mt-1">{errors.photos}</p>}
</div>


      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-medium">Catégorie</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring focus:border-indigo-400`}
        >
          <option value="">Sélectionnez une catégorie</option>
          <option value="immobilier">Immobilier</option>
          <option value="vehicule">Véhicules</option>
          <option value="electronique">Electronique</option>
          <option value="electromenager">Electroménager</option>
          <option value="mode-homme">Mode Homme</option>
          <option value="mode-femme">Mode Femme</option>
          <option value="mode-enfant">Mode Enfant</option>
          <option value="autres">Autres</option>
        </select>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Prix
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500`}
          required
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500`}
          required
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
          Numéro WhatsApp (facultatif)
        </label>
        <input
          type="tel"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className={`mt-1 block w-full border ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500`}
        />
        {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
      </div>

      <div>
        <label className="block text-gray-700 text-lg font-medium">Localisation</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring focus:border-indigo-400`}
          required
        >
          <option value="">Sélectionnez une localisation</option>
          {locations.map((loc) => (
            <option key={loc.value} value={loc.value}>
              {loc.label}
            </option>
          ))}
        </select>
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Publier {`l'annonce`}
      </button>
    </form>
  );
};

export default PostAdForm;
