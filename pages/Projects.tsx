import React from 'react';
import { ExternalLink, Github, Gamepad2 } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
      {
          id: 1,
          title: "That One Dino Game",
          date: "été 2024",
          context: "Personnel",
          image: "/img/dino.gif",
          description: {
              need: "Apprendre à manager une équipe de collaborateurs bénévoles à distance pour créer un prototype de jeu de plateforme.",
              solution: "Recrutement et organisation via Discord (1 Développeur, 1 UI/UX Designer, 2 Artistes, 1 Compositeur). Développement du moteur de jeu sous Unity (C#).",
              result: "4 niveaux jouables disponibles publiquement. Acquisition de solides compétences en leadership et gestion d'équipe à distance."
          },
          links: {
              github: "https://github.com/AymenChl312/ThatOneDinoGame"
          }
      },
    {
      id: 2,
      title: "Projet de cours PHP: Gestion d'équipe sportive",
      date: "3eme semestre IUT, 2024",
      context: "École",
      image: "/img/php_quidditch.png",
      description: {
        need: "Concevoir un site web dynamique hébergé et disponible 24/7 pour la gestion complète d'une équipe sportive (effectif, notations, planning de matchs).",
        solution: "Développement d'une application web en HTML5, CSS3 et PHP natif en respectant strictement l'architecture MVC.",
        result: "Maîtrise de l'architecture MVC, du langage PHP et des contraintes liées au déploiement et à l'hébergement web."
      },
      links: {
        github: "https://github.com/Eiior/Projet_PHP"
      }
    },
    {
      id: 3,
      title: "Gestion Immobilière (Projet Groupe)",
      date: "Janvier 2025",
      context: "École",
      image: "/img/batiment.png",
      description: {
        need: "Développer une application de gestion immobilière performante capable de traiter une base de données volumineuse.",
        solution: "Conception et développement d'une application lourde en JAVA avec gestion optimisée des données.",
        result: "Projet livré fonctionnel grâce à une excellente coordination d'équipe (5 personnes). Renforcement des compétences en JAVA et en modélisation de bases de données."
      },
      links: {
        github: "https://github.com/Aurelien-vr/S3C01",
      }
    },
    {
          id: 4,
          title: "Stage chez Désirade",
          date: "Juin 2025",
          context: "Stage",
          image: "/img/desirade.png",
          description: {
              need: "S'intégrer dans une structure professionnelle, comprendre les processus métiers et participer aux réunions clients.",
              solution: "Stage de 10 semaines au sein de l'ESN Désirade (Toulouse) en tant que développeur.",
              result: "Intégration professionnelle réussie, participation active aux livrables techniques et compréhension des enjeux clients."
          },
          links: {
              github: "https://www.canva.com/design/DAGp76tCkG4/Xcjp3MztZRx1rXsyRYzm-Q/edit?utm_content=DAGp76tCkG4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          }
      },
      {
          id: 5,
          title: "Idle Tower",
          date: "Septembre 2025",
          context: "Personnel",
          image: "/img/IdleTower.gif",
          description: {
              need: "Concevoir un jeu autonome ('Idle Game') reposant sur des algorithmes de génération de chemin (Pathfinding).",
              solution: "Développement complet sous Unity (C#) avec implémentation de systèmes automatisés.",
              result: "1 niveau jouable publié. Maîtrise des algorithmes de génération procédurale et de pathfinding sous Unity."
          },
          links: {
              github: "https://github.com/AymenChl312/TowerIdle"
          }
      },
      {
          id: 6,
          title: "Pic Ready",
          date:"Janvier 2026",
          context: "École",
          image: "/img/PicReady.gif",
          description: {
              need: "Mener un projet de fin d'étude de A à Z avec 'Carte Blanche' sur le sujet et la technologie.",
              solution: "Création du réseau social 'PicReady'. Application de la méthode Agile SCRUM, où j'ai occupé le rôle de Product Owner.",
              result: "Application mobile finalisée et disponible au téléchargement. Solide expérience acquise en gestion de projet Agile (Product Owner) et en déploiement mobile."
          },
          links: {
              github: "https://github.com/Yeesou/Pic-Ready"
          }
      },
  ];

  const getContextBadgeColor = (context: string) => {
    switch (context) {
      case 'École': return 'bg-indigo-100 text-indigo-800';
      case 'Stage': return 'bg-emerald-100 text-emerald-800';
      case 'Personnel': return 'bg-amber-100 text-amber-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <main className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Mes Projets</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Une sélection de mes réalisations académiques et personnelles (Développement Web & Jeu Vidéo).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <article key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-200 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${getContextBadgeColor(project.context)}`}>
                    {project.context}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h2>
                
                {/* Structured Description: Need -> Solution -> Result */}
                <div className="space-y-4 mb-8 text-slate-600 flex-grow">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Besoin</h3>
                    <p className="text-sm">{project.description.need}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Solution</h3>
                    <p className="text-sm">{project.description.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">Résultat</h3>
                    <p className="text-sm">{project.description.result}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-slate-100">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Voir le Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      {/* Distinguish between 'Play' for games and 'View' for web */}
                      {project.title.toLowerCase().includes('jeu') ? (
                        <>
                          <Gamepad2 className="mr-2 h-4 w-4" />
                          Jouer
                        </>
                      ) : (
                        <>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Voir le Résultat
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
