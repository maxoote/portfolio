import type { Project } from "../types/projects";

// --- IMPORTS DES ASSETS ---

// M2 Studio (Assets généraux)
import logoMaxime from "../assets/m2studio/logoMaximeMandin.webp";
// import photoProfile from "../assets/m2studio/photoprofile.webp";

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

// Mes Premieres interviews
import intro_horizontal from "../assets/MPI/intro_horizontal.webp";
import intro_vertical from "../assets/MPI/intro_vertical.webp";
import cap7media from "../assets/MPI/cap7media.webp";
import arbitre from "../assets/MPI/arbitre.webp";
import carton from "../assets/MPI/carton.webp";

//motion design web designer
import mdwd_1 from "../assets/motion_webdesigner/1.webp";
import mdwd_2 from "../assets/motion_webdesigner/2.webp";
import mdwd_3 from "../assets/motion_webdesigner/3.webp";
import mdwd_4 from "../assets/motion_webdesigner/4.webp";
import mdwd_5 from "../assets/motion_webdesigner/5.webp";
import mdwd_6 from "../assets/motion_webdesigner/6.webp";
import mdwd_7 from "../assets/motion_webdesigner/7.webp";
import mdwd_8 from "../assets/motion_webdesigner/8.webp";
import mdwd_9 from "../assets/motion_webdesigner/9.webp";
import mdwd_10 from "../assets/motion_webdesigner/10.webp";
import mdwd_11 from "../assets/motion_webdesigner/11.webp";
import mdwd_12 from "../assets/motion_webdesigner/12.webp";
import mdwd_13 from "../assets/motion_webdesigner/13.webp";
import mdwd_14 from "../assets/motion_webdesigner/14.webp";
import mdwd_15 from "../assets/motion_webdesigner/15.webp";
import mdwd_16 from "../assets/motion_webdesigner/16.webp";
import mdwd_17 from "../assets/motion_webdesigner/17.webp";

// Matrice
import matrice1 from "../assets/matrice/affiche.webp"
import matrice2 from "../assets/matrice/mercure.webp"
import matrice3 from "../assets/matrice/mockup.webp"
import matrice4 from "../assets/matrice/variation2.webp"
import matrice5 from "../assets/matrice/verre.webp"
import matrice6 from "../assets/matrice/verrec.webp"
import matrice7 from "../assets/matrice/v2.webp"
import matrice8 from "../assets/matrice/vue.webp"
import matrice9 from "../assets/matrice/vueb.webp"

// --- LISTE DES PROJETS ---
// Trié selon: Audiovisuel > Branding > Print > Programmation > Photographie

export const projects: Project[] = [
  // --- 🎬 AUDIOVISUEL ---

  {
    id: "interviews-fftir",
    title: "Interviews Championnat de France",
    image: intro_horizontal,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Championnat de France de Tir Sportif 10m, Micropolis Besançon, janvier 2026. Brief auto-imposé avec fiche projet formalisée — 6 formats vidéo conçus en pré-production, 20 à 32 livrables prévus, fiche de droit à l'image préparée, proposition de mise à disposition des contenus à la FFTir. Production en conditions réelles de compétition, en binôme avec Sarah Mandin (journaliste/intervieweuse).",
      },
      role: {
        title: "Rôle & Production",
        intro:
          "Réalisateur, cadreur, monteur — binôme avec Sarah Mandin (journaliste/intervieweuse)",
        points: [
          {
            title: "Pré-production",
            content:
              "Conception de 6 formats distincts pour couvrir plusieurs registres narratifs et plateformes : Fast & Curious (30-60s, TikTok/Reels), 3 questions à… (1-2min), Portrait express (2-3min, portfolio), Coulisses, Récap de journée, Teaser vitrine. Rédaction de la fiche projet, des fiches de droit à l'image, préparation de la liste des profils à interviewer (sportifs, arbitres, bénévoles, staff, FFTir).",
          },
          {
            title: "Production terrain",
            content:
              "Tournage en conditions réelles sur 5 jours de championnat : cadrage, son et conduite d'interview en simultané, main levée sans trépied. Canon M50 Mark II, micro-canon directionnel sur caméra, 2 panneaux LED portables.",
          },
          {
            title: "Post-production",
            content:
              "Montage sous DaVinci Resolve, étalonnage, mixage. Sélection radicale : sur +10 interviews tournées, 3 retenues, 2 formats livrés sur les 6 prévus. Publication début mars.",
          },
        ],
      },
      keyLearnings: {
        title: "Ce que ce projet a réellement appris",
        points: [
          {
            title: "Matériel & préparation terrain",
            content:
              "Pas de trépied sur un tournage multi-format solo : erreur de production éliminée définitivement. Micro-canon sur caméra en salle de compétition : insuffisant — le son doit être traité comme une contrainte technique prioritaire, pas secondaire.",
          },
          {
            title: "Charge opérationnelle solo",
            content:
              "Gérer simultanément la qualité image, la qualité son et la conduite d'interview sans support stable : trois flux trop lourds pour un seul opérateur sans préparation matérielle adaptée.",
          },
          {
            title: "La valeur d'un brief structuré",
            content:
              "Le brief a été rédigé, la fiche de droit à l'image préparée, une proposition faite à la FFTir. Le projet a été cadré comme une production réelle. Le terrain a corrigé le reste — c'est ça, la pré-production.",
          },
        ],
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Réalisation et conception de formats vidéo multi-plateformes, cadrage et captation terrain en conditions réelles, conduite d'interview, montage et étalonnage sous DaVinci Resolve, gestion de production solo (pré-production, tournage, post-production), rédaction de documents de production (fiche projet, droits à l'image).",
      },
    },
    gallery: [intro_horizontal, cap7media, intro_vertical, arbitre, carton],
    tags: [
      "Vidéo",
      "Reportage",
      "Interview",
      "Tir Sportif",
      "DaVinci Resolve",
      "Production Terrain",
      "Championnat de France",
    ],
    categories: ["Audiovisuel"],
  },

  {
    id: "motion-webdesigner",
    title: "Motion Design — Devenir Webdesigner",
    image: mdwd_1,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Brief client MMI France — capsule vidéo d'1min30 présentant un métier post-BUT MMI à destination des étudiants actuels et futurs. Sujet retenu par l'équipe : Devenir Webdesigner. Production en agence de 4, 3 séances de 3h + temps perso, livrée en semaine 6.",
      },
      role: {
        title: "Rôle & Contribution",
        intro:
          "Infographiste & Directeur Artistique Motion — production collective (agence de 4)",
        points: [
          {
            title: "Pré-production",
            content:
              "Participation à la séance 1 : co-écriture du script, construction du storyboard, recherche DA globale. Définition du concept visuel — présentation face caméra incrustée sur fond custom, rythmée par des blocs infographiques animés.",
          },
          {
            title: "Exécution motion design",
            content:
              "Réalisation de l'intégralité des assets motion de la capsule : intro/outro, les 3 mots-clés du webdesign (fluide, agréable, intuitive), débouchés métier, salaire, outils, cycle de production d'un site, sections accessibilité/responsive/contraste, passage formations MMI et Master. Chaque séquence conçue pour s'articuler avec les mouvements de la présentatrice — timing calé sur le rythme du script.",
          },
          {
            title: "Workflow & livraison",
            content:
              "Storyboard infographique → création des assets sous Affinity Studio → intégration et animation sous DaVinci Resolve → coordination avec le montage final. Absent lors du tournage (Championnat de France) : tous les assets livrés en amont, documentés, prêts à intégration sans intervention plateau.",
          },
        ],
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Motion design et infographie animée, conception d'assets pour incrustation vidéo, storyboard, synchronisation motion/parole, workflow de livraison en équipe de production, DaVinci Resolve, Affinity Studio. Aucun outil Adobe — pipeline complet sur stack alternative.",
      },
    },
    gallery: [
      mdwd_1,
      mdwd_2,
      mdwd_3,
      mdwd_4,
      mdwd_5,
      mdwd_6,
      mdwd_7,
      mdwd_8,
      mdwd_9,
      mdwd_10,
      mdwd_11,
      mdwd_12,
      mdwd_13,
      mdwd_14,
      mdwd_15,
      mdwd_16,
      mdwd_17,
    ],
    tags: [
      "Motion Design",
      "Infographie",
      "Vidéo",
      "DaVinci Resolve",
      "Affinity Studio",
      "Production Collective",
    ],
    categories: ["Audiovisuel"],
  },

  {
    id: "mdn-maxime",
    title: "mdn.maxime",
    image: mdnRetouche1,
    detailedDescription: {
      context: {
        title: "Contexte & Positionnement",
        content:
          "Portfolio grand public et archive créative en cours de construction. @mdn.maxime documente en temps réel l'ensemble de la production : affiches du Marathon 2026, interviews terrain, projets adaptés en motion, photographies (tir sportif, soirées, sport mécanique), résultats de compétition, streams Twitch de tir sportif, et formats éditoriaux en développement.",
      },
      role: {
        title: "Production & Formats",
        intro: "Directeur Artistique, Photographe, Réalisateur, Monteur — Solo",
        points: [
          {
            title: "Affiches & Print",
            content:
              "Publication hebdomadaire des affiches du Marathon 2026. Chaque post documente un livrable réel — exploration graphique, événement fictif ou réel, adaptation d'un projet, réponse à un instant.",
          },
          {
            title: "Vidéo & Interview",
            content:
              "Mise en ligne des interviews du Championnat de France de Tir Sportif. Reels documentant des sorties photo (foot, motocross). Formats en développement : tournois de sélection d'affiches, vidéos d'explication de processus, best-of de streams Twitch.",
          },
          {
            title: "Photographie & Résultats",
            content:
              "Publication de séries photo (tir sportif, soirées, événements), résumés visuels de compétitions, annonces de streams. Chaque format pensé pour les codes de la plateforme — cadrage, rythme, mise en page.",
          },
        ],
      },
      vision: {
        title: "Trajectoire éditoriale",
        content:
          "Les formats en développement — tournois de sélection d'affiches, vidéos de processus créatif, best-of de streams — dessinent une trajectoire vers un contenu éditorial structuré. Le compte est le seul endroit où tous les projets coexistent sans hiérarchie : l'affiche du lundi matin, la photo prise à 23h dans les stands, le résultat d'une finale nationale.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Direction artistique de contenu multi-format, photographie, montage vidéo sous DaVinci Resolve, motion sur projets, conception graphique de posts, cadrage et conduite d'interviews terrain, production régulière sous contrainte de cadence, personal branding stratégique.",
      },
    },
    gallery: [
      mdnStoryPort,
      mdnAnnonce1,
      mdnAnnonce2,
      mdnStream,
      mdnVid1,
      mdnVid2,
      mdnRetouche1,
      mdnRetouche2,
      mdnStoryRec,
    ],
    url: "https://www.instagram.com/mdn.maxime/",
    tags: [
      "Personal Branding",
      "Photographie",
      "Vidéo",
      "Motion",
      "Instagram",
      "Contenu Multi-Format",
    ],
    categories: ["Audiovisuel"],
  },

  {
    id: "unsorted-vid",
    title: "Unsorted Videos",
    image: unsortedVidGif,
    detailedDescription: {
      context: {
        title: "Contexte & Démarche Artistique",
        content:
          "Projet expérimental de création vidéo minimaliste publié sur YouTube et Instagram. Inspiré par l'esthétique du cinéma-vérité et du documentaire observationnel, ce projet capture des moments spontanés sans contexte ni post-production lourde. L'objectif est de valoriser l'authenticité brute et l'instant présent, en opposition à la sur-production dominante sur les réseaux sociaux.",
      },
      role: {
        title: "Mon Rôle",
        intro: "Captation et diffusion de contenus visuels spontanés",
        points: [
          {
            title: "Captation Spontanée",
            content:
              "Tournage de séquences vidéo et photos sans mise en scène, directement du boîtier, privilégiant la réactivité et l'authenticité du moment.",
          },
          {
            title: "Direction Artistique Minimaliste",
            content:
              "Choix assumé d'une post-production volontairement légère pour préserver le caractère brut et documentaire des images.",
          },
          {
            title: "Curation & Publication",
            content:
              "Sélection et publication régulière de contenus sur YouTube et Instagram, créant une archive visuelle du quotidien sans narration imposée.",
          },
        ],
      },
      vision: {
        title: "Vision Artistique",
        content:
          "Ce projet questionne la sur-production et le perfectionnisme omniprésents dans la création de contenu digital. En publiant des vidéos 'unsorted' (non triées), je valorise l'imperfection et l'instant capturé comme œuvre en soi, dans une démarche proche du documentaire anthropologique ou du found footage artistique.",
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content:
          "Direction artistique conceptuelle, captation vidéo réactive, sens du cadrage et de la composition instantanée, gestion de contenus multi-plateformes (YouTube, Instagram), capacité à développer une démarche créative cohérente sur la durée, compréhension des codes du cinéma-vérité et du documentaire.",
      },
    },
    gallery: [unsortedVidGif],
    url: "https://www.youtube.com/@unsortedvid", // Ajoute l'URL si tu l'as
    tags: [
      "Vidéo Expérimentale",
      "Cinéma Vérité",
      "Documentaire",
      "YouTube",
      "Instagram",
      "Captation Spontanée",
      "Minimalisme",
    ],
    categories: ["Audiovisuel"],
  },

  {
    id: "matrice",
    title: "MATRICE",
    image: matrice1,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Brief conceptuel personnel — L'Ordre et le Fluide. Une scénographie virtuelle explorant la tension entre rigueur brutaliste et imprévisibilité des matières organiques. Objectif technique : pousser la maîtrise des shaders et du rendu photoréaliste jusqu'aux limites du moteur Cycles.",
      },
      role: {
        title: "Pipeline 3D → Graphisme → Vidéo IA",
        intro:
          "Solo — Modélisation 3D, Rendu, Direction Artistique, Graphisme Éditorial, Direction Vidéo IA",
        points: [
          {
            title: "Modélisation & Shaders (Blender / Cycles)",
            content:
              "Environnement architectural procédural : murs en béton banché via textures générées procéduralement (nœuds Noise/Musgrave + Bump), modificateurs Bevel et lignes de coffrage. Trois variations matière sur les sculptures : Mercure (Metallic max, Roughness ~0, réflexion spéculaire miroir), Verre (Transmission + IOR 1.45 simulant le cristal), Émission lumineuse (source active modifiant l'ambiance de la pièce). Rendu Cycles haute résolution (3000×2000px) avec Denoising.",
          },
          {
            title: "Direction Artistique & Graphisme Éditorial",
            content:
              "Traitement duotone profond (bleu nuit / reflets néon) sur les renders pour basculer de l'esthétique photoréaliste vers une imagerie de scanner numérique. Superposition d'un wireframe vectoriel — boîtes de délimitation mathématiques sur les sphères. Cartouche technique en typographie monospace (paramètres moteur, coordonnées spatiales, IOR 1.45) intégré comme élément de mise en page éditorial.",
          },
          {
            title: "Animation vidéo IA",
            content:
              "Utilisation des renders Blender comme start/end frames stricts dans un outil Image-to-Video IA — technique permettant d'animer les réflexions spéculaires complexes des sphères mercure tout en conservant la stabilité géométrique du décor (béton et sol laqué).",
          },
        ],
      },
      vision: {
        title: "Le détail qui tue",
        content:
          "Un shader Principled BSDF réglé à la main sur du mercure liquide ou du cristal, ça ne se fait pas au hasard. L'IOR à 1.45 sur le verre, c'est le même indice que le cristal réel. La rigueur du tir de compétition — millimètre par millimètre — se retrouve dans le node editor de Blender. Même discipline, autre terrain.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Modélisation 3D et rendu photoréaliste (Blender / Cycles), textures procédurales, Principled BSDF (Metallic, Transmission, IOR, Emission), HDRI Lighting, direction artistique et graphisme éditorial, duotone, typographie éditoriale, generation vidéo IA (Image-to-Video), Affinity Designer/Photo.",
      },
    },
    gallery: [
matrice1,
matrice2,
matrice3,
matrice4,
matrice5,
matrice6,
matrice7,
matrice8,
matrice9    ],
    tags: [
      "3D",
      "Blender",
      "Cycles",
      "Direction Artistique",
      "Shaders",
      "Vidéo IA",
      "Graphisme Éditorial",
    ],
    categories: ["Audiovisuel"],
  },

  // --- 🎨 BRANDING ---

  {
    id: "sth",
    title: "Société de Tir Herbretaise",
    image: sth1,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Client réel — association sportive créée dans les années 80 avec un logo unique datant de la même époque, aucune présence digitale structurée, aucune charte graphique. Mission auto-initiée : professionnaliser l'image du club de A à Z. Durée : depuis septembre 2022, toujours actif.",
      },
      role: {
        title: "Rôle & Production",
        intro:
          "Responsable Communication — Direction Artistique, Développement Web, Production Print & Réseaux (Solo, bénévole)",
        points: [
          {
            title: "Refonte identité visuelle",
            content:
              "Création d'une nouvelle identité complète depuis zéro — pas d'évolution de l'existant, pas de contrainte de continuité. Nouveau logo, charte graphique, palette, typographie. Alignement avec les chartes visuelles des clubs de la région pour cohérence fédérale, tout en conservant un ancrage local identifiable.",
          },
          {
            title: "Développement WordPress",
            content:
              "Développement sur thème blank — pas de thème parent modifié, construction depuis la structure. Architecture pensée pour l'autonomie des bénévoles non-techniques : CMS, publication d'actualités, résultats de compétitions, événements. Migration depuis un site HTML/CSS/JS statique préexistant.",
          },
          {
            title: "Production Print & Réseaux",
            content:
              "Création des affiches événementielles, flyers, supports de communication interne. Animation des comptes Instagram et Facebook — contenus réguliers sur les compétitions, les challenges internes, la vie du club. Organisation d'événements (Challenge Diabolo, Tournoi des Écoles de Tir) avec production des supports associés.",
          },
        ],
      },
      vision: {
        title: "Durée & Valeur",
        content:
          "Ce projet dure depuis 2022 sans interruption. Chaque affiche produite, chaque story publiée, chaque mise à jour du site est une livraison réelle pour un client réel — sans brief formalisé, sans deadline imposée, sans validation pédagogique. C'est le projet qui a formé les réflexes avant le stage.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Identité visuelle et branding sportif, développement WordPress sur thème blank, design print et événementiel, community management, gestion de projet autonome sur la durée, communication multi-supports (web, réseaux, print), Affinity Designer, HTML/CSS.",
      },
    },
    gallery: [sth1, sth2, sth3, sth4, sth5, sth6, sth7, sth8],
    url: "http://sth85.fr/",
    tags: [
      "Branding",
      "WordPress",
      "Identité Visuelle",
      "Print",
      "Communication Sportive",
      "Gestion de Projet",
    ],
    categories: ["Branding"],
  },

  {
    id: "maron-bouillie",
    title: "Maron Bouillie",
    image: mbLogo,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Brief client réel — Maron Bouillie, marque de tote bags écoresponsables fabriqués à Paris. Mission : concevoir l'identité visuelle complète de la collection Paris Rétro et déployer un plan de communication plurimédia sur 12 semaines. Livrable central : une charte graphique production-ready couvrant logo, couleurs, typographie, photographie et déclinaisons sur 5 supports. Production en agence de 4 — contribution personnelle représentant environ 70% du livrable total.",
      },
      role: {
        title: "Rôle & Production",
        intro:
          "Contributeur principal (≈70%) — Direction Artistique, Graphisme, Photographie — production collective (agence de 4)",
        points: [
          {
            title: "Design System complet",
            content:
              "Conception intégrale du design system : logo en 3 déclinaisons (Signature, Typographique, Symbole Iconique) avec zones de protection et tailles minimales documentées, palette chromatique 4 couleurs narratives (Parchemin, Encre, Vert Jardin Parisien, Bordeaux Château Maron) avec valeurs HEX/RGB/CMJN, système typographique hiérarchisé Boska/General Sans sur 4 niveaux de titres et 4 niveaux de texte.",
          },
          {
            title: "Direction Artistique & Photographie",
            content:
              "Définition des règles de composition photographique : Paris en noir & blanc, sac en couleur saturée comme seul point focal du cadre. Production des visuels appliquant ces règles. Déclinaisons sur 5 supports : affiche, site web, réseaux sociaux, packaging, étiquettes.",
          },
          {
            title: "Plan de communication plurimédia",
            content:
              "Contribution collective : analyse de marché (SWOT, PESTEL, concurrence, segmentation), personas, copy strategy, mediaplanning GANTT 12 semaines sur 5 canaux. Motion design de présentation, affiches de campagne.",
          },
        ],
      },
      keyLearnings: {
        title: "Apprentissages clés",
        points: [
          {
            title: "Cohérence système sur 5 supports",
            content:
              "Construire un design system qui tient sur l'affiche, le packaging, le feed Instagram et les étiquettes tissées simultanément — chaque décision typographique ou colorimétrique a des conséquences en cascade sur tous les supports.",
          },
          {
            title: "DA sous contrainte marché",
            content:
              "Faire exister un produit à 37€ sur un marché saturé de tote bags à 5€ sans tomber dans le cliché touristique — la DA n'est pas décorative, elle est l'argument de vente.",
          },
        ],
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Direction Artistique 360°, conception de design system complet, branding et identité visuelle, photographie produit et lifestyle, design print et éditorial, stratégie de communication plurimédia, Affinity Designer/Publisher/Photo, DaVinci Resolve.",
      },
    },
    gallery: [
      mbLogo,
      mbColor,
      mbTypo,
      mb1616,
      mb1627,
      mb1638,
      mb1677,
      mb1695,
      mb1718,
      mb1758,
      mb1760,
    ],
    tags: [
      "Direction Artistique",
      "Branding",
      "Design System",
      "Photographie",
      "Print",
      "Motion Design",
      "Communication Plurimédia",
    ],
    categories: ["Branding"],
  },

  {
    id: "ta-solution-hypno",
    title: "TaSolutionHypno",
    image: tshLogo,
    detailedDescription: {
      context: {
        title: "Contexte & Enjeux",
        content:
          "Accompagnement d'une hypnothérapeute dans le lancement de son activité libérale. L'enjeu principal : construire une identité visuelle professionnelle, rassurante et mémorable pour inspirer confiance dès le premier contact (flyer, carte de visite, bouche-à-oreille) et clarifier son positionnement face à une offre de soins alternative parfois méconnue.",
      },
      role: {
        title: "Mon Rôle & Direction Artistique",
        intro:
          "Prise en charge complète de l'identité graphique et des supports imprimés pour soutenir le lancement de l'activité.",
        points: [
          {
            title: "Identité Visuelle & Logo",
            content:
              "Création du logo, définition de la palette colorimétrique et des choix typographiques pour traduire les valeurs clés de la pratique : apaisement, écoute, bienveillance et accompagnement.",
          },
          {
            title: "Supports Print Professionnels",
            content:
              "Conception des cartes de visite et des flyers promotionnels, en travaillant particulièrement la hiérarchie de l'information (prestations, coordonnées, prise de contact) afin de faciliter la compréhension pour un public large.",
          },
          {
            title: "Cohérence de Marque",
            content:
              "Mise en place de principes graphiques simples à réutiliser (marges, styles, iconographie) pour garantir une image homogène sur les futurs supports, qu'ils soient imprimés ou digitaux.",
          },
          {
            title: "Accompagnement & Conseil",
            content:
              "Conseil sur le ton visuel à adopter pour se différencier des codes médicaux classiques tout en restant crédible, et sur la manière d'utiliser les supports print dans sa communication locale.",
          },
        ],
      },
      competencesDemontrees: {
        title: "Compétences Démontrées",
        content:
          "Direction artistique pour une petite structure, création d'identité visuelle complète, design print (flyers, cartes de visite), travail sur une image de marque rassurante dans le domaine du bien-être, capacité à vulgariser des enjeux graphiques pour un client non spécialiste.",
      },
    },
    gallery: [tshLogo, tshFlyer1, tshFlyer2, tshCarte1, tshCarte2],
    tags: [
      "Branding",
      "Identité Visuelle",
      "Hypnothérapie",
      "Bien‑être",
      "Logo",
      "Print",
      "Carte de Visite",
      "Flyer",
    ],
    categories: ["Branding", "Print"],
  },

  // --- 🖨️ PRINT ---

  {
    id: "anna-partout",
    title: "Anna Partout",
    image: anna1,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Brief client indirect — Anna Partout de Chloé Ronsin Le Mat. Produire une série d'affiches qui ne soit pas une illustration du roman, mais une matérialisation de la psyché du narrateur : obsession, surveillance, dissolution du réel dans le virtuel. Livrable final sélectionné et diffusé lors de la lecture publique au festival Le Quarante, Laval — avec invitation à monter sur scène aux côtés de l'auteure.",
      },
      role: {
        title: "Direction Artistique & Réalisation",
        intro:
          "Solo — Conception, Direction Artistique, Exécution, Préparation print",
        points: [
          {
            title: "Concept & Parti Pris Graphique",
            content:
              "La collision de deux univers visuels opposés pour traduire la tension centrale du roman. L'Ordre — grilles constructivistes, formes géométriques pures, typographie massive — représente le désir de contrôle du narrateur. Le Chaos — grain, bruit, coulures, lignes de code — traduit la saturation mentale et la perte de contact avec le réel. Trois séries : L'Inventaire Obsessionnel, La Construction du Sujet (références Bauhaus / Ballet Triadique), Le Flux et la Rupture (grille De Stijl qui fond).",
          },
          {
            title: "Exécution technique",
            content:
              "Hybridation vectoriel/matriciel systématique dans Affinity Studio : formes géométriques et aplats vectoriels pour la froideur clinique, ajout de grain et de textures papier en matriciel pour les interférences. Typographie sans-serif condensée autoritaire — elle occupe l'espace comme l'obsession, sans laisser de vide. Préparation print complète : fonds perdus, marges, exports en conditions réelles.",
          },
        ],
      },
      vision: {
        title: "Impact & Diffusion",
        content:
          "Les affiches ont été projetées sur scène pendant la lecture publique de l'auteure au festival Le Quarante à Laval. Chloé Ronsin Le Mat a invité les créateurs à monter sur scène avec elle pour la clôture de la performance. Une série d'affiches diffusée en festival, en présence de l'auteure — c'est la définition d'un livrable qui sort du cadre scolaire.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Direction artistique conceptuelle, design d'affiche, série graphique cohérente, typographie expressive, hybridation vectoriel/matriciel, interprétation graphique d'un univers littéraire, préparation fichiers pour impression, Affinity Designer/Publisher/Photo.",
      },
    },
    gallery: [anna1, anna2, anna3, anna4, anna4b, anna4c, anna5, anna6],
    tags: [
      "Affiche",
      "Direction Artistique",
      "Typographie",
      "Série Graphique",
      "Constructivisme",
      "Bauhaus",
      "Festival",
    ],
    categories: ["Print"],
  },

  {
    id: "unsorted-print",
    title: "Unsorted Print",
    image: upGrand,
    detailedDescription: {
      context: {
        title: "Concept & Positionnement",
        content:
          "Archive éditoriale personnelle. Réunit les créations print qui n'ont pas vocation à former un projet autonome — affiches isolées, explorations typographiques, flyers, tests de composition. Fonctionne comme un répertoire vivant de recherche graphique : production accumulée sans filtre, organisée selon une logique de curation éditoriale.",
      },
      role: {
        title: "Direction Graphique & Curation",
        intro: "Solo — Production, sélection éditoriale, préparation print",
        points: [
          {
            title: "Exploration sans contrainte",
            content:
              "Pas de fil conducteur imposé — c'est précisément l'absence de contrainte qui est le principe. Chaque pièce explore un registre différent : couleur, typographie, composition, texture, densité visuelle. L'archive documente l'étendue de la gamme créative plutôt qu'un style homogène.",
          },
          {
            title: "Production & Préparation print",
            content:
              "Création continue, en parallèle de tous les autres projets. Certaines pièces répondent à un instant — une photo, une émotion, une contrainte typographique à tester. D'autres sont les traces d'explorations menées avant un projet client. Préparation print systématique : fonds perdus, marges, exports en conditions réelles d'impression.",
          },
        ],
      },
      vision: {
        title: "Lecture éditoriale",
        content:
          "Un DA se lit aussi dans ce qu'il produit quand personne ne demande rien. UNSORTED PRINT est la preuve que la production ne s'arrête pas entre deux briefs. La cohérence n'est pas esthétique, elle est éditoriale : un regard qui sélectionne et expose ce qui mérite d'être montré parmi les essais.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Design d'affiche et de flyer, exploration typographique, gestion de la couleur, mise en page print, curation et organisation d'un corpus de travaux, Affinity Designer/Publisher/Photo.",
      },
    },
    gallery: [
      a3,
      cafelover,
      gettingbored,
      justabovetheroof,
      presdetoi,
      vuemuette,
      vvb,
      wf1,
      wf2,
      pinkLucie,
      upGrand,
      up1,
      upAfficheAA,
      upSch1,
      upSch2,
      upStl,
      upChaumont1,
      upChaumont2,
    ],
    tags: [
      "Print",
      "Affiche",
      "Typographie",
      "Exploration Graphique",
      "Archive",
      "Expérimentation",
    ],
    categories: ["Print"],
  },

  {
    id: "marathon-2026",
    title: "Marathon 2026 — UNSORTEDPRINT°",
    image: /* TODO: import image de couverture marathon */ undefined,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Brief auto-imposé brutal — 52 affiches en 52 semaines, sans thème fixé, sans filet. Un format par semaine, publié tous les lundis sur @mdn.maxime. La contrainte n'est pas le sujet. C'est la cadence.",
      },
      role: {
        title: "Direction Artistique & Production",
        intro:
          "Solo — Brief, Direction Artistique, Exécution, Export, Publication",
        points: [
          {
            title: "Règle du marathon",
            content:
              "Chaque affiche doit explorer un registre visuel différent du précédent. Un lundi peut être un événement réel, le suivant une sensation, le suivant une photo prise au mauvais moment. Pas de palette imposée, pas de famille typographique récurrente. La cohérence, c'est la discipline de production — pas le style.",
          },
          {
            title: "Diversité des sujets",
            content:
              "Événements réels ou fictifs, explorations graphiques, projets IUT adaptés en format affiche (Les Ailes du Moulin — n°14), photographies personnelles, inspirations musicales ou filmiques, annonces personnelles, réponses à une émotion. Chaque semaine, un brief différent.",
          },
          {
            title: "Cycle de production",
            content:
              "Brief personnel → explorations → exécution → export prêt à l'impression. Une semaine, pas de rallonge. Stack : Affinity Designer, Affinity Publisher, Affinity Photo.",
          },
        ],
      },
      vision: {
        title: "Ce que ce projet prouve",
        content:
          "52 affiches, c'est 52 briefs rédigés, 52 DA définies, 52 livrables finalisés. N'importe quel DA senior reconnaîtra ce que ça coûte en rigueur mentale. C'est aussi, en creux, la preuve que la créativité n'est pas une ressource qui s'épuise — elle s'entraîne.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Direction artistique à grande cadence, design d'affiche multi-registres, gestion du brief auto-imposé, polyvalence stylistique, production print hebdomadaire, Affinity Designer/Publisher/Photo.",
      },
    },
    gallery: [
      /* TODO: assets marathon 2026 */
    ],
    url: "https://www.instagram.com/mdn.maxime/",
    tags: [
      "Affiche",
      "Marathon Créatif",
      "Direction Artistique",
      "Print",
      "Typographie",
      "Exploration Graphique",
      "52 semaines",
    ],
    categories: ["Print"],
  },

  // --- 💻 PROGRAMMATION ---

  {
    id: "les-ailes-du-moulin",
    title: "Les Ailes du Moulin",
    image: /* TODO: import image de couverture du site */ undefined,
    detailedDescription: {
      context: {
        title: "Brief & Contexte",
        content:
          "Festival fictif. Brief auto-imposé : concevoir une identité visuelle de A à Z et la déployer sur un site WordPress production-ready — architecture de données complexe, responsive intégral, automatisation de l'import. Livrable annexe : une affiche de communication intégrée au Marathon 2026 (UNSORTEDPRINT°14).",
      },
      role: {
        title: "Pipeline de Production Complet",
        intro:
          "Solo — DA, UI/UX, Intégration Front-End, Développement WordPress",
        points: [
          {
            title: "Direction Artistique & Identité",
            content:
              "Contrainte de départ : créer un emblème à partir d'une forme géométrique neutre représentant des pales de moulin, en évitant formellement toute association visuelle indésirable. Résolution par isolation et abstraction géométrique stricte. Colorimétrie narrative à deux pôles : orange supérieur (soleil de jour) / bleu inférieur (Lac de la Tricherie, nuit). Cette dualité fonde toute la DA du site.",
          },
          {
            title: "UI/UX — Structure bi-phasée",
            content:
              "Interface claire sur le Hero, bascule en Dark UI au premier scroll pour matérialiser la tombée de la nuit. Les dégradés orange/bleu de la DA deviennent des halos lumineux dans la section sombre, guidant le regard sur les grilles artistes et programmation. Responsive intégral mobile-first.",
          },
          {
            title: "Développement WordPress & automatisation",
            content:
              "Déploiement de deux Custom Post Types (Artistes / Planning), création de taxonomies personnalisées (Jours, Scènes, Genres, Type de soirée), intégration ACF avancée (biographies, liens Spotify/YouTube, horaires, intensité). Développement de scripts PHP algorithmiques pour automatiser l'import via parsing CSV : 144 créneaux de concerts et 73 fiches artistes générés, nettoyés et liés automatiquement en base, avec prévention des doublons et mappage dynamique des champs ACF.",
          },
        ],
      },
      vision: {
        title: "Le détail qui tue",
        content:
          "Importer 144 concerts à la main, c'est une après-midi perdue. Écrire le script qui les importe en 3 secondes, c'est du back-end. La DA est cohérente, le site est responsive, la base de données tient. C'est un pipeline de production complet — pas un projet d'école.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Direction Artistique, UI/UX Design, intégration Front-End responsive, développement WordPress custom (CPT, ACF, taxonomies), scripting PHP pour automatisation d'imports CSV, Figma, Affinity Designer.",
      },
    },
    gallery: [
      /* TODO: assets les ailes du moulin */
    ],
    tags: [
      "WordPress",
      "Direction Artistique",
      "UI/UX",
      "PHP",
      "ACF",
      "Custom Post Types",
      "Festival",
      "Responsive",
    ],
    categories: ["Programmation", "Web-design"],
  },

  {
    id: "mon-bureau",
    title: "Mon Bureau",
    image: bureauMain,
    detailedDescription: {
      context: {
        title: "Genèse du projet",
        content:
          "À l’origine, j’ai conçu ce projet comme mon portfolio universitaire. Très vite, j’ai eu envie d’en faire une expérience plus immersive et narrative, ce qui l’a rendu moins adapté à une consultation rapide d’informations, mais beaucoup plus intéressant comme terrain d’expérimentation créatif.",
      },
      role: {
        title: "Conception & Développement",
        intro:
          'J’ai imaginé, dessiné et développé l’ensemble de cet univers, du concept de "bureau virtuel" jusqu’à l’intégration front-end.',
        points: [
          {
            title: "Concept d’interface diégétique",
            content:
              "J’ai choisi de transformer le portfolio en un bureau virtuel : plutôt qu’un simple menu, l’utilisateur explore un espace, ce qui rend la navigation plus ludique et narrative.",
          },
          {
            title: "Direction artistique de l’espace",
            content:
              "J’ai défini les cadrages, les éléments visuels (fenêtre, bureau, objets) et l’ambiance globale pour représenter mon espace de travail idéal, en cohérence avec mon univers graphique et ma façon de créer.",
          },
          {
            title: "Intégration & interactions",
            content:
              "J’ai mis en place les zones cliquables, les transitions et la mise en scène des contenus afin de privilégier une expérience immersive plutôt qu’une simple page à faire défiler.",
          },
        ],
      },
      vision: {
        title: "Pivot créatif",
        content:
          'Plutôt que de forcer ce projet à rentrer dans le cadre d’un portfolio "classique", j’ai décidé de l’assumer comme une extension de mon univers. « Mon Bureau » est devenu une pièce numérique dans laquelle on entre pour découvrir mon travail autrement. C’est un laboratoire où je teste des idées d’interfaces plus narratives, que je pourrai ensuite réutiliser dans des projets plus fonctionnels.',
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Conception d’interface immersive, web-design narratif, réflexion UX entre esthétique et lisibilité, capacité à faire pivoter un projet en cours vers un objet plus expérimental, cohérence entre mon univers graphique et l’interface que je propose.",
      },
    },
    gallery: [bureauMain, bureauAcceuil, bureauFenetre],
    tags: [
      "Portfolio Expérimental",
      "Interface Immersive",
      "Web-design",
      "Expérience Utilisateur",
      "Interface Narrative",
      "Projet Personnel",
    ],
    url: "https://perso.univ-lemans.fr/~i2400571/portfolio2/bureau.php",
    categories: ["Programmation", "Web-design"],
  },

  {
    id: "portfolio-2025",
    title: "Portfolio 2025",
    image: logoMaxime,
    detailedDescription: {
      context: {
        title: "Contexte",
        content:
          "Vous êtes actuellement dessus. Ce site est la version fonctionnelle et professionnelle de mon portfolio. Il est né d’un besoin simple : présenter clairement qui je suis, ce que je fais et comment je travaille, tout en tirant les leçons de mes précédentes expérimentations, notamment le projet « Mon Bureau ».",
      },
      role: {
        title: "Conception & Développement",
        intro:
          "J’ai pensé, designé et développé ce portfolio de A à Z, en partant de ma propre expérience utilisateur : qu’est-ce que j’aimerais voir en tant que recruteur, client ou collaborateur potentiel ?",
        points: [
          {
            title: "Architecture & UX",
            content:
              "J’ai simplifié la structure de navigation par rapport à mes anciens portfolios, pour aller droit au but : projets, profil, contact. L’objectif est de rendre la découverte de mon travail fluide, sans sacrifier la dimension visuelle.",
          },
          {
            title: "Direction artistique du site",
            content:
              "J’ai défini une identité visuelle sobre mais marquée (couleurs, typographies, rythme des sections) afin de laisser la place aux projets tout en affirmant mon univers graphique.",
          },
          {
            title: "Tech stack (React + TypeScript)",
            content:
              "J’ai développé le site entièrement en React avec TypeScript. Cela me permet d’avoir un code structuré, maintenable et évolutif, tout en profitant de composants réutilisables pour les différentes sections du portfolio.",
          },
          {
            title: "Performances & confort de lecture",
            content:
              "J’ai accordé une attention particulière à la lisibilité des textes, au comportement sur différents écrans et au temps de chargement, pour proposer une expérience agréable, que ce soit sur ordinateur ou mobile.",
          },
        ],
      },
      vision: {
        title: "Vision & évolution",
        content:
          "Ce portfolio n’est pas une version figée : je le considère comme un projet vivant. J’y ajoute, j’y ajuste et j’y expérimente au fil de mes nouveaux projets. C’est à la fois une vitrine professionnelle et un espace de test pour mes idées en web-design et en développement front-end.",
      },
      competencesDemontrees: {
        title: "Compétences démontrées",
        content:
          "Conception d’interface orientée utilisateur, web-design, développement front-end avec React et TypeScript, structuration d’un portfolio professionnel, optimisation de l’UX et de la lisibilité, mise en place d’une base technique évolutive pour faire vivre le site dans le temps.",
      },
    },
    gallery: [],
    tags: [
      "Portfolio",
      "React",
      "TypeScript",
      "Front-end",
      "Développement Web",
      "Web-design",
      "UX",
      "UI",
    ],

    categories: ["Programmation", "Web-design"],
  },

  // --- 📸 PHOTOGRAPHIE ---
  {
    id: "album-tir-sportif",
    title: "Album Tir Sportif",
    image: tir9209,
    detailedDescription: {
      context: {
        title: "Démarche",
        content:
          "Un album photo dédié exclusivement à ma pratique du tir sportif. L'objectif est de documenter la discipline avec un regard esthétique et technique.",
      },
    },
    gallery: [
      tir9209,
      tir1798,
      tir1800,
      tir1807,
      tir9116,
      tir9170,
      tir9181,
      tir9201,
      tir9309A,
      tir9309ANB,
      tir9318,
      tir9854,
    ],
    tags: [
      "Photographie",
      "Tir Sportif",
      "Album",
      "Documentation",
      "Esthétique Sportive",
    ],

    categories: ["Photographie"],
  },
  {
    id: "unsorted-pics",
    title: "Unsorted Pics",
    image: picsCover,
    detailedDescription: {
      context: {
        title: "Concept 'Unsorted'",
        content:
          "Série de photos publiées 'sans contexte', brutes ou juste sorties du boîtier. Une démarche spontanée pour capturer l'instant.",
      },
    },
    gallery: [
      picsCover,
      pics0163,
      pics0531,
      pics0853,
      pics0862,
      pics1334,
      pics1598,
      pics2088,
      pics9462,
      pics9469,
      pics9484,
      pics9804,
      pics9810,
      picsMartin,
      picsnouv1n,
      picsnouv2n,
      picsnouv3n,
      picsnouv4n,
      picsnouv5n,
      picsnouv6n,
      picsnouv7n,
      picsnouv1j,
      picsnouv2j,
      picsnouv3j,
      picsnouv4j,
      picsnouv5j,
      picsnouv6j,
      picsnouv7j,
      picsnouv8j,
    ],
    tags: [
      "Photographie",
      "Projet Personnel",
      "Captation Spontanée",
      "Instant",
      "Sans Contexte",
      "Brut",
    ],
    categories: ["Photographie"],
  },
];
