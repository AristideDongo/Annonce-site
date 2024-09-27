import React from 'react';
import PostAdForm from './PostAdForm';

export default function Page() {
  return (
    <div>
      {/* Header de la page */}
      <header className="mt-20 text-black p-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center">Poster une annonce</h1>
        </div>
      </header>

      {/* Formulaire pour poster une annonce */}
      <main className="mt-8">
        <PostAdForm />
      </main>
    </div>
  );
}
