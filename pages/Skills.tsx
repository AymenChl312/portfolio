import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Code, Layout, Server, ArrowRight } from 'lucide-react';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  // Data Placeholders for Skills
  const skillCategories: SkillCategory[] = [
    {
      title: "Développement Applicatif",
      skills: ["Java]", "C++", "Python", "C#"]
    },
    {
      title: "Développement Web",
      skills: ["HTML / CSS", "JavaScript / TypeScript", "Framework: React", "PHP", "API REST"]
    },
    {
      title: "Base de Données & Données",
      skills: ["SQL: MySQL", "NoSQL: MongoDB", "Modélisation UML", "Analyse de données"]
    },
    {
      title: "Outils & DevOps",
      skills: ["Git / GitHub", "Docker", "Méthodes Agiles"]
    }
  ];

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Code className="h-8 w-8 text-blue-600" />;
      case 1: return <Layout className="h-8 w-8 text-blue-600" />;
      case 2: return <Database className="h-8 w-8 text-blue-600" />;
      case 3: return <Server className="h-8 w-8 text-blue-600" />;
      default: return <Code className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <main className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Mes Compétences</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Un aperçu des technologies et méthodologies maîtrisées au cours de mon cursus et de mes expériences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-50 rounded-lg">
                  {getIcon(index)}
                </div>
                <h2 className="ml-4 text-xl font-bold text-slate-800">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Transitivity Section: Link to Projects */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Comment ces compétences sont-elles appliquées ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            La théorie ne vaut rien sans la pratique. Découvrez comment j'ai mobilisé ces savoirs techniques pour réaliser des solutions concrètes dans mes projets académiques et personnels.
          </p>
          <Link 
            to="/projets" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-md"
          >
            Découvrir mes Projets
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Skills;
