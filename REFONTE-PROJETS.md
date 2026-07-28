# Refonte de la présentation des projets

> Passation : ce qui a été fait, ce qui reste à faire, comment tester.
> Rédigé le 28/07/2026.

## Ce qui a changé

### 1. Un seul gabarit pour tous les projets
Avant, il y avait deux systèmes : le détail ouvert dans la fenêtre du catalogue
(URL en `#slug`, composant `ui/Projetdetail`) et les pages dédiées
(`/projects/slug`, composant `islands/ProjectDetailPage`), avec des rendus
différents et des sections manquantes selon le chemin.

Maintenant : **une seule présentation, les pages dédiées `/projects/slug`**.
C'est le bon choix SEO (une URL indexable et partageable par projet, le sitemap
est généré automatiquement par `@astrojs/sitemap` au build).

### 2. Nouveau layout « agence » (`src/components/islands/ProjectDetailPage.tsx`)
- Desktop : **fenêtre gauche sticky** (titre, catégories, tags, toutes les
  sections texte, CTA contact) qui ne défile pas, **fenêtre droite** avec la
  couverture, la vidéo éventuelle et les images empilées pleine largeur.
- Mobile : les deux fenêtres s'empilent (infos puis images).
- Si le texte de gauche dépasse l'écran, il défile en interne (overflow-y).
- Toutes les sections sont gérées : context, role, keyLearnings,
  criticalLearning, vision, competencesDemontrees (texte OU points), plus
  `videoUrl` (rien n'est perdu, contrairement à l'ancien gabarit de page).
- Lightbox conservée sur les images de la galerie.

### 3. Page « Mes projets » refaite (`catalogue.astro` + `islands/CatalogueFilter.tsx`)
- Plus de grande fenêtre à scroll interne avec sidebar : **la page défile
  normalement**.
- En haut : barre d'outils fenêtrée avec les filtres par catégorie (boutons).
- En dessous : **grille de grandes cartes-fenêtres** (1 col mobile, 2 cols
  md, 3 cols xl), chaque projet est une petite fenêtre rétro-OS : barre de
  titre bleue, visuel 4:3, barre de statut avec les catégories et « Ouvrir → ».
- Cliquer une carte **navigue vers `/projects/slug`**. Les anciennes URLs
  `/catalogue#slug` redirigent automatiquement.
- Correction : la couverture d'un projet n'apparaît plus en double sur sa page
  quand elle figure aussi dans la galerie (déduplication dans
  `ProjectDetailPage.tsx`).

### 4. Code mort supprimé (ancienne version SPA react-router)
`src/App.tsx`, `src/main.tsx`, `components/PageProjet.tsx`,
`components/ProjectPage.tsx`, `components/ui/Projetdetail.tsx`,
`components/Catalogue.tsx`, `components/Main.tsx`, `components/Hero.tsx`,
`components/Contact.tsx`, `components/Outils.tsx`, `components/MenuWindow.tsx`
(racine), `components/DraggableWindow.tsx`, `components/useDraggable.ts`.
`src/navigation.tsx` est conservé : encore importé par `ui/ListeProjet.tsx`
et `ui/CategoryCarousel.tsx`.

### 5. Projet MUE ajouté (`src/data/projects.ts`, id `mue`)
Premier case du nouveau gabarit, avec textes complets (contexte, production,
cohérence, compétences) et 7 visuels dans `src/assets/mue/`.

### 6. Divers
- `[slug].astro` : conteneur élargi (max-w-7xl), CTA en doublon retiré,
  domaine corrigé (`mandinmaxime.fr` au lieu de `mandinmaxime.vercel.app`
  dans les données structurées).

## À faire pour terminer

1. **Tester en local** : `npm run dev` puis vérifier
   `/catalogue` (grille + filtres, clic = navigation),
   `/projects/mue` (nouveau layout deux fenêtres),
   un projet vidéo (ex. un projet audiovisuel) pour vérifier le lecteur,
   et le responsive mobile (fenêtres empilées).
2. **Remplacer les visuels MUE par des exports HD.** Les fichiers de
   `src/assets/mue/` sont des extraits de la planche Figma (~1000 px de large).
   Exporter en 2x depuis le fichier Figma « MUE — Case study (SAE 401) »
   (drafts du compte étudiant) ou reprendre les PNG sources du dossier
   `Projet/expo art coréen` (ex. `Print/Affiche/affiche/affichef.png` pour
   remplacer `affiche.png`, la charte, la liste des pictos...). Garder les
   mêmes noms de fichiers pour ne pas toucher au code. Convertir en .webp
   comme le reste des assets si possible.
3. **Vérifier `main.astro`** : la page « Découvrir » liait déjà
   `/projects/slug`, rien à changer a priori, mais contrôler visuellement.
4. **Optionnel** : ajouter `videoUrl` au projet MUE (héberger le motion
   d'Eliot, par ex. le mp4 dans `public/`), et un lien `url` vers le site
   de l'expo si déployé.
5. **Optionnel, SEO** : après mise en ligne, soumettre le sitemap dans
   Google Search Console (il est généré au build : `/sitemap-index.xml`).

## Où sont les sources MUE

- Fichier Figma du case (compte étudiant) :
  https://www.figma.com/design/Stle5v25TitNbY1bOHMpCo
  (page 1 = case portfolio, page « Instagram : Carrousel » = post insta)
- Dossier projet : `Projet/expo art coréen` (Drive)
- Textes du case : repris du dossier de présentation
  (`MUE_dossier_presentation.pdf`)
