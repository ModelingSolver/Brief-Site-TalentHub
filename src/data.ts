export type Mission = {
	id: number;
	titre: string;
	decription: string, 
    skills: string [] ,
    type: string, 
    date_debut: string, 
    salaire_net: number, 
    unité_salaire: string
    mdp?: string;
};



export const missions: Mission[] = [
  { 
	  id: 1, 
    titre: "Développeur Frontend React", 
    decription: "Conception et développement d une interface utilisateur moderne avec React et Tailwind.", 
    skills: ["React", "TypeScript", "TailwindCSS", "API REST"], 
    type: "Freelance", 
    date_debut: "2025-09-15", 
    salaire_net: 400, 
    unité_salaire: "€/jour" 
  },

  { 
    id: 2, 
    titre: "Data Analyst", 
    decription: "Analyse de données marketing et création de dashboards interactifs.", 
    skills: ["Python", "SQL", "Power BI", "Pandas"], 
    type: "Contrat", 
    date_debut: "2025-10-01", 
    salaire_net: 3000, 
    unité_salaire: "€/mois" 
  },

  { 
    id: 3, 
    titre: "Chef de Projet Digital", 
    decription: "Gestion de projet web et coordination des équipes techniques et créatives.", 
    skills: ["Gestion de projet", "Agile", "Communication", "Outils Jira/Trello"], 
    type: "CDD", 
    date_debut: "2025-09-10", 
    salaire_net: 3500, 
    unité_salaire: "€/mois" 
  },

  { 
    id: 4, 
    titre: "Développeur Backend Node.js", 
    decription: "Mise en place d’APIs sécurisées et optimisées pour un site e-commerce.", 
    skills: ["Node.js", "Express", "MongoDB", "Docker"], 
    type: "Freelance", 
    date_debut: "2025-09-20", 
    salaire_net: 450, 
    unité_salaire: "€/jour" 
  },

  { 
    id: 5, 
    titre: "UX/UI Designer", 
    decription: "Conception d’expériences utilisateurs fluides et design d’interfaces responsives.", 
    skills: ["Figma", "UX Research", "UI Design", "Prototypage"], 
    type: "Stage", 
    date_debut: "2025-09-05", 
    salaire_net: 1000, 
    unité_salaire: "€/mois" 
  },

  { 
    id: 6, 
    titre: "Ingénieur DevOps", 
    decription: "Automatisation CI/CD et gestion de l’infrastructure cloud sur AWS.", 
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD"], 
    type: "CDI", 
    date_debut: "2025-10-15", 
    salaire_net: 4500, 
    unité_salaire: "€/mois" 
  }
];
