import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

// Simple placeholders for other routes
const CVPlaceholder = () => (
  <div className="flex-grow flex items-center justify-center bg-slate-50 p-8">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Curriculum Vitae</h1>
      <p className="text-slate-600 mb-6">[Insérer le PDF du CV ici ou un lien de téléchargement]</p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Télécharger PDF</button>
    </div>
  </div>
);

const ContactPlaceholder = () => (
  <div className="flex-grow flex items-center justify-center bg-slate-50 p-8">
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Contactez-moi</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="votre@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" rows={4} placeholder="[Votre message...]"></textarea>
        </div>
        <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Envoyer
        </button>
      </form>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/cv" element={<CVPlaceholder />} />
          <Route path="/contact" element={<ContactPlaceholder />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
