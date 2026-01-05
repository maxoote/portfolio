import type { Project } from "../types/projects";

// --- IMPORTS DES ASSETS ---

// M2 Studio (Assets généraux)
import logoMaxime from "../assets/m2studio/logoMaximeMandin.webp";
// import photoProfile from "../assets/m2studio/photoprofile.webp";

// Maxime en compétition
import compet1 from "../assets/maxime_en_competition/1.webp";
import compet2 from "../assets/maxime_en_competition/2.webp";
import compet3 from "../assets/maxime_en_competition/3.webp";

// mdn.maxime
import mdnAnnonce1 from "../assets/mdnmaxime/Annonce1.webp";
import mdnAnnonce2 from "../assets/mdnmaxime/Annonce2.webp";
import mdnStream from "../assets/mdnmaxime/streamtir.webp";
import mdnVid1 from "../assets/mdnmaxime/vid1.webp";
import mdnVid2 from "../assets/mdnmaxime/vid2.webp";
import mdnStoryPort from "../assets/mdnmaxime/storyportfolio.webp";
import mdnRetouche1 from "../assets/mdnmaxime/photoretouche1b.webp";
import mdnRetouche2 from "../assets/mdnmaxime/photoretouche2.webp";
import mdnStoryRec from "../assets/mdnmaxime/storyrecord.webp";

// Unsorted Videos
import unsortedVidGif from "../assets/unsortedvids/VFGIF.gif";

// STH
import sth1 from "../assets/sth/1a.png";
import sth2 from "../assets/sth/2.webp";
import sth3 from "../assets/sth/3.webp";
import sth4 from "../assets/sth/4.webp";
import sth5 from "../assets/sth/5.webp";
import sth6 from "../assets/sth/6.webp";
import sth7 from "../assets/sth/7.png";
import sth8 from "../assets/sth/8.webp";

// Maron Bouillie
import mbLogo from "../assets/maronbouillie/logo.webp";
import mbColor from "../assets/maronbouillie/color.webp";
import mbTypo from "../assets/maronbouillie/typo.webp";
import mb1616 from "../assets/maronbouillie/IMG_1616.webp";
import mb1627 from "../assets/maronbouillie/IMG_1627.webp";
import mb1638 from "../assets/maronbouillie/IMG_1638.webp";
import mb1677 from "../assets/maronbouillie/IMG_1677.webp";
import mb1695 from "../assets/maronbouillie/IMG_1695.webp";
import mb1718 from "../assets/maronbouillie/IMG_1718.webp";
import mb1758 from "../assets/maronbouillie/IMG_1758.webp";
import mb1760 from "../assets/maronbouillie/IMG_1760.webp";

// TaSolutionHypno
import tshLogo from "../assets/tasolutionhypno/logoVF.webp";
import tshFlyer1 from "../assets/tasolutionhypno/flyerVF_1.webp";
import tshFlyer2 from "../assets/tasolutionhypno/flyerVF_2.webp";
import tshCarte1 from "../assets/tasolutionhypno/carteDeVisiteVF_1.webp";
import tshCarte2 from "../assets/tasolutionhypno/carteDeVisiteVF_2.webp";

// Anna Partout
import anna1 from "../assets/annaPartout/affiche1VF.webp";
import anna2 from "../assets/annaPartout/affiche2VF.webp";
import anna3 from "../assets/annaPartout/affiche3VF.webp";
import anna4 from "../assets/annaPartout/affiche4VF.webp";
import anna4b from "../assets/annaPartout/affiche4bVF.webp";
import anna4c from "../assets/annaPartout/affiche4cVF.webp";
import anna5 from "../assets/annaPartout/affiche5VF.webp";
import anna6 from "../assets/annaPartout/affiche6VF.webp";

// Unsorted Print
import up1 from "../assets/unsortedprint/1.webp";
import upAfficheAA from "../assets/unsortedprint/AfficheAAtest.webp";
import upGrand from "../assets/unsortedprint/GrandAffiche.webp";
import upSch1 from "../assets/unsortedprint/schVF_1.webp";
import upSch2 from "../assets/unsortedprint/schVF_2.webp";
import upStl from "../assets/unsortedprint/STL_Flyer.webp";
import upChaumont1 from "../assets/unsortedprint/chaumont1.webp";
import upChaumont2 from "../assets/unsortedprint/chaumont2.webp";
import pinkLucie from "../assets/unsortedprint/pinkluciev2.webp";
import a3 from "../assets/unsortedprint/A3.webp";
import cafelover from "../assets/unsortedprint/cafelover.webp";
import gettingbored from "../assets/unsortedprint/gettingbored.webp";
import justabovetheroof from "../assets/unsortedprint/justabovetheroof.webp";
import presdetoi from "../assets/unsortedprint/presdetoi.webp";
import vuemuette from "../assets/unsortedprint/vuemuette.webp";
import vvb from "../assets/unsortedprint/vvb.webp";
import wf1 from "../assets/unsortedprint/wf1.webp";
import wf2 from "../assets/unsortedprint/wf2.webp";
// Mon Bureau
import bureauAcceuil from "../assets/monbureau/acceuil.webp";
import bureauMain from "../assets/monbureau/bureau.webp";
import bureauFenetre from "../assets/monbureau/fenetre.webp";

// Album Tir Sportif
import tir1798 from "../assets/albumTirSportif/IMG_1798.webp";
import tir1800 from "../assets/albumTirSportif/IMG_1800.webp";
import tir1807 from "../assets/albumTirSportif/IMG_1807.webp";
import tir9116 from "../assets/albumTirSportif/IMG_9116.webp";
import tir9170 from "../assets/albumTirSportif/IMG_9170.webp";
import tir9181 from "../assets/albumTirSportif/IMG_9181.webp";
import tir9201 from "../assets/albumTirSportif/IMG_9201_9200_modif.webp";
import tir9209 from "../assets/albumTirSportif/IMG_9209_2.webp";
import tir9309A from "../assets/albumTirSportif/IMG_9309_Affiche.webp";
import tir9309ANB from "../assets/albumTirSportif/IMG_9309_Affiche_NB.webp";
import tir9318 from "../assets/albumTirSportif/IMG_9318.webp";
import tir9854 from "../assets/albumTirSportif/IMG_9854.webp";

// Unsorted Pics
import pics0163 from "../assets/unsortedpics/IMG_0163.webp";
import pics0531 from "../assets/unsortedpics/IMG_0531.webp";
import pics0853 from "../assets/unsortedpics/IMG_0853.webp";
import pics0862 from "../assets/unsortedpics/IMG_0862.webp";
import pics1334 from "../assets/unsortedpics/IMG_1334.webp";
import pics1598 from "../assets/unsortedpics/IMG_1598.webp";
import pics2088 from "../assets/unsortedpics/IMG_2088.webp";
import pics9462 from "../assets/unsortedpics/IMG_9462.webp";
import pics9469 from "../assets/unsortedpics/IMG_9469.webp";
import pics9484 from "../assets/unsortedpics/IMG_9484.webp";
import pics9804 from "../assets/unsortedpics/IMG_9804.webp";
import pics9810 from "../assets/unsortedpics/IMG_9810.webp";
import picsMartin from "../assets/unsortedpics/martinv2.webp";
import picsCover from "../assets/unsortedpics/cover.webp";
import picsnouv1n from "../assets/unsortedpics/1normal.webp";
import picsnouv2n from "../assets/unsortedpics/2normal.webp";
import picsnouv3n from "../assets/unsortedpics/3normal.webp";
import picsnouv4n from "../assets/unsortedpics/4normal.webp";
import picsnouv5n from "../assets/unsortedpics/5normal.webp";
import picsnouv6n from "../assets/unsortedpics/6normal.webp";
import picsnouv7n from "../assets/unsortedpics/7normal.webp";
import picsnouv1j from "../assets/unsortedpics/1jaune.webp";
import picsnouv2j from "../assets/unsortedpics/2jaune.webp";
import picsnouv3j from "../assets/unsortedpics/3jaune.webp";
import picsnouv4j from "../assets/unsortedpics/4jaune.webp";
import picsnouv5j from "../assets/unsortedpics/5jaune.webp";
import picsnouv6j from "../assets/unsortedpics/6jaune.webp";
import picsnouv7j from "../assets/unsortedpics/7jaune.webp";
import picsnouv8j from "../assets/unsortedpics/8jaune.webp";


// --- LISTE DES PROJETS ---
// Trié selon: Audiovisuel > Branding > Print > Programmation > Photographie

export const projects: Project[] = [
  // --- 🎬 AUDIOVISUEL ---
  {
    id: "maxime-compet",
    title: "Maxime en compétition",
    image: compet1,
    detailedDescription: {
      context: {
        title: "Contexte & Objectif",
        content: "Série de stories Instagram documentant mon parcours en compétitions de tir sportif (départementales, régionales, nationales). Ce projet personnel allie ma passion pour le tir et mes compétences en communication visuelle pour promouvoir la discipline auprès d'un public large."
      },
      role: {
        title: "Mon Rôle",
        intro: "Création complète des contenus visuels pour réseaux sociaux",
        points: [
          { title: "Design Graphique", content: "Conception des visuels de stories avec une identité visuelle cohérente et impactante, adaptée aux codes Instagram." },
          { title: "Communication Sportive", content: "Rédaction et mise en forme des résultats de manière claire et engageante pour valoriser la performance." },
          { title: "Régularité & Réactivité", content: "Publication systématique après chaque compétition, nécessitant une production rapide et efficace tout en maintenant la qualité visuelle." }
        ]
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content: "Design pour réseaux sociaux (format stories), communication sportive, personal branding, création de contenu régulier sous contrainte de temps, capacité à transformer des données brutes (résultats) en contenu visuellement attractif."
      }
    },
    gallery: [compet1, compet2, compet3],
    url: "https://www.instagram.com/mdn.maxime/",
    tags: ['Instagram Stories', 'Tir Sportif', 'Design Graphique', 'Communication', 'Personal Branding'],
    categories: ["Audiovisuel"]
  },  
  {
    id: "mdn-maxime",
    title: "mdn.maxime",
    image: mdnRetouche1,
    detailedDescription: {
      context: {
        title: "Contexte & Positionnement",
        content: "Compte Instagram personnel dédié au storytelling créatif et à la documentation de mon processus de travail. Ce projet hybride mêle personal branding, pédagogie et création de contenu pour construire une identité professionnelle authentique et transparente auprès d'une communauté de créatifs et de pairs."
      },
      role: {
        title: "Mon Rôle & Production",
        intro: "Création complète de contenu multimédia (vidéo, photo, design) pour documenter mon parcours créatif",
        points: [
          { title: "Storytelling Vidéo", content: "Production de vidéos BTS (Behind The Scenes) expliquant ma démarche créative, mes choix techniques et mes problèmes rencontrés, dans un format authentique et pédagogique." },
          { title: "Design Graphique Expérimental", content: "Création d'affiches et de visuels spontanés (série unsortedprint) pour expérimenter et me détendre, tout en alimentant mon feed avec du contenu varié." },
          { title: "Communication Régulière", content: "Publication systématique de stories, posts et reels pour maintenir un lien avec ma communauté et documenter mon évolution." },
          { title: "Montage & Post-production", content: "Édition des vidéos et retouche photo pour adapter le contenu aux codes Instagram tout en préservant l'authenticité du message." }
        ]
      },
      keyLearnings: {
        title: "Apprentissages Clés & Soft Skills",
        points: [
          { title: "Aisance Face Caméra", content: "L'exercice répété de parler face caméra et au micro m'a permis de développer une aisance orale et corporelle essentielle pour les présentations professionnelles." },
          { title: "Vulgarisation Technique", content: "Capacité à expliquer des concepts techniques complexes (montage, design, code) de manière claire et accessible à différents publics." },
          { title: "Transparence & Authenticité", content: "Partage non-filtré de mes échecs et succès pour créer une connexion authentique avec ma communauté et démystifier le processus créatif." },
          { title: "Régularité de Production", content: "Discipline de création de contenu régulier malgré les contraintes de temps (études, freelance, compétitions sportives)." }
        ]
      },
      vision: {
        title: "Impact & Vision",
        content: "Ce projet va au-delà du simple personal branding : c'est une vitrine vivante de mes compétences, un outil de réseautage professionnel et une archive de mon évolution créative. Il démontre ma capacité à créer du contenu engageant tout en gérant une identité de marque personnelle cohérente sur la durée."
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content: "Personal branding stratégique, création de contenu multimédia (vidéo, photo, design), storytelling visuel, aisance orale et communication caméra, vulgarisation technique, gestion de communauté, régularité de production, authenticité professionnelle, expérimentation graphique."
      }
    },
    gallery: [mdnStoryPort,mdnAnnonce1, mdnAnnonce2, mdnStream, mdnVid1, mdnVid2, mdnRetouche1, mdnRetouche2, mdnStoryRec],
    url: "https://www.instagram.com/mdn.maxime/",
    tags: ['Personal Branding', 'Behind The Scenes', 'Storytelling', 'Instagram', 'Vidéo', 'Design Expérimental', 'Communication'],
    categories: ["Audiovisuel"]
  },
  {
    id: "unsorted-vid",
    title: "Unsorted Videos",
    image: unsortedVidGif,
    detailedDescription: {
      context: {
        title: "Contexte & Démarche Artistique",
        content: "Projet expérimental de création vidéo minimaliste publié sur YouTube et Instagram. Inspiré par l'esthétique du cinéma-vérité et du documentaire observationnel, ce projet capture des moments spontanés sans contexte ni post-production lourde. L'objectif est de valoriser l'authenticité brute et l'instant présent, en opposition à la sur-production dominante sur les réseaux sociaux."
      },
      role: {
        title: "Mon Rôle",
        intro: "Captation et diffusion de contenus visuels spontanés",
        points: [
          { title: "Captation Spontanée", content: "Tournage de séquences vidéo et photos sans mise en scène, directement du boîtier, privilégiant la réactivité et l'authenticité du moment." },
          { title: "Direction Artistique Minimaliste", content: "Choix assumé d'une post-production volontairement légère pour préserver le caractère brut et documentaire des images." },
          { title: "Curation & Publication", content: "Sélection et publication régulière de contenus sur YouTube et Instagram, créant une archive visuelle du quotidien sans narration imposée." }
        ]
      },
      vision: {
        title: "Vision Artistique",
        content: "Ce projet questionne la sur-production et le perfectionnisme omniprésents dans la création de contenu digital. En publiant des vidéos 'unsorted' (non triées), je valorise l'imperfection et l'instant capturé comme œuvre en soi, dans une démarche proche du documentaire anthropologique ou du found footage artistique."
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content: "Direction artistique conceptuelle, captation vidéo réactive, sens du cadrage et de la composition instantanée, gestion de contenus multi-plateformes (YouTube, Instagram), capacité à développer une démarche créative cohérente sur la durée, compréhension des codes du cinéma-vérité et du documentaire."
      }
    },
    gallery: [],
    url: "https://www.youtube.com/@unsortedvid", // Ajoute l'URL si tu l'as
    tags: ['Vidéo Expérimentale', 'Cinéma Vérité', 'Documentaire', 'YouTube', 'Instagram', 'Captation Spontanée', 'Minimalisme'],
    categories: ["Audiovisuel"]
  },
  

  // --- 🎨 BRANDING ---
  {
    id: "sth",
    title: "Société de Tir Herbretaise",
    image: sth1,
    detailedDescription: {
      context: {
        title: "Contexte & Enjeux",
        content: "Projet bénévole stratégique au sein de mon club de tir sportif, où j'occupe le poste de Responsable Communication depuis plusieurs années. L'enjeu principal : professionnaliser l'image de l'association pour attirer de nouveaux membres, fidéliser les bénévoles et renforcer la visibilité du club auprès des partenaires institutionnels et sponsors potentiels. Ce projet constitue mon laboratoire d'expérimentation réel où j'applique et teste mes apprentissages en communication multimédia."
      },
      role: {
        title: "Mon Rôle & Responsabilités",
        intro: "Gestion complète et autonome de la communication visuelle, numérique et événementielle du club",
        points: [
          { title: "Identité Visuelle & Branding", content: "Refonte complète de la charte graphique et création du logo en respectant les codes visuels du tir sportif et l'identité locale. Alignement avec les chartes des autres clubs de la région pour une cohérence fédérale." },
          { title: "Développement & Gestion Web", content: "Conception, développement et maintenance du site internet WordPress (http://sth85.fr). Migration depuis une version HTML/CSS/JS pure vers un CMS pour permettre l'autonomie des bénévoles dans la publication de contenus (actualités, résultats, événements)." },
          { title: "Design Print & Supports de Communication", content: "Création des affiches événementielles, flyers, supports de communication interne. Production régulière de visuels pour promouvoir les compétitions, challenges et événements organisés par le club." },
          { title: "Gestion Réseaux Sociaux", content: "Animation des comptes Instagram et Facebook avec création de contenus engageants (stories, posts, visuels) pour valoriser les performances sportives et la vie du club." },
          { title: "Organisation Événementielle", content: "Planification et coordination d'événements internes (Challenge Diabolo, Tournoi des Écoles de Tir) et externes pour renforcer la cohésion d'équipe, recruter de nouveaux membres et développer le rayonnement du club." }
        ]
      },
      keyLearnings: {
        title: "Apprentissages Clés & Compétences Développées",
        points: [
          { title: "Gestion de Projet Autonome", content: "Pilotage complet d'un projet de communication à long terme sans supervision directe, avec gestion des priorités et deadlines multiples." },
          { title: "Adaptabilité Client/Utilisateur", content: "Compréhension des besoins d'utilisateurs non-techniques (bénévoles, membres du bureau) et adaptation des solutions (passage à WordPress pour faciliter l'autonomie)." },
          { title: "Communication Multi-Supports", content: "Maîtrise de la cohérence visuelle sur différents médias : print, web, réseaux sociaux, signalétique événementielle." },
          { title: "Gestion de Communauté", content: "Animation d'une communauté en ligne et hors-ligne, développement de l'engagement et de la fidélisation des membres." },
          { title: "Évolution Technique Progressive", content: "Amélioration continue du site (SEO, optimisation, ajout de fonctionnalités) témoignant d'une démarche d'apprentissage et d'amélioration continue." }
        ]
      },
      vision: {
        title: "Projets en Cours & Vision Stratégique",
        content: "Développement futur de contenus audiovisuels pour humaniser la communication : interviews de bénévoles, vidéo de présentation du club, reportages sur les compétitions nationales. Cette évolution vers l'audiovisuel témoigne d'une vision stratégique à long terme et d'une volonté de moderniser la communication sportive associative."
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content: "Gestion de projet autonome, identité visuelle et branding sportif, développement web WordPress, design print et événementiel, gestion de contenu multi-plateformes (web, RS, print), community management, organisation événementielle, adaptabilité aux besoins utilisateurs, évolution technique progressive, communication stratégique associative."
      }
    },
    gallery: [sth1, sth2, sth3, sth4, sth5, sth6, sth7, sth8],
    url: "http://sth85.fr/",
    tags: ['Associatif', 'WordPress', 'Communication Globale', 'Branding Sportif', 'Gestion de Projet', 'Événementiel'],
    categories: ["Branding"]
  },  
  {
    id: "maron-bouillie",
    title: "Maron Bouillie",
    image: mbLogo,
    detailedDescription: {
      context: {
        title: "Contexte & Enjeux Stratégiques",
        content: "Projet universitaire de grande envergure (SAE - Situation d'Apprentissage et d'Évaluation) simulant une mission d'agence complète. L'objectif : refondre intégralement la Direction Artistique de la marque Maron Bouillie, une marque de produits alimentaires artisanaux, pour la moderniser et la repositionner sur un marché concurrentiel. Le défi majeur était de créer une cohérence visuelle et narrative sur l'ensemble des supports de communication (print, digital, audiovisuel, packaging) tout en respectant les contraintes d'une identité de marque alimentaire (codes visuels, normes, attentes consommateurs)."
      },
      role: {
        title: "Mon Rôle & Production Complète",
        intro: "Contribution majeure à la refonte globale de l'identité de marque sur l'ensemble de la chaîne de production créative",
        points: [
          { title: "Direction Artistique & Identité Visuelle", content: "Refonte complète du système d'identité : création du nouveau logo, définition de la palette de couleurs (harmonies, déclinaisons), sélection et hiérarchisation de la typographie pour garantir une cohérence sur tous les supports." },
          { title: "Production Audiovisuelle", content: "Conception et réalisation d'une vidéo explainer présentant l'histoire et les valeurs de la marque, accompagnée d'animations motion design pour dynamiser le storytelling visuel et renforcer l'identité moderne." },
          { title: "Photographie Studio & Produit", content: "Direction et réalisation de shootings photo : mise en scène produit (packshots professionnels avec éclairage studio), photographie lifestyle pour illustrer l'univers de la marque et créer une connexion émotionnelle avec les consommateurs." },
          { title: "Design Print & Éditorial", content: "Création d'affiches promotionnelles et conception d'un magazine de marque (mise en page éditoriale, hiérarchie de l'information, intégration photos-textes) démontrant des compétences en design éditorial avancé." },
          { title: "Web Design & Interface Digitale", content: "Conception des maquettes web (desktop et mobile) pour le site vitrine de la marque, intégrant la nouvelle identité visuelle et optimisant l'expérience utilisateur pour la présentation des produits." },
          { title: "Stratégie Marketing & Communication", content: "Participation à la définition du positionnement de marque, des messages clés et de la stratégie de communication cross-média pour assurer une cohérence entre tous les points de contact." }
        ]
      },
      keyLearnings: {
        title: "Apprentissages Clés & Compétences Transversales",
        points: [
          { title: "Approche 360° & Vision Globale", content: "Maîtrise de la cohérence visuelle et narrative sur une multiplicité de supports (print, digital, audiovisuel, packaging), compétence essentielle en agence." },
          { title: "Gestion de Contraintes Sectorielles", content: "Compréhension des codes visuels et des normes spécifiques au secteur alimentaire (clarté, appétence visuelle, confiance)." },
          { title: "Production Multi-Médias", content: "Capacité à produire des contenus variés (vidéo, photo, print, web) avec un haut niveau de qualité sur chaque média." },
          { title: "Travail en Équipe Projet", content: "Collaboration avec d'autres créatifs sur un projet complexe nécessitant coordination et synchronisation des livrables." },
          { title: "Gestion de Projet Envergure", content: "Pilotage d'un projet de refonte complète avec multiples phases de production et deadlines serrées, similaire à un contexte professionnel d'agence." }
        ]
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content: "Direction Artistique 360°, branding et identité visuelle, production audiovisuelle (vidéo explainer, motion design), photographie studio et produit (éclairage, mise en scène), design print et éditorial (affiches, magazine), web design et maquettage d'interface, stratégie de communication cross-média, gestion de projet complexe, cohérence visuelle multi-supports, sens esthétique et créativité appliquée au secteur alimentaire."
      }
    },
    gallery: [mbLogo, mbColor, mbTypo, mb1616, mb1627, mb1638, mb1677, mb1695, mb1718, mb1758, mb1760],
    tags: ['Direction Artistique 360°', 'Branding', 'Motion Design', 'Photographie Studio', 'Design Éditorial', 'SAE', 'Projet d\'Agence'],
    categories: ["Branding"]
  },
  
  {
    id: "ta-solution-hypno",
    title: "TaSolutionHypno",
    image: tshLogo,
    detailedDescription: {
      context: {
        title: "Contexte Professionnel",
        content: "Accompagnement d'une hypnothérapeute pour le lancement de son activité libérale. Le client avait besoin d'une identité visuelle complète pour démarrer."
      },
      role: {
        title: "Mon Rôle (Direction Artistique)",
        points: [
          "Branding : Création du logo et définition de la palette couleur.",
          "Print : Conception des cartes de visite et des flyers promotionnels.",
          "Conseil : Accompagnement sur la cohérence visuelle des supports."
        ]
      }
    },
    gallery: [tshLogo, tshFlyer1, tshFlyer2, tshCarte1, tshCarte2],
    categories: ["Branding", "Print"]
  },

  // --- 🖨️ PRINT ---
  {
    id: "anna-partout",
    title: "Anna Partout",
    image: anna1,
    detailedDescription: {
      context: {
        title: "Contexte",
        content: "Projet universitaire autour de l'œuvre littéraire 'Anna Partout'."
      },
      role: {
        title: "Réalisation",
        points:[ "Conception d'une série d'affiches artistiques interprétant l'univers du livre, jouant sur la typographie et la composition visuelle."]
      }
    },
    gallery: [anna1, anna2, anna3, anna4, anna4b, anna4c, anna5, anna6],
    categories: ["Print"]
  },
  {
    id: "unsorted-print",
    title: "Unsorted Print",
    image: upGrand,
    detailedDescription: {
      context: {
        title: "Expérimentations Print",
        content: "Collection de travaux d'impression et de design graphique divers (Flyers, Affiches, Tests)."
      }
    },
    gallery: [a3, cafelover, gettingbored, justabovetheroof, presdetoi, vuemuette, vvb, wf1, wf2,pinkLucie,upGrand,up1, upAfficheAA, upSch1, upSch2, upStl, upChaumont1, upChaumont2],
    categories: ["Print"]
  },

  // --- 💻 PROGRAMMATION ---
  {
    id: "mon-bureau",
    title: "Mon Bureau",
    image: bureauMain,
    detailedDescription: {
      context: {
        title: "Genèse du projet",
        content: "Initialement prévu pour être mon portfolio universitaire, ce projet s'est révélé trop complexe pour une navigation fluide d'information rapide."
      },
      vision: {
        title: "Pivot Créatif",
        content: "J'ai décidé de conserver ce projet comme une 'extension de mon univers'. C'est un espace numérique personnel et créatif qui représente mon espace de travail idéalisé, codé sur mesure."
      }
    },
    gallery: [bureauMain, bureauAcceuil, bureauFenetre],
    url: "https://perso.univ-lemans.fr/~i2400571/portfolio2/bureau.php",
    categories: ["Programmation", "Web-design"]
  },
  {
    id: "portfolio-2025",
    title: "Portfolio 2025",
    image: logoMaxime,
    detailedDescription: {
      context: {
        title: "Contexte",
        content: "Le site sur lequel vous naviguez actuellement. C'est l'adaptation fonctionnelle et professionnelle du projet 'Mon Bureau'."
      },
      role: {
        title: "Tech Stack",
        points: ["Développé entièrement en React avec TypeScript. L'objectif est de présenter efficacement qui je suis et ce que je fais, avec une UX optimisée par rapport aux versions précédentes."]
      }
    },
    gallery: [],
    categories: ["Programmation", "Web-design"]
  },

  // --- 📸 PHOTOGRAPHIE ---
  {
    id: "album-tir-sportif",
    title: "Album Tir Sportif",
    image: tir9209,
    detailedDescription: {
      context: {
        title: "Démarche",
        content: "Un album photo dédié exclusivement à ma pratique du tir sportif. L'objectif est de documenter la discipline avec un regard esthétique et technique."
      }
    },
    gallery: [tir9209, tir1798, tir1800, tir1807, tir9116, tir9170, tir9181, tir9201, tir9309A, tir9309ANB, tir9318, tir9854],
    categories: ["Photographie"]
  },
  {
    id: "unsorted-pics",
    title: "Unsorted Pics",
    image: picsCover,
    detailedDescription: {
      context: {
        title: "Concept 'Unsorted'",
        content: "Série de photos publiées 'sans contexte', brutes ou juste sorties du boîtier. Une démarche spontanée pour capturer l'instant."
      }
    },
    gallery: [picsCover, pics0163, pics0531, pics0853, pics0862, pics1334, pics1598, pics2088, pics9462, pics9469, pics9484, pics9804, pics9810, picsMartin,picsnouv1n, picsnouv2n, picsnouv3n, picsnouv4n, picsnouv5n, picsnouv6n, picsnouv7n, picsnouv1j, picsnouv2j, picsnouv3j, picsnouv4j, picsnouv5j, picsnouv6j, picsnouv7j, picsnouv8j],
    categories: ["Photographie"]
  }
];