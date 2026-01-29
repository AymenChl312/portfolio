import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';

interface CompetenceBlock {
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
  textClass: string;
  skills: string[];
  example: {
    project: string;
    details: string;
  };
}

const Skills: React.FC = () => {
  const competences: CompetenceBlock[] = [
    {
      title: "RÉALISER",
      description: "Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.",
      colorClass: "bg-red-700 border-red-700",
      bgClass: "bg-red-50",
      textClass: "text-red-800",
      skills: [
        "CE1.01 | En respectant les besoins décrits par le client",
        "CE1.03 | En appliquant les principes algorithmiques",
        "CE1.04 | En veillant à la qualité du code et à sa documentation",
        "CE1.06 | En choisissant les ressources techniques appropriées"
      ],
      example: {
        project: "Projet Réseau Social (SAE Semestre 5)",
        details: "Conception et développement full-stack d'une application sociale complexe. J'ai dû traduire des besoins fonctionnels vagues en une architecture technique robuste, tout en assurant un code propre et maintenable pour faciliter le travail de l'équipe."
      }
    },
    {
      title: "OPTIMISER",
      description: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...",
      colorClass: "bg-orange-500 border-orange-500",
      bgClass: "bg-orange-50",
      textClass: "text-orange-800",
      skills: [
        "CE2.01 | En formalisant et modélisant des situations complexes",
        "CE2.02 | En recensant les algorithmes et les structures de données usuels",
        "CE2.03 | En s'appuyant sur des schémas de raisonnement",
        "CE2.04 | En justifiant les choix et validant les résultats"
      ],
      example: {
        project: "IA de Traitement de Données (SAE Semestre 4)",
        details: "Développement d'un algorithme d'IA capable de trier et d'analyser une base de données Excel volumineuse. L'enjeu était de réduire la complexité algorithmique pour passer d'un traitement de plusieurs minutes à quelques secondes, garantissant ainsi une analyse précise en temps quasi-réel."
      }
    },
    {
      title: "ADMINISTRER",
      description: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.",
      colorClass: "bg-yellow-500 border-yellow-500",
      bgClass: "bg-yellow-50",
      textClass: "text-yellow-900",
      skills: [
        "CE3.01 | En sécurisant le système d'information",
        "CE3.03 | En appliquant les normes en vigueur et les bonnes pratiques",
        "CE3.02 | En offrant une qualité de service optimale",
        "CE3.04 | En assurant la continuité d'activité"
      ],
      example: {
        project: "Déploiement Web PHP (Semestre 4)",
        details: "Mise en production d'un site web dynamique sur un serveur distant. J'ai configuré l'environnement d'hébergement et géré les droits d'accès pour assurer que le service soit disponible 24/7 tout en protégeant le serveur contre les accès non autorisés."
      }
    },
    {
      title: "GÉRER",
      description: "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage.",
      colorClass: "bg-lime-600 border-lime-600",
      bgClass: "bg-lime-50",
      textClass: "text-lime-800",
      skills: [
        "CE4.01 | En respectant les réglementations (vie privée, RGPD)",
        "CE4.02 | En respectant les enjeux économiques, sociétaux et écologiques",
        "CE4.03 | En s'appuyant sur des bases mathématiques",
        "CE4.05 | En assurant la cohérence et la qualité"
      ],
      example: {
        project: "Module de Confidentialité & RGPD (SAE Semestre 5)",
        details: "Implémentation d'une politique stricte de gestion des données personnelles dans notre application. J'ai développé les fonctionnalités de 'Droit à l'oubli' (suppression de compte) et de confidentialité, assurant la conformité légale du projet face aux normes RGPD."
      }
    },
    {
      title: "CONDUIRE",
      description: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique.",
      colorClass: "bg-blue-900 border-blue-900",
      bgClass: "bg-blue-50",
      textClass: "text-blue-900",
      skills: [
        "CE5.04 | En adoptant une démarche proactive, créative et critique",
        "CE5.02 | En respectant les règles juridiques et les normes en vigueur",
        "CE5.01 | En communiquant efficacement avec les différents acteurs",
        "CE5.03 | En sensibilisant à une gestion éthique et responsable"
      ],
      example: {
        project: "Product Owner & Lead Project (SAE S5 / Dino Game)",
        details: "Application de la méthode SCRUM en tant que Product Owner pour la SAE. En parallèle, j'ai dirigé une équipe pluridisciplinaire (devs, designers, musiciens) pour 'ThatOneDinoGame', assurant la cohésion et le respect des délais de livraison."
      }
    },
    {
      title: "COLLABORER",
      description: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
      colorClass: "bg-slate-900 border-slate-900",
      bgClass: "bg-slate-100",
      textClass: "text-slate-900",
      skills: [
        "CE6.01 | En inscrivant sa démarche au sein d'une équipe pluridisciplinaire",
        "CE6.02 | En accompagnant la mise en œuvre des évolutions informatiques",
        "CE6.03 | En veillant au respect des contraintes juridiques",
        "CE6.04 | En développant une communication efficace et collaborative"
      ],
      example: {
        project: "Stage chez Désirade & Projets IUT",
        details: "Intégration réussie au sein d'une grande équipe professionnelle lors de mon stage de 2ème année. J'y ai appris à adapter ma communication technique et à utiliser les outils collaboratifs (Git, Ticketing) pour synchroniser mon travail avec celui de développeurs seniors."
      }
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
            Ce portfolio illustre les 6 compétences fondamentales du BUT Informatique à travers mes réalisations concrètes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {competences.map((comp, index) => (
            <div key={index} className={`rounded-xl overflow-hidden border-2 shadow-sm flex flex-col ${comp.bgClass} border-slate-200`}>
              
              {/* Header */}
              <div className={`${comp.colorClass} p-4 text-white`}>
                <h2 className="text-2xl font-bold uppercase tracking-wider text-center">
                  {comp.title}
                </h2>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="font-medium text-slate-800 text-lg leading-relaxed mb-6 pb-6 border-b border-slate-300/50">
                  {comp.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2 mb-8">
                  {comp.skills.map((skill, skillIndex) => {
                    const [code, text] = skill.split('|');
                    return (
                      <div key={skillIndex} className="flex items-start">
                        <CheckCircle2 className={`h-4 w-4 mt-1 mr-2 flex-shrink-0 ${comp.textClass} opacity-75`} />
                        <p className="text-slate-700 text-sm">
                          <span className={`font-bold mr-1 ${comp.textClass}`}>{code}</span>
                          {text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Example Box */}
                <div className="mt-auto bg-white/60 rounded-lg p-4 border border-slate-200">
                  <div className={`flex items-center mb-2 ${comp.textClass}`}>
                    <Briefcase className="h-5 w-5 mr-2" />
                    <h3 className="font-bold text-sm uppercase">Mise en situation réelle</h3>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{comp.example.project}</p>
                  <p className="text-sm text-slate-600 italic">
                    "{comp.example.details}"
                  </p>
                </div>
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
            Retrouvez le détail complet, les captures d'écran et le code source de ces réalisations dans la section Projets.
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