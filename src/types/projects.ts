export type Category = "Audiovisuel" | "Branding" | "Photographie" | "Print" | "Programmation" | "Web-design"

// Un point de description avec un titre et un contenu
export interface DescriptionPoint {
  title: string;
  content: string;
}

// Un type pour les sections simples (titre + paragraphe)
export interface DetailedSectionContent {
  title: string;
  content: string;
}

// Un type pour les sections complexes (titre + intro + liste de points)
// La liste de points peut être une simple chaîne de caractères ou un objet DescriptionPoint
export interface DetailedSectionPoints {
  title: string;
  intro?: string; // L'intro est optionnelle
  points: (string | DescriptionPoint)[];
}

// Le type final pour la description détaillée.
// Toutes les propriétés sont optionnelles (?) car un projet n'aura pas forcément toutes les sections.
export interface DetailedDescription {
  context?: DetailedSectionContent;
  role?: DetailedSectionPoints;
  vision?: DetailedSectionContent;
  keyLearnings?: DetailedSectionPoints;
  criticalLearning?: DetailedSectionContent;
  competencesDemontrees?: DetailedSectionContent | DetailedSectionPoints;
}

// Le type final pour un projet
export type Project = {
  id: string;
  title: string;
  image: string; // Utiliser 'any' est plus sûr si vos imports d'images ne sont pas de simples strings
  description?: string; // L'ancienne description, optionnelle
  detailedDescription?: DetailedDescription; // La nouvelle description détaillée, optionnelle
  gallery?: string[];
  url?: string;
  tags?: string[];
  categories?: Category[]; // Utilisez le type Category pour plus de sécurité
  videoUrl?: string;
};