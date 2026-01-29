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
              need: "Apprendre à gérer une équipe composé d'inconnu sur internet en tant que chef pour créer un début de jeu vidéo classifié platformer.",
              solution: "Utilisation de Unity(C#) pour le code et utilisation de la plateforme Discord pour rencontrer des gens interessé et pour s'organiser. Nous étions un dévellopeur, un UI/UX designer, deux dessinateurs, un compositeur.",
              result: "4 niveaux disponible publiquement et un bon apprentissage de la gestion d'équipe."
          },
          links: {
              github: "https://github.com/AymenChl312/ThatOneDinoGame"
          }
      },
    {
      id: 2,
      title: "Projet de cours PHP: Site de gestion d'équipe de sport.",
      date: "3eme semestre IUT, 2024",
      context: "École",
      image: "/img/php_quidditch.png",
      description: {
        need: "Notre client (notre professeur de PHP) voulait un site web hebergé et disponible 24h/24. Ce site lui permettrait de gérer une équipe de sport (de notre choix), de pouvoir rajouté et enlever des joueurs, de leur donnait des notes et de faire un planning de match.",
        solution: "Développement d'une application web en html, css et php en suivant le principe de MVC",
        result: "Bon apprentissage de la mise en ligne de site internet ainsi que du langage PHP."
      },
      links: {
        github: "https://github.com/Eiior/Projet_PHP"
      }
    },
    {
      id: 3,
      title: "Projet Groupe 4eme semestre IUT",
      date: "Janvier 2025",
      context: "École",
      image: "/img/batiment.png",
      description: {
        need: "Créer une application de gestion immobilliere avec tres grande base de données.",
        solution: "Application codé en JAVA.",
        result: "Travail en équipe de 5 personnes bien réalisé avec une application fonctionnelle. Bon apprentissage de JAVA et des bases de données.",
      },
      links: {
        github: "https://github.com/Aurelien-vr/S3C01",
      }
    },
    {
          id: 4,
          title: "Stage Désirade",
          date: "Juin 2025",
          context: "Stage",
          image: "/img/desirade.png",
          description: {
              need: "Apprendre à travailler dans une grande équipe et faire des rendez vous avec des clients pour comprendre leurs besoins.",
              solution: "Stage de 10 semaines dans l'entreprise Désirade à Toulouse en tant que développeur.",
              result: "Premier pas réussi dans le monde professionnel."
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
              need: "Apprendre à créer un jeu qui se joue automatiquement grace au systeme de géneration de chemin.",
              solution: "Utilisation de Unity(C#) pour le code.",
              result: "1 niveau disponible publiquement et un bon apprentissage de la génération de chemin dans Unity."
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
              need: "Réalisation de projet de A à Z avec champs libre donné par les professeurs.",
              solution: "Nous avons decidé avec mon équipe de créer un réseau social nommé PicReady. Nous avons suivi la gestion de projet SCRUM, j'étais donc dans le role du Product Owner.",
              result: "Application réalisé à son terme disponible au téléchargements. Bon apprentissage de la gestion de projet en tant que Product Owner. Apprentissage du deploiement d'une application mobile."
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
