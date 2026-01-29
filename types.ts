export interface Project {
  id: number;
  title: string;
  date: string;
  context: 'École' | 'Personnel' | 'Stage';
  image: string;
  description: {
    need: string;
    solution: string;
    result: string;
  };
  links: {
    github?: string;
    demo?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
