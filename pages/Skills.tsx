import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';

interface CompetenceBlock {
  title: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  story: string;
  projectTitle: string;
}

const Skills: React.FC = () => {
  const competences: CompetenceBlock[] = [
    {
      title: "RÉALISER",
      colorClass: "bg-red-700 border-red-700",
      bgClass: "bg-red-50",
      textClass: "text-red-800",
      projectTitle: "Projet Réseau Social (Projet Universitaire S5)",
      story: "Pour valider ma capacité à concevoir et développer une solution complète, j'ai réalisé une application sociale full-stack. J'ai traduit des besoins fonctionnels en une architecture technique robuste, tout en assurant un code propre et maintenable pour faciliter le travail de toute l'équipe."
    },
    {
      title: "OPTIMISER",
      colorClass: "bg-orange-500 border-orange-500",
      bgClass: "bg-orange-50",
      textClass: "text-orange-800",
      projectTitle: "IA de Traitement de Données (Projet Universitaire S4)",
      story: "L'optimisation ne consiste pas seulement à coder, mais à coder intelligemment. J'ai développé un algorithme capable de trier une base de données volumineuse en quelques secondes au lieu de plusieurs minutes, garantissant ainsi une analyse précise en temps quasi-réel."
    },
    {
      title: "ADMINISTRER",
      colorClass: "bg-yellow-500 border-yellow-500",
      bgClass: "bg-yellow-50",
      textClass: "text-yellow-900",
      projectTitle: "Déploiement Web PHP (Projet Académique)",
      story: "Savoir coder ne suffit pas, il faut savoir rendre disponible. J'ai administré la mise en production d'un site web dynamique sur un serveur distant, en configurant l'environnement et les droits d'accès pour assurer un service disponible 24/7 et sécurisé."
    },
    {
      title: "GÉRER",
      colorClass: "bg-lime-600 border-lime-600",
      bgClass: "bg-lime-50",
      textClass: "text-lime-800",
      projectTitle: "Module de Confidentialité & RGPD (Projet École)",
      story: "Gérer un système d'information, c'est aussi gérer ses données de manière responsable. J'ai implémenté une politique stricte de gestion des données personnelles (Droit à l'oubli, confidentialité), assurant la conformité légale de notre projet face aux normes RGPD."
    },
    {
      title: "CONDUIRE",
      colorClass: "bg-blue-900 border-blue-900",
      bgClass: "bg-blue-50",
      textClass: "text-blue-900",
      projectTitle: "Product Owner & Chef de Projet (Projet Agile)",
      story: "Conduire un projet demande vision et organisation. En tant que Product Owner (méthode SCRUM) et chef de projet pour un jeu vidéo, j'ai piloté des équipes pluridisciplinaires, assuré la cohésion du groupe et garanti le respect des délais de livraison."
    },
    {
      title: "COLLABORER",
      colorClass: "bg-slate-900 border-slate-900",
      bgClass: "bg-slate-100",
      textClass: "text-slate-900",
      projectTitle: "Stage chez Désirade & Travaux de Groupe",
      story: "L'informatique est un sport d'équipe. Lors de mon stage de 2ème année, j'ai collaboré au sein d'une grande structure professionnelle, apprenant à adapter ma communication technique et à utiliser des outils collaboratifs (Git, Ticketing) pour synchroniser mon travail avec des développeurs seniors."
    }
  ];

  return (
    <main className="flex-grow bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Mon Portfolio de Compétences
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Au-delà de la technique, voici comment je mobilise les 6 compétences fondamentales du BUT Informatique dans des contextes réels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {competences.map((comp, index) => (
            <div key={index} className={`rounded-xl overflow-hidden border-2 shadow-sm flex flex-col ${comp.bgClass} border-slate-200 transition-transform hover:-translate-y-1 duration-300`}>
              
              {/* Header coloré */}
              <div className={`${comp.colorClass} p-4 text-white flex justify-between items-center`}>
                <h2 className="text-2xl font-bold uppercase tracking-wider">
                  {comp.title}
                </h2>
                <Briefcase className="h-6 w-6 opacity-80" />
              </div>

              {/* Contenu */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Titre du projet en évidence */}
                <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${comp.textClass}`}>
                  {comp.projectTitle}
                </h3>
                
                {/* L'histoire / La preuve */}
                <p className="text-slate-700 text-lg leading-relaxed flex-grow">
                  {comp.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Envie d'en voir plus ?
          </h2>
          <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-lg">
            Retrouvez les détails techniques, captures d'écran et liens GitHub de ces réalisations dans la section Projets.
          </p>
          <Link 
            to="/projets" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
          >
            Explorer mes Projets
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Skills;