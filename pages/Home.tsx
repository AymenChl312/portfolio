import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
                <span className="block">Aymen Chlabi</span>
                <span className="block text-blue-600 mt-2 text-3xl sm:text-4xl">Étudiant en Informatique</span>
              </h1>
              
              <div className="prose text-slate-600 mb-8 text-lg">
                <p>
                  Actuellement en 3ème année de BUT Informatique, je me spécialise dans le développement web et applicatif. Passionné par les nouvelles technologies, je recherche activement des opportunités pour mettre mes compétences en pratique.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/projets"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Voir mes projets
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Me contacter
                </Link>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-4 translate-y-4"></div>
                <img
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  src="../img/portrait.jpg"
                  alt="Portrait de Aymen Chlabi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Value Proposition */}
      <section className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi ce portfolio ?</h2>
          <p className="max-w-3xl mx-auto text-slate-600">
            Ce portfolio illustre mon parcours académique et mes projets personnels, démontrant ma capacité à répondre à des besoins techniques réels.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
