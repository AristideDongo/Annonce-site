import React from "react";
import Image from "next/image";
import Image1 from '@/images/Sign up-rafiki.png';
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaCity, FaPhoneAlt } from 'react-icons/fa'; // Importez les icônes

const RegisterPage = () => {
  return (
    <div className="min-h-screen mt-16 bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <h2 className="text-3xl text-center font-bold mb-6">Creer un compte</h2>
              <div className="flex flex-col items-center">

                <div className="relative">
                  <FaUser className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="text"
                    placeholder="Nom d'utilisateur"
                  />
                </div>

                <div className="relative mt-5">
                  <FaEnvelope className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="relative mt-5">
                  <FaPhoneAlt className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="tel"
                    placeholder="Numero de Telephone"
                  />
                </div>

                <div className="relative mt-5">
                  <FaLock className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </div>

                <div className="relative mt-5">
                  <FaLock className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="password"
                    placeholder="Confirmer le mot de passe"
                  />
                </div>

                <div className="relative mt-5">
                  <FaCity className="absolute left-3 top-3 mt-2 text-gray-400" />
                  <input
                    className="w-[400px] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white pl-10"
                    type="text"
                    placeholder="Addresse"
                  />
                </div>

                <button
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-">{`S'incrire`}</span>
                </button>

                <p className="mt-6 text-xs text-gray-600 text-center">
                  Vous avez deja un compte ?
                  <Link href="/login" className="border-b border-blue-500 text-blue-500 border-dotted ml-1">
                    Se connecter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat login"
            style={{ backgroundImage: `url(${Image1.src})` }}
          >
            <Image
              src={Image1}
              alt="Register illustration"
              width={700}
              height={400}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
