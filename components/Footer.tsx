import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h3>
            <p className="text-sm">aymenchlabi04@gmail.com</p>
            <p className="text-sm">07 69 61 24 22</p>
            <p className="text-sm">Toulouse, France</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Réseaux</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a href="mailto:email@example.com" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Copyright / Legal */}
          <div className="space-y-4 md:text-right">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Aymen Chlabi. Tous droits réservés.
            </p>
            <p className="text-xs text-slate-500">
              Site réalisé en React + Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
