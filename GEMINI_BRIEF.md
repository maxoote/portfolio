# BRIEF — Analyse et refonte du portfolio de Maxime Mandin

## Ton rôle

Tu es un expert en développement web moderne, UX design, et SEO. Je te fournis ci-dessous une description exhaustive et précise de mon portfolio actuel. Ton objectif est de :

1. Identifier les faiblesses architecturales, UX, et techniques
2. Proposer une stratégie de refonte complète avec des choix technologiques justifiés
3. Fournir des instructions claires et actionnables pour recoder le site from scratch

Ne résume pas ce que je t'ai donné. Analyse, critique, et recommande avec précision.

---

## 1. CONTEXTE PROJET

**Qui je suis :** Maxime Mandin, étudiant en 2ème année de BUT MMI (Métiers du Multimédia et de l'Internet) à Laval, France. Je suis en recherche d'alternance.

**Ce que je fais :** Design graphique, développement web, audiovisuel, branding — pour des petites entreprises et associations en Vendée et Pays de la Loire.

**Objectif du site :** Portfolio professionnel pour convaincre des recruteurs et clients potentiels de ma polyvalence et de la qualité de mon travail.

**URL actuelle :** https://mandinmaxime.vercel.app (déployé sur Vercel)

---

## 2. STACK TECHNIQUE ACTUELLE

```
Framework UI    : React 19.1.1
Routing         : React Router DOM 7.13.1
Language        : TypeScript 5.8.3
Build tool      : Vite 7.1.6
CSS             : Tailwind CSS 4.1.13 + PostCSS + Autoprefixer
Animations      : 20+ animations CSS custom (index.css, 348 lignes)
SEO             : React Helmet Async 3.0.0
Analytics       : Vercel Analytics 1.6.1
Déploiement     : Vercel
Backend         : AUCUN
Polices         : Système uniquement (pas de Google Fonts)
Images          : WebP (photos) + PNG (icônes)
```

**Problème critique :** Le formulaire de contact est 100% client-side. Il valide les champs mais n'envoie rien. Aucun email n'est reçu.

---

## 3. STRUCTURE DES FICHIERS

```
src/
├── App.tsx                  → Router principal + données hero
├── main.tsx                 → Entry point + HelmetProvider
├── index.css                → Toutes les animations (348 lignes)
├── navigation.tsx           → Context API pour la section active
├── data/projects.ts         → 13 projets avec descriptions complètes (648 lignes)
├── types/                   → Interfaces TypeScript (projects, hero, common)
├── assets/                  → ~150 images organisées par dossier projet
└── components/
    ├── Hero.tsx             → Page /
    ├── Main.tsx             → Page /main
    ├── Catalogue.tsx        → Page /catalogue
    ├── Contact.tsx          → Page /contact
    ├── Outils.tsx           → Page /outils
    ├── MenuWindow.tsx       → Menu hamburger fixe
    ├── ProjectPage.tsx      → Route /projects/:id
    └── ui/
        ├── Window.tsx           → Composant conteneur Win95 réutilisable
        ├── ProjectCard.tsx      → Carte grille projet
        ├── Projetdetail.tsx     → Vue détail projet (overlay)
        ├── CategoryCarousel.tsx → Carousel avec timer 4500ms
        ├── ListeProjet.tsx      → 3 projets featured (hardcodé)
        └── ...

public/
├── sitemap.xml              → 3 URLs seulement (incomplet)
├── robots.txt
index.html                   → Head SEO complet (OG, JSON-LD, Twitter Card)
```

---

## 4. DESIGN SYSTEM — THÈME WINDOWS 95

L'identité visuelle du site est entièrement basée sur l'esthétique Windows 95 :

**Ombres biseautées (effet 3D rétro) :**
```css
box-shadow: inset 2px 2px 0 0 #fff, inset -2px -2px 0 0 #000, 8px 8px 0 0 rgba(0,0,0,0.5);
```

**Palette de couleurs :**
- Fond principal : `gray-300`
- Titres principaux : `blue-900`
- Boutons/actions primaires : `red-600` (hover `red-800`)
- Menu : fond `yellow-500`
- Inputs, cards : `gray-400` avec bordures `gray-700`
- Texte sur fond coloré : `white`

**Composant `<Window>` :** Conteneur réutilisable qui simule une fenêtre Win95 avec barre de titre grise, ombre portée, bordures 2px. Utilisé sur toutes les pages comme wrapper principal.

**Typographie :** Polices système uniquement, weights 400/600/700/900. Pas de custom fonts.

---

## 5. ROUTES ET PAGES

### Route `/` — Hero (Landing)

**Objectif :** Première impression forte, transmettre l'identité et le statut.

**Contenu affiché :**
- Photo de profil dans une fenêtre Win95 (gauche desktop / haut mobile)
- Nom : "Mandin Maxime"
- Tagline : "Je conçois des expériences visuelles du concept à la production"
- Badge rouge pulsant : "EN RECHERCHE D'ALTERNANCE"
- Localisation : "2ème année BUT MMI, Laval"
- 3 badges : Design Graphique / Développement Web / Audiovisuel & Branding
- Bouton CTA rouge : "Découvrir mes projets" → `/main`
- Bio complète (masquée visuellement sur mobile, présente pour SEO)

**Layout responsive :**
- Desktop : grille CSS 4 colonnes (photo) + 8 colonnes (texte), côte à côte
- Mobile : empilé verticalement

**Animations :**
- `stagger-fade-in` sur chaque élément (délais calculés par index)
- `float-up` infini 4s sur la photo (desktop uniquement, désactivé mobile)
- `pulse-glow` sur le badge statut (animation rouge infinie)

---

### Route `/main` — Services

**Objectif :** Montrer l'étendue des domaines de compétences et mettre en avant les projets récents.

**Section 1 — Carousel de catégories :**
- Composant `CategoryCarousel`
- Rotation automatique toutes les **4500ms**
- 6 catégories : Audiovisuel, Branding, Photographie, Print, Programmation, Web-design
- Chaque slide affiche : nom catégorie + nombre de projets dans cette catégorie + indicateur "X/6"
- Barre de progression animée en bas (visualise le temps restant avant rotation)
- Au clic : redirige vers `/catalogue` avec filtre de catégorie pré-appliqué via `sessionStorage`
- ⚠️ **Problème :** Le carousel affiche le nom de la catégorie mais PAS d'images réelles des projets de cette catégorie

**Section 2 — "Mes Derniers Projets" :**
- Composant `ListeProjet`
- **3 projets hardcodés** (IDs en dur dans le code) : `anna-partout`, `mdn-maxime`, `sth`
- Cards avec vignette + titre en overlay
- Mobile : scroll horizontal
- Desktop : layout responsive sans scroll forcé

**CTA flottant :**
- Bouton "Découvrir mes Outils" → `/outils`
- Position : `absolute` bas-droite sur desktop, caché sur mobile

---

### Route `/catalogue` — Galerie projets

**Objectif :** Permettre l'exploration complète du portfolio avec filtrage.

**Filtres :**
- 7 boutons toggle : Tout / Audiovisuel / Branding / Photographie / Print / Programmation / Web-design
- Filtre actif : style "enfoncé" (shadow inversion Win95)
- Intégration `sessionStorage` : si l'utilisateur vient du carousel `/main`, le filtre est pré-sélectionné

**Grille projets :**
- `grid-cols-2` mobile → `grid-cols-3` tablette → `grid-cols-4` desktop
- Cards carré (`aspect-ratio: 1/1`)
- Hover : `scale(1.05)` + shadow
- Animation d'entrée : `stagger-fade-in` par carte (délai × index)

**Vue détail projet (overlay dans la même page) :**
- Clic sur une card → overlay plein écran, même route `/catalogue`
- Navigation profonde via hash : `/catalogue#anna-partout`
- Contenu de l'overlay :
  - Image hero (ratio 16:3)
  - Titre du projet
  - Lien "Voir le projet" (si URL externe disponible)
  - Sections texte : Contexte, Rôle & responsabilités, Apprentissages, Vision artistique, Compétences démontrées
  - Galerie photos (2 à 4 colonnes selon écran)
  - Lightbox au clic (navigation prev/next, compteur X/Y)
  - Tags et catégories
- Bouton fermeture → retour à la grille

---

### Route `/contact` — Contact

**Objectif :** Permettre la prise de contact et donner accès aux réseaux sociaux.

**Formulaire de contact :**
- 3 champs : Nom, Email, Message
- Validation client-side uniquement :
  - Nom : requis, trim non vide
  - Email : doit contenir `@`
  - Message : requis, trim non vide
- Erreurs : bordure rouge + fond rouge clair sur le champ concerné + message texte rouge en dessous
- Succès : encadré vert "Message envoyé !" pendant 3 secondes, puis disparition, form réinitialisé
- **⚠️ CRITIQUE : aucun envoi réel. Aucune API, aucun service email. Le formulaire est factice.**

**Liens sociaux (3 cartes Win95) :**
- Instagram → `https://www.instagram.com/mdn.maxime/` ("Compte perso")
- LinkedIn → `https://www.linkedin.com/in/maxime-mandin` ("Profil professionnel")
- "Mon Bureau" → `https://perso.univ-lemans.fr/~i2400571/portfolio2/bureau.php` (portfolio immersif PHP, hébergement universitaire instable)

---

### Route `/outils` — Compétences

**Objectif :** Valider les compétences techniques avec une visualisation des niveaux.

**14 compétences affichées (grille 1→2→3 colonnes) :**

| Compétence        | Score | Catégorie       |
|-------------------|-------|-----------------|
| HTML              | 4/5   | Frontend        |
| CSS               | 3.5/5 | Frontend        |
| Tailwind CSS      | 3.5/5 | Frontend        |
| JavaScript        | 3/5   | Frontend        |
| React             | 3/5   | Frontend        |
| TypeScript        | 2.5/5 | Frontend        |
| PHP               | 2/5   | Backend         |
| SQL               | 2/5   | Backend         |
| Figma             | 4/5   | Design          |
| Affinity Designer | 3.5/5 | Design          |
| Affinity Photo    | 3.5/5 | Design          |
| Affinity Publisher| 4/5   | Design          |
| DaVinci Resolve   | 4/5   | Audiovisuel     |
| Office 365        | 3/5   | Productivité    |

**Chaque carte contient :**
- Icône PNG de l'outil
- Nom de l'outil
- Score textuel (ex: "4/5")
- Barre de progression bleue animée (0% → score%, durée 800ms + stagger 100ms × index)
- Note descriptive courte

**CTA bas de page :** Bouton "Projet" → `/main`

---

### Route `/projects/:id` — Détail projet (SEO)

**Objectif :** URL permanente et indexable par Google pour chaque projet.

- Même rendu visuel que l'overlay du catalogue
- Meta tags dynamiques via React Helmet (titre, description, og:image par projet)
- Permet le partage direct d'un projet spécifique

---

## 6. CATALOGUE DES 13 PROJETS

### Audiovisuel (3)
| ID | Titre | Description courte |
|----|-------|-------------------|
| `mdn-maxime` | mdn.maxime | Compte Instagram personnel — BTS, vidéo, branding perso |
| `maxime-en-competition` | Maxime en compétition | Documentaire compétition tir sportif, Instagram Stories |
| `unsorted-videos` | Unsorted Videos | Expérimentations vidéo minimalistes (YouTube, Instagram) |

### Branding (3)
| ID | Titre | Description courte |
|----|-------|-------------------|
| `sth` | Société de Tir Herbretaise | Refonte identité, site WordPress, gestion événements sportifs |
| `maron-bouillie` | Maron Bouillie | SAE universitaire — direction artistique 360° (vidéo, photo, packaging) |
| `tasolutionhypno` | TaSolutionHypno | Lancement cabinet hypnothérapie (logo, flyers, cartes de visite) |

### Print (2)
| ID | Titre | Description courte |
|----|-------|-------------------|
| `anna-partout` | Anna Partout | SAE universitaire — série d'affiches inspirées de la littérature |
| `unsorted-print` | Unsorted Print | Archive expérimentations perso — focus typographie |

### Programmation / Web-design (2)
| ID | Titre | Description courte |
|----|-------|-------------------|
| `mon-bureau` | Mon Bureau | Portfolio immersif PHP — interface "bureau de travail" |
| `portfolio-2025` | Portfolio 2025 | Ce site React + TypeScript |

### Photographie (2)
| ID | Titre | Description courte |
|----|-------|-------------------|
| `album-tir-sportif` | Album Tir Sportif | Documentation photographique de compétitions |
| `unsorted-pics` | Unsorted Pics | Collection photo spontanée, retouche minimale |

---

## 7. NAVIGATION & MENU

**Menu hamburger fixe (top-right, toutes les pages) :**
- En-tête jaune `yellow-500` + bouton toggle gris
- Icône rotation 45° à l'ouverture
- 4 liens avec animation `menu-slide-down` (stagger 50ms par item) :
  - Accueil → `/`
  - Mon travail → `/main`
  - Projets → `/catalogue`
  - Contact → `/contact`
- ⚠️ `/outils` n'est PAS dans le menu (accessible uniquement via CTAs dans les pages)

---

## 8. SEO & MÉTADONNÉES

**`index.html` head :**
```html
<title>Graphiste Freelance Vendée | Logo, Print, Vidéo | Maxime Mandin</title>
<meta name="description" content="Graphiste freelance en Vendée spécialisé en création de logos, supports print...">
<link rel="canonical" href="https://mandinmaxime.vercel.app/">
<meta name="robots" content="index, follow">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:image" content="[image 1200×630]">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@mdn_maxime">
```

**JSON-LD Structured Data (2 schémas) :**
```json
// Schema 1 : Person
{ "@type": "Person", "name": "Maxime Mandin", "jobTitle": "Graphiste Freelance", "sameAs": ["LinkedIn", "Instagram", "GitHub"] }

// Schema 2 : LocalBusiness
{ "@type": "LocalBusiness", "areaServed": ["Vendée", "Pays de la Loire", "Laval"], "priceRange": "€€" }
```

**`sitemap.xml` actuel (incomplet) :**
```xml
<url><loc>https://mandinmaxime.vercel.app/</loc><priority>1.0</priority></url>
<url><loc>https://mandinmaxime.vercel.app/#projects</loc><priority>0.8</priority></url>
<url><loc>https://mandinmaxime.vercel.app/#contact</loc><priority>0.8</priority></url>
```
⚠️ Les routes `/main`, `/catalogue`, `/outils`, et `/projects/:id` (13 projets) ne sont pas dans le sitemap.

---

## 9. PARCOURS UTILISATEURS

### Parcours A — Recruteur (principal)
```
1. Arrive sur / (Hero)
   → Voit le statut "EN RECHERCHE D'ALTERNANCE" en rouge pulsant
   → Lit le tagline et les 3 domaines de compétence
   → Clique "Découvrir mes projets"

2. Arrive sur /main
   → Voit défiler les 6 catégories de compétences (carousel)
   → Voit les 3 projets récents mis en avant
   → Clique sur une catégorie OU clique "Découvrir mes Outils"

3a. Arrive sur /catalogue (filtré par catégorie)
    → Explore la grille de projets
    → Clique sur une carte → overlay détail
    → Lit contexte, rôle, apprentissages, compétences
    → Visionne les photos (lightbox)

3b. Arrive sur /outils
    → Vérifie les niveaux de maîtrise technique
    → Comprend les forces (design/vidéo) vs les niveaux intermédiaires (web)

4. Navigue vers /contact (via menu hamburger)
   → Remplit le formulaire
   → ⚠️ Le message n'arrive jamais
```

### Parcours B — Contact direct
```
1. Arrive sur /
2. Ouvre le menu hamburger → clique "Contact"
3. Remplit le formulaire (⚠️ non fonctionnel)
4. Suit sur Instagram ou LinkedIn comme fallback
```

### Parcours C — Exploration profonde
```
1. / → /main → clique une catégorie carousel → /catalogue filtré
2. Clique un projet → overlay avec galerie lightbox
3. Clique "Voir le projet" → lien externe (si disponible)
4. Retour à la galerie → explore d'autres projets
```

---

## 10. PROBLÈMES ET FAIBLESSES IDENTIFIÉS

### Critiques (bloquants)
- **Formulaire de contact factice** — aucun message n'est reçu, problème de confiance et de crédibilité
- **"Mon Bureau" hébergé sur serveur universitaire** — URL fragile (`perso.univ-lemans.fr`), disparaîtra à la fin des études

### Importants (UX/SEO)
- **Pas de transitions entre les pages** — changements de route abrupts (React Router sans animation)
- **Sitemap incomplet** — 3 URLs sur ~20 indexables
- **`/outils` absent du menu** — accessible uniquement via des CTAs dans les pages, pas via la navigation principale
- **Projets featured hardcodés** — changer les projets mis en avant nécessite de modifier le code source
- **Carousel catégories sans images** — affiche le nom de la catégorie mais pas de vignettes des projets réels
- **Footer invisible** — `sr-only`, aucune information visible en bas de page

### Secondaires (qualité/maintenabilité)
- **20+ animations CSS custom** dans un seul fichier de 348 lignes — difficile à maintenir
- **Pas de loading states** pour les images volumineuses
- **Site 100% français** — pas de version anglaise pour toucher des recruteurs hors France
- **Pas de dark mode** — le thème Win95 s'y prêterait pourtant bien
- **Aucun lien email direct** en fallback sur `/contact`
- **Pas de 404 page** personnalisée

---

## 11. CE QUE J'ATTENDS DE TOI

### Question 1 — Architecture (choix du framework)
Pour un portfolio créatif avec ~15 routes, des pages de détail projet SEO-importantes, des animations complexes, et zéro backend propre, quel framework est le plus adapté en 2026 ?

Compare précisément : **Astro 5**, **Next.js 15 App Router**, **SvelteKit**, **Remix/React Router v7**.

Critères : SEO (SSR/SSG), performance, animations, simplicité de migration depuis React, déploiement Vercel.

### Question 2 — Formulaire de contact sans backend
Quelle solution intégrer pour que les emails arrivent vraiment, sans gérer de serveur ?

Compare : **Resend + API Route**, **EmailJS (client-side)**, **Formspree**, **Netlify Forms**, **Web3Forms**.

Donne le code d'implémentation pour la solution recommandée (React/TypeScript).

### Question 3 — Animations
Les 20+ animations CSS custom dans `index.css` sont difficiles à maintenir et peu réutilisables.

Quelle approche recommandes-tu pour un portfolio avec des animations d'entrée staggerées, des transitions de page, et des effets hover ?

Compare : **Framer Motion**, **GSAP**, **Motion One (Animate.js)**, **CSS custom avec Tailwind** (statu quo).

### Question 4 — Transitions de page
Comment implémenter des transitions fluides entre les routes dans React Router v7 (ou le framework que tu recommandes) ?

Donne un exemple concret avec code pour les transitions d'entrée/sortie de page, compatible avec le thème Win95 (slides, fades, ou effets fenêtre).

### Question 5 — SEO et sitemap dynamique
Comment générer automatiquement un `sitemap.xml` incluant les 13 pages `/projects/:id` dynamiques ?

Donne le code pour générer le sitemap (compatible avec le framework recommandé), et les structured data JSON-LD optimisés pour les pages de projet (schema `CreativeWork` ou `VisualArtwork` ?).

### Question 6 — Design system maintenable
Comment structurer le design system Win95 (ombres, couleurs, composant `Window`) de façon maintenable ?

Recommande : CSS custom properties (tokens), plugin Tailwind, Storybook, ou autre.

Donne la structure recommandée avec exemple de tokens CSS.

### Question 7 — Performance images
~150 images WebP dans `src/assets/`.

Comment optimiser le chargement ? Compare : `next/image`, composant `<Image>` Astro, `loading="lazy"` natif, Cloudinary/Imgix, ou génération de thumbnails au build.

### Question 8 — Amélioration UX pour recruteur
En analysant le parcours utilisateur décrit (section 9), quelles sont les 5 modifications UX les plus impactantes pour maximiser les chances qu'un recruteur arrive jusqu'au formulaire de contact et l'envoie ?

Fonde ta réponse sur des principes UX établis (loi de Hick, principe de progressivité, AIDA, etc.).

---

## FORMAT DE RÉPONSE ATTENDU

Pour chaque question :
1. **Recommandation claire** en 1-2 phrases
2. **Justification** avec les arguments clés (3-5 points)
3. **Code ou structure** quand applicable (TypeScript, pas JavaScript)
4. **Références** : documentation officielle, articles récents (2024-2026)

Priorise la concision et l'actionnable sur l'exhaustivité.
