import React from 'react';
import { Download } from 'lucide-react';

const CV: React.FC = () => {
  const cvUrl = "/CV_AymenChlabi.pdf#view=Fit&toolbar=0&navpanes=0";

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-50"> 
      <div className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-800">Mon Curriculum Vitae</h1>
        <a 
          href={cvUrl} 
          download="CV_AymenChlabi.pdf"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger le PDF
        </a>
      </div>
      <div className="flex-grow w-full h-full p-4 md:p-8">
        <div className="w-full h-full bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <iframe 
            src={cvUrl} 
            className="w-full h-full" 
            title="CV Aymen Chlabi"
          >
            <div className="flex items-center justify-center h-full">
              <p>Votre navigateur ne peut pas afficher le PDF. Veuillez le télécharger.</p>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CV;