// ================================================== //
// VISER — script.js                                 //
// Interactions du bureau                            //
// ================================================== //

document.addEventListener("DOMContentLoaded", initialiser);

// Capsule note en cours (ID capsule, ex : "outils")
let noteEnCours = null;
// Capsule vidéo en cours (ID capsule, ex : "outils")
let videoEnCours = null;

// ================================================== //
// DONNÉES DES PHOTOS PAR DOSSIER                     //
// ================================================== //
const PHOTOS_PAR_DOSSIER = {
  "outils":       ["assets/photos/a.jpg", "assets/photos/strealtur.jpg"],
  "contraintes":  ["assets/photos/contraintes_01.png", "assets/photos/contraintes_02.png", "assets/photos/contraintes_03.png"],
  "production":   ["assets/photos/maison.jpg", "assets/photos/reve.jpg"],
  "performance":  ["assets/photos/N20.png", "assets/photos/tir.jpg", "assets/photos/b.jpg"],
  "viser-capsule":["assets/photos/viser.jpg"],
  "apres":        ["assets/photos/grandroude.jpg", "assets/photos/abeille.jpg"]
};

// Index de la photo actuellement affichée dans la visionneuse
let photoIndexEnCours = 0;
// Dossier de photos actuellement ouvert
let photoDossierEnCours = null;

// Fenêtre en cours de déplacement
let fenetreEnDrag = null;
let offsetX = 0;
let offsetY = 0;

// Compteur z-index — chaque fenêtre cliquée passe au-dessus
let zIndexMax = 20;

// Variables pour le mode Dreamcore
let timerInactivite;
let timerDeepDreamcore; // <-- NOUVEAU
let intervalGlitchHorloge;
let isDreamcoreActive = false;
// ================================================== //
// SYSTÈME DE SUCCÈS (Moteur + Tracker)               //
// ================================================== //

const LISTE_SUCCES = [
  { id: "demarrage", icone: "💾", titre: "Boot réussi", desc: "Allumer la machine." },
  { id: "fouineur", icone: "📂", titre: "Curiosité", desc: "Explorer l'arborescence." },
  { id: "action_pure", icone: "🎯", titre: "Dans la zone", desc: "L'action terminée sans hésitation." },
  { id: "focus_max", icone: "🗗", titre: "La bulle", desc: "S'isoler pour enfin produire." },
  { id: "silence", icone: "🔇", titre: "Le vide", desc: "Couper le bruit du monde." },
  { id: "paralysie", icone: "👁️", titre: "Le 10 flouté", desc: "Hésiter trop longtemps face à l'écran." },
  { id: "surcharge", icone: "⚠️", titre: "Surcharge", desc: "S'éparpiller dans 4 fenêtres." },
  { id: "apres", icone: "🏁", titre: "Et après ?", desc: "Regarder vers le futur." }
];

let succesDebloques = [];

// Initialise la barre grise avec les 8 points d'interrogation
function initialiserTrackerSucces() {
  let tracker = document.getElementById("tracker-succes");
  if (!tracker) return;
  
  LISTE_SUCCES.forEach(s => {
    let slot = document.createElement("div");
    slot.className = "succes-slot";
    slot.id = "slot-" + s.id;
    
    // Tooltip masqué par défaut avec des "..."
    slot.innerHTML = `
      <span class="icone-slot">❔</span>
      <div class="tooltip-succes"><b>???</b><br>...</div>
    `;
    tracker.appendChild(slot);
  });
}

// Fonction pour débloquer (on a juste besoin de lui donner l'ID maintenant)
function debloquerSucces(id) {
  if (succesDebloques.includes(id)) return;
  
  let data = LISTE_SUCCES.find(s => s.id === id);
  if (!data) return;

  succesDebloques.push(id);

  // 1. Mettre à jour la petite case dans la barre des tâches (couleur + vrai texte)
  let slot = document.getElementById("slot-" + id);
  if (slot) {
    slot.classList.add("debloque");
    slot.innerHTML = `
      <span class="icone-slot">${data.icone}</span>
      <div class="tooltip-succes"><b>${data.titre}</b><br>${data.desc}</div>
    `;
  }

  // 2. Afficher la grosse notification pop-up
  let conteneur = document.getElementById("conteneur-succes");
  if (conteneur) {
    let notif = document.createElement("div");
    notif.classList.add("succes-notification");
    notif.innerHTML = `
      <div class="succes-icon">${data.icone}</div>
      <div class="succes-texte">
        <h4>Succès déverrouillé</h4>
        <p>${data.titre}</p>
        <span>${data.desc}</span>
      </div>
    `;
    conteneur.appendChild(notif);
    setTimeout(() => { if (notif.parentNode) notif.remove(); }, 5000);
  }
}
// ================================================== //
// INITIALISATION                                     //
// ================================================== //

function initialiser() {
  // ================================================== //
  // PRÉPARATION DE L'ÉCRITURE NÉVROSÉE                 //
  // ================================================== //
  let notesTextes = document.querySelectorAll(".fenetre-notepad pre");
  for (let pre of notesTextes) {
    // On ignore le README de l'accueil pour qu'il soit lisible direct
    if (pre.closest("#readme")) continue; 
    
    pre.dataset.texteOriginal = pre.textContent; // Sauvegarde le texte
    pre.textContent = ""; // Vide le bloc pour l'animation
    pre.dataset.dejaTape = "false";
  } // <--- L'ACCOLADE QUI MANQUAIT EST ICI !

  // ================================================== //
  // SÉQUENCE DE DÉMARRAGE BIOS                         //
  // ================================================== //
  initialiserTrackerSucces();
  
  let bootScreen = document.getElementById("boot-screen");
  if (bootScreen) {
    // Apparition ligne par ligne
    setTimeout(() => { document.getElementById("boot-1").style.display = "block"; }, 600);
    setTimeout(() => { document.getElementById("boot-2").style.display = "block"; }, 1400);
    setTimeout(() => { document.getElementById("boot-3").style.display = "block"; }, 2000);
    
    // Disparition de l'écran noir
    setTimeout(() => {
      bootScreen.style.opacity = "0"; // Lance le fondu CSS
      
      // Après le fondu, on supprime carrément l'écran du HTML pour pouvoir cliquer en dessous
      setTimeout(() => { 
        bootScreen.remove(); 
        
        // --- NOUVEAU : CENTRER ET OUVRIR LE README ---
        let readme = document.getElementById("readme");
        if (readme) {
          // On enlève temporairement "cachee" pour que le navigateur puisse mesurer sa taille
          readme.classList.remove("cachee"); 
          
          let largeurEcran = window.innerWidth;
          let hauteurEcran = window.innerHeight;
          let largeurFenetre = readme.offsetWidth;
          let hauteurFenetre = readme.offsetHeight;
          
          // Calcul du centre exact (moins la hauteur de la barre de navigation)
          let posX = (largeurEcran - largeurFenetre) / 2;
          let posY = (hauteurEcran - hauteurFenetre) / 2;
          
          readme.style.left = posX + "px";
          readme.style.top = posY + "px";
          
          // On l'enregistre officiellement dans la barre des tâches
          ouvrirFenetre("readme");
        }
        // ---------------------------------------------

      }, 500); 
    }, 2800); // L'écran de démarrage dure 2,8 secondes au total
    
    debloquerSucces("demarrage");
  }
  // Attention de bien avoir supprimé l'ancienne accolade "}" qui traînait ici !

  // ================================================== //
  // ICÔNES DU BUREAU (Sélection et Ouverture)          //
  // ================================================== //
  let icones = document.querySelectorAll(".icone");
  for (let icone of icones) {
    
    // 1. Simple clic : Sélectionner l'icône
    icone.addEventListener("click", function(evt) {
      evt.stopPropagation(); 
      for (let i of icones) i.classList.remove("selectionne");
      icone.classList.add("selectionne");
    });

    // 2. Double-clic : Ouvrir la fenêtre
    icone.addEventListener("dblclick", function(evt) {
      evt.stopPropagation();
      let cible = icone.dataset.cible;
      if (cible) {
        ouvrirFenetre(cible);
        icone.classList.remove("selectionne");
      } else {
        console.error("Aucune cible trouvée pour cette icône :", icone);
      }
    });
  }

  // 3. Clic dans le vide sur le bureau : Tout désélectionner
  document.getElementById("bureau").addEventListener("click", function(evt) {
    // Si on clique directement sur l'arrière-plan (et pas sur une fenêtre)
    if (evt.target.id === "bureau" || evt.target.id === "fond-video" || evt.target.id === "icones-bureau") {
      for (let icone of icones) icone.classList.remove("selectionne");
    }
  });

  // Bouton fermer (✕) — comportement selon le type de fenêtre
  let btnsFermer = document.querySelectorAll(".btn-fermer");
  for (let btn of btnsFermer) {
    btn.addEventListener("click", function(evt) {
      // On cherche automatiquement la fenêtre parente (plus besoin du data-cible)
      let el = evt.target.closest(".fenetre");
      if (!el) return;
      
      let id = el.id; // On récupère le vrai ID de la fenêtre (ex: "readme")

      if (el.classList.contains("capsule-fenetre")) {
        if (el.classList.contains("capsule-video")) {
          // Fenêtre vidéo capsule : stopper la vidéo avant de fermer
          reinitialiserVideo(el);
          videoEnCours = null;
        } else {
          // Fenêtre note capsule
          noteEnCours = null;
        }
        fermerFenetre(id);
      } else {
        // Fenêtre normale (readme, viser-exe, explorateur)
        fermerFenetre(id);
      }
    });
  }

  // Clic sur un fichier dans l'explorateur
  // data-cible = ID de la capsule, data-type = "note" ou "video"
  let fichiers = document.querySelectorAll(".fichier");
  for (let fichier of fichiers) {
    fichier.addEventListener("click", function() {
      
      // NOUVEAU : Si on a cliqué sur un fichier du panneau gauche, on le met en surbrillance
      if (fichier.closest(".explorateur-arborescence")) {
        // On retire la classe 'actif' de TOUS les dossiers et fichiers de gauche
        let tous = document.querySelectorAll(".explorateur-arborescence .dossier, .explorateur-arborescence .fichier");
        for (let el of tous) el.classList.remove("actif");
        // On met le fichier actuel en surbrillance
        fichier.classList.add("actif");
      }

      chargerCapsule(fichier.dataset.cible, fichier.dataset.type, fichier.dataset.index);
    });
  } 

  // ================================================== //
  // INTERACTIONS EXPLORATEUR                           //
  // ================================================== //

  // Clic sur un dossier de l'arborescence (Gauche)
  let dossiers = document.querySelectorAll(".explorateur-arborescence .dossier");
  for (let dossier of dossiers) {
    dossier.addEventListener("click", function() {
      
      // On vérifie si on clique sur un dossier qui était DÉJÀ sélectionné
      let etaitDejaActif = dossier.classList.contains("actif");
      let contenu = dossier.nextElementSibling; // Le bloc des fichiers juste en dessous

      // NOUVEAU : On retire la classe 'actif' de TOUS les dossiers et fichiers de gauche
      let tous = document.querySelectorAll(".explorateur-arborescence .dossier, .explorateur-arborescence .fichier");
      for (let el of tous) el.classList.remove("actif");
      
      // On active le dossier cliqué
      dossier.classList.add("actif");

      // Gestion de l'accordéon (déplier / plier)
      if (contenu && contenu.classList.contains("contenu-arbo")) {
        let icon = dossier.querySelector(".icon-dossier");
        
        if (etaitDejaActif) {
          // Si c'était déjà le dossier actif, on l'utilise pour plier/déplier l'arborescence
          let estFerme = contenu.classList.toggle("cachee");
          if (icon) icon.textContent = estFerme ? "📁" : "📂";
        } else {
          // Si c'est un nouveau dossier sur lequel on arrive, on force son ouverture
          contenu.classList.remove("cachee");
          if (icon) icon.textContent = "📂";
        }
      }
      
      // Met à jour le grand panneau de droite
      filtrerFichiers(dossier.dataset.dossier);
    });
  }

  // Clic sur un dossier dans le panneau d'affichage (Droite)
  let dossiersDroit = document.querySelectorAll(".dossier-droit");
  for (let d of dossiersDroit) {
    d.addEventListener("click", function() {
      let cible = d.dataset.dossierCible;
      // On cherche le dossier correspondant à gauche et on simule un clic dessus
      // Ça permet de garder l'arborescence toujours synchronisée
      let dossierGauche = document.querySelector(".explorateur-arborescence .dossier[data-dossier='" + cible + "']");
      if (dossierGauche) dossierGauche.click();
    });
  }

  // On force l'affichage du dossier racine au chargement de la page
  filtrerFichiers("viser");
  

  // Drag — mousedown sur la barre de titre
  let titres = document.querySelectorAll(".fenetre-titre");
  for (let titre of titres) {
    titre.addEventListener("mousedown", function(evt) {
      // Ne pas activer le drag si on clique sur le bouton fermer
      if (evt.target.tagName === "BUTTON") return;
      fenetreEnDrag = titre.parentElement;
      offsetX = evt.clientX - fenetreEnDrag.offsetLeft;
      offsetY = evt.clientY - fenetreEnDrag.offsetTop;
      mettreAuPremierPlan(fenetreEnDrag);
      evt.preventDefault();
    });
  }

  document.addEventListener("mousemove", deplacerFenetre);
  document.addEventListener("mouseup", arreterDrag);

  // Clic sur n'importe quelle fenêtre → passe au premier plan
  let fenetres = document.querySelectorAll(".fenetre");
  for (let fenetre of fenetres) {
    fenetre.addEventListener("mousedown", function() {
      mettreAuPremierPlan(fenetre);
    });
  }

  // Initialiser les lecteurs vidéo custom
  // Cibles : fenêtres capsule-video + viser.exe (classe avec-lecteur-video)
  let lecteurs = document.querySelectorAll(".capsule-video, .avec-lecteur-video");
  for (let lecteur of lecteurs) {
    initialiserLecteurVideo(lecteur);
  }

 
  // ================================================== //
  // NAVIGATION TASKBAR (Mobile Menu)                   //
  // ================================================== //
  let btnMenuMobile = document.getElementById("btn-menu-mobile");
  let menuMobileDropdown = document.getElementById("menu-mobile-dropdown");

  if (btnMenuMobile && menuMobileDropdown) {
    btnMenuMobile.addEventListener("click", function() {
      // Toggle de la classe pour afficher/masquer le menu
      let estOuvert = menuMobileDropdown.classList.toggle("menu-mobile-cache") === false;
      
      // Mise à jour de l'icône
      btnMenuMobile.textContent = estOuvert ? "✕" : "≡";
    });

    // Fermer le menu si on clique sur un lien (comportement onClick={() => setOpen(false)})
    let liensMobiles = menuMobileDropdown.querySelectorAll(".mobile-link");
    for(let lien of liensMobiles) {
      lien.addEventListener("click", function() {
        menuMobileDropdown.classList.add("menu-mobile-cache");
        btnMenuMobile.textContent = "≡";
      });
    }
  }
  // ================================================== //
  // FAUX MENU DÉMARRER "ET APRÈS ?"                    //
  // ================================================== //
  let btnDemarrer = document.getElementById("btn-demarrer");
  let menuDemarrer = document.getElementById("menu-demarrer");
  
  if (btnDemarrer && menuDemarrer) {
    btnDemarrer.addEventListener("click", function(evt) {
      evt.stopPropagation();
      menuDemarrer.classList.toggle("cachee");
      btnDemarrer.classList.toggle("actif");
    });

    // Fermer le menu si on clique ailleurs sur l'écran
    document.addEventListener("click", function(evt) {
      if (!menuDemarrer.contains(evt.target) && !btnDemarrer.contains(evt.target)) {
        menuDemarrer.classList.add("cachee");
        btnDemarrer.classList.remove("actif");
      }
    });
  }

  // ================================================== //
  // GESTION DES RÊVES ET POP-UP D'ERREUR               //
  // ================================================== //
  let itemsRêve = document.querySelectorAll(".menu-item-dream");
  let popupErreur = document.getElementById("popup-erreur");
  let btnsFermerPopup = document.querySelectorAll(".btn-fermer-popup, .btn-ok-popup");

  for (let item of itemsRêve) {
    item.addEventListener("click", function() {
      // 1. On referme le menu Démarrer proprement
      menuDemarrer.classList.add("cachee");
      btnDemarrer.classList.remove("actif");

      // 2. On affiche l'erreur en plein milieu de l'écran
      if (popupErreur) {
        popupErreur.classList.remove("cachee");
        mettreAuPremierPlan(popupErreur);
      }
    });
  }

  // Fermer la pop-up avec le X ou le bouton OK
  for (let btn of btnsFermerPopup) {
    btn.addEventListener("click", function() {
      if (popupErreur) {
        popupErreur.classList.add("cachee");
      }
    });
  }

// ================================================== //
  // BOUTON : MINIMISER (_)                             //
  // ================================================== //
  let btnsMinimiser = document.querySelectorAll(".btn-minimiser");
  for (let btn of btnsMinimiser) {
    btn.addEventListener("click", function(evt) {
      // On cherche automatiquement la fenêtre parente
      let fenetre = evt.target.closest(".fenetre");
      
      if (fenetre) {
        let id = fenetre.id; // On récupère le vrai ID
        
        // 1. On cache la fenêtre
        fenetre.classList.add("cachee");
        
        // 2. On indique à la barre des tâches que la fenêtre est minimisée
        let btnTaskbar = document.querySelector("#barre-taches [data-fenetre='" + id + "']");
        if (btnTaskbar) {
          btnTaskbar.dataset.minimisee = "true";
          btnTaskbar.classList.add("btn-taskbar-minimise");
        }
      }
    });
  }

  // ================================================== //
  // BOUTON : AGRANDIR (□)                              //
  // ================================================== //
  let btnsAgrandir = document.querySelectorAll(".btn-agrandir");
  for (let btn of btnsAgrandir) {
    btn.addEventListener("click", function(evt) {
      let fenetre = evt.target.closest(".fenetre");
      if (fenetre) {
        fenetre.classList.toggle("maximized");
        
        // DÉCLENCHEUR DE SUCCÈS (si on agrandit)
        if (fenetre.classList.contains("maximized")) {
          debloquerSucces("focus_max", "🗗", "La bulle", "S'isoler du reste pour enfin produire.");
        }
      }
    });
  }

  // À la toute fin de la fonction initialiser()
  filtrerFichiers("viser");

  // Initialiser la visionneuse d'images
  initVisionneuse();


  // ================================================== //
  // LA BARRE D'ÉTAT QUI PENSE (Voix intérieure)        //
  // ================================================== //
  let elementsDroit = document.querySelectorAll(".explorateur-fichiers .dossier-droit, .explorateur-fichiers .fichier");
  let barreEtat = document.querySelector(".barre-etat");
  
  // Tes pensées intimes liées à chaque élément
  let pensees = {
    "outils": "J'ai tous les outils, il manque juste le déclic...",
    "contraintes": "Sans cette prison, je ne ferais rien.",
    "production": "Ce n'est pas encore parfait. Je ne le sors pas.",
    "performance": "Le seul moment où mon cerveau s'éteint.",
    "viser-cap": "Fixer le centre trop longtemps finit par le flouter.",
    "apres": "Et maintenant, on fait quoi ?"
  };

  for (let el of elementsDroit) {
    el.addEventListener("mouseenter", function() {
      // On cherche si on a une pensée pour ce dossier ou fichier
      let cle = el.dataset.dossierCible || el.dataset.cible;
      if (pensees[cle]) {
        barreEtat.textContent = pensees[cle];
        barreEtat.style.fontStyle = "italic";
        barreEtat.style.color = "#555"; // Gris un peu plus sombre
      }
    });

    el.addEventListener("mouseleave", function() {
      // Retour à la normale
      barreEtat.textContent = "12 objet(s)";
      barreEtat.style.fontStyle = "normal";
      barreEtat.style.color = "var(--color-win-dark)";
    });
  }

  // DÉCLENCHEUR : PARALYSIE (Le 10 flouté)
  // Reste immobile 5 secondes sur une note texte
  let blocsTexte = document.querySelectorAll(".fenetre-notepad");
  let timeoutParalysie;
  
  for (let note of blocsTexte) {
    note.addEventListener("mousemove", function() {
      // Si on bouge, on annule le chrono
      clearTimeout(timeoutParalysie);
      // On relance le chrono de 5 secondes
      timeoutParalysie = setTimeout(() => {
        debloquerSucces("paralysie");
      }, 5000);
    });

    note.addEventListener("mouseleave", function() {
      // Si on sort de la fenêtre, on annule tout
      clearTimeout(timeoutParalysie);
    });
  }
// ================================================== //
  // LECTEUR FICTION SONORE                             //
  // ================================================== //
  let audioFiction = document.querySelector("#audio-fiction");
  let btnPlayFiction = document.querySelector("#btn-play-fiction");
  let btnStopFiction = document.querySelector("#btn-stop-fiction");
  let barreFiction = document.querySelector("#barre-fiction");
  let cursorFiction = document.querySelector("#cursor-fiction");
  let tempsFiction = document.querySelector("#temps-fiction");

  // SÉCURITÉ : On vérifie que les éléments existent dans le HTML avant d'agir
  if (btnPlayFiction && audioFiction) {
    
    btnPlayFiction.addEventListener("click", function() {
      if (audioFiction.paused) {
        audioFiction.play();
        btnPlayFiction.textContent = "⏸";
      } else {
        audioFiction.pause();
        btnPlayFiction.textContent = "▶";
      }
    });

    btnStopFiction.addEventListener("click", function() {
      audioFiction.pause();
      audioFiction.currentTime = 0;
      btnPlayFiction.textContent = "▶";
    });

    audioFiction.addEventListener("timeupdate", function() {
      if (!audioFiction.duration) return;
      let pct = (audioFiction.currentTime / audioFiction.duration) * 100;
      cursorFiction.style.width = pct + "%";
      let min = Math.floor(audioFiction.currentTime / 60);
      let sec = Math.floor(audioFiction.currentTime % 60);
      tempsFiction.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
    });

    barreFiction.addEventListener("click", function(evt) {
      if (!audioFiction.duration) return;
      let rect = barreFiction.getBoundingClientRect();
      audioFiction.currentTime = ((evt.clientX - rect.left) / rect.width) * audioFiction.duration;
    });
    // Gestion du volume de la fiction sonore
    let volumeFiction = document.querySelector("#volume-fiction");
    if (volumeFiction) {
      volumeFiction.addEventListener("input", function() {
        audioFiction.volume = this.value;
      });
    }
    barreFiction.addEventListener("click", function(evt) {
      if (!audioFiction.duration) return;
      let rect = barreFiction.getBoundingClientRect();
      audioFiction.currentTime = ((evt.clientX - rect.left) / rect.width) * audioFiction.duration;
    });

    // --- NOUVEAU : La fiction sonore protège du cauchemar ---
    audioFiction.addEventListener("play", reinitialiserInactivite);
    audioFiction.addEventListener("pause", reinitialiserInactivite);
    audioFiction.addEventListener("ended", reinitialiserInactivite);
  
  }
}


// ================================================== //
// FENÊTRES                                           //
// ================================================== //

// Ouvrir une fenêtre et créer/réactiver son bouton dans la taskbar
function ouvrirFenetre(idFenetre) {
  let fenetre = document.querySelector("#" + idFenetre);
  if (!fenetre) return;

  fenetre.classList.remove("cachee");
  mettreAuPremierPlan(fenetre);

  // --- DÉCLENCHEUR DE L'ÉCRITURE NÉVROSÉE ---
  let pre = fenetre.querySelector(".fenetre-notepad pre");
  if (pre && pre.dataset.dejaTape === "false") {
    pre.dataset.dejaTape = "true"; // Pour ne le faire qu'une seule fois
    lancerEcritureNevrosee(pre, pre.dataset.texteOriginal);
  }
  // ------------------------------------------

  // NOUVEAUX DÉCLENCHEURS (Succès)
  if (idFenetre === "explorateur") debloquerSucces("fouineur");
  /* ... le reste de ta fonction reste identique ... */
  if (idFenetre === "apres-note" || idFenetre === "apres-video") debloquerSucces("apres");
  
  let ouvertes = document.querySelectorAll(".fenetre:not(.cachee)");
  if (ouvertes.length >= 4) debloquerSucces("surcharge");

  // Taskbar : créer le bouton ou réactiver si la fenêtre était minimisée
  let barre = document.querySelector("#barre-taches");
  let btnExistant = barre.querySelector("[data-fenetre='" + idFenetre + "']");

  if (btnExistant) {
    // Fenêtre restaurée depuis la taskbar
    btnExistant.dataset.minimisee = "false";
    btnExistant.classList.remove("btn-taskbar-minimise");
  } else {
    // Nouvelle fenêtre — créer son bouton
    creerBoutonTaskbar(idFenetre);
  }
}

// Fermer une fenêtre et supprimer son bouton de la taskbar
function fermerFenetre(idFenetre) {
  let fenetre = document.querySelector("#" + idFenetre);
  if (!fenetre) return;
  fenetre.classList.add("cachee");
  supprimerBoutonTaskbar(idFenetre);
}

// Mettre une fenêtre au premier plan via z-index et gérer les couleurs des barres de titre
function mettreAuPremierPlan(fenetreActive) {
  zIndexMax++;
  fenetreActive.style.zIndex = zIndexMax;

  // Parcourir toutes les fenêtres pour mettre à jour la barre de titre
  let toutesLesFenetres = document.querySelectorAll(".fenetre");
  for (let fen of toutesLesFenetres) {
    let barreTitre = fen.querySelector(".win95-titlebar");
    if (barreTitre) {
      if (fen === fenetreActive) {
        // C'est la fenêtre active : la barre devient bleue
        barreTitre.classList.remove("inactive");
      } else {
        // C'est une fenêtre en arrière-plan : la barre devient grise
        barreTitre.classList.add("inactive");
      }
    }
  }
}


// ================================================== //
// CAPSULES                                           //
// ================================================== //

// Ouvre une fenêtre de capsule selon le type ("note", "video" ou "photo")
// Ferme automatiquement la fenêtre précédente du même type
function chargerCapsule(idCapsule, type, index) {
  let idFenetre = idCapsule + "-" + type;

  if (type === "note") {
    // Si c'est la même capsule → juste restaurer/focus
    if (noteEnCours === idCapsule) {
      ouvrirFenetre(idFenetre);
      return;
    }
    // Fermer la note précédente si elle était ouverte
    if (noteEnCours !== null) {
      fermerFenetre(noteEnCours + "-note");
    }
    noteEnCours = idCapsule;
    ouvrirFenetre(idFenetre);

  } else if (type === "video") {
    // Si c'est la même capsule → juste restaurer/focus
    if (videoEnCours === idCapsule) {
      ouvrirFenetre(idFenetre);
      return;
    }
    // Stopper et fermer la vidéo précédente
    if (videoEnCours !== null) {
      let ancienLecteur = document.querySelector("#" + videoEnCours + "-video");
      if (ancienLecteur) reinitialiserVideo(ancienLecteur);
      fermerFenetre(videoEnCours + "-video");
    }
    videoEnCours = idCapsule;
    ouvrirFenetre(idFenetre);

  } else if (type === "photo") {
    // Ouvre la visionneuse sur la photo cliquée
    let idx = (index !== undefined) ? parseInt(index) : 0;
    ouvrirVisionneuse(idCapsule, idx);
  }
}

// Stoppe la vidéo et remet les contrôles à zéro
function reinitialiserVideo(lecteur) {
  let videoEl = lecteur.querySelector("video");
  if (videoEl) {
    videoEl.pause();
    videoEl.currentTime = 0;
  }
  let btnPlay = lecteur.querySelector(".btn-play-video");
  if (btnPlay) btnPlay.textContent = "▶";
  let cursor = lecteur.querySelector(".progression-cursor");
  if (cursor) cursor.style.width = "0%";
  let temps = lecteur.querySelector(".temps-video");
  if (temps) temps.textContent = "0:00";
}


// ================================================== //
// VISIONNEUSE D'IMAGES WIN95                         //
// ================================================== //

function ouvrirVisionneuse(idCapsule, index) {
  let photos = PHOTOS_PAR_DOSSIER[idCapsule];
  if (!photos || photos.length === 0) return;

  photoIndexEnCours = Math.max(0, Math.min(index, photos.length - 1));
  photoDossierEnCours = idCapsule;

  afficherPhotoVisionneuse();

  // Ouvrir la fenêtre
  let visionneuse = document.getElementById("visionneuse");
  if (visionneuse) {
    visionneuse.classList.remove("cachee");
    mettreAuPremierPlan(visionneuse);

    // Créer/réactiver le bouton taskbar
    let barre = document.querySelector("#barre-taches");
    let btnExistant = barre.querySelector("[data-fenetre='visionneuse']");
    if (btnExistant) {
      btnExistant.dataset.minimisee = "false";
      btnExistant.classList.remove("btn-taskbar-minimise");
    } else {
      creerBoutonTaskbar("visionneuse");
    }
  }
}

function afficherPhotoVisionneuse() {
  let photos = PHOTOS_PAR_DOSSIER[photoDossierEnCours];
  if (!photos) return;

  let img = document.getElementById("visionneuse-img");
  let titre = document.getElementById("visionneuse-titre");
  let compteur = document.getElementById("visionneuse-compteur");
  let btnPrev = document.getElementById("btn-photo-prev");
  let btnNext = document.getElementById("btn-photo-next");

  if (!img) return;

  let src = photos[photoIndexEnCours];
  img.src = src;

  // Titre = nom du fichier (dernier segment du path)
  let nomFichier = src.split("/").pop();
  if (titre) titre.textContent = nomFichier + " — Visionneuse d'images";

  // Compteur "2 / 3"
  if (compteur) compteur.textContent = (photoIndexEnCours + 1) + " / " + photos.length;

  // Afficher/masquer les boutons selon la position
  if (btnPrev) btnPrev.disabled = (photoIndexEnCours === 0);
  if (btnNext) btnNext.disabled = (photoIndexEnCours === photos.length - 1);
}

function initVisionneuse() {
  let btnPrev = document.getElementById("btn-photo-prev");
  let btnNext = document.getElementById("btn-photo-next");

  if (btnPrev) {
    btnPrev.addEventListener("click", function() {
      if (photoDossierEnCours && photoIndexEnCours > 0) {
        photoIndexEnCours--;
        afficherPhotoVisionneuse();
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", function() {
      let photos = PHOTOS_PAR_DOSSIER[photoDossierEnCours];
      if (photoDossierEnCours && photos && photoIndexEnCours < photos.length - 1) {
        photoIndexEnCours++;
        afficherPhotoVisionneuse();
      }
    });
  }
}



// Filtre les éléments du panneau droit et met à jour l'adresse
function filtrerFichiers(dossierActif) {
  // On sélectionne tout le contenu dynamique du panneau droit
  let elementsDroit = document.querySelectorAll(".explorateur-fichiers .fichier, .explorateur-fichiers .dossier-droit");
  
  for (let el of elementsDroit) {
    if (el.dataset.dossier === dossierActif) {
      el.classList.remove("cachee");
    } else {
      el.classList.add("cachee");
    }
  }
  
  // Mise à jour de la barre d'adresse texte
  let champAdresse = document.querySelector(".champ-adresse");
  if (champAdresse) {
    if (dossierActif === "viser") {
      champAdresse.textContent = "C:\\viser\\";
    } else {
      champAdresse.textContent = "C:\\viser\\" + dossierActif + "\\";
    }
  }
}


// ================================================== //
// DRAG — déplacer les fenêtres                       //
// ================================================== //

function deplacerFenetre(evt) {
  if (fenetreEnDrag === null) return;
  let x = evt.clientX - offsetX;
  let y = evt.clientY - offsetY;
  // Empêcher de sortir sous la nav (40px) et au-dessus de la taskbar
  if (x < 0) x = 0;
  if (y < 40) y = 40;
  fenetreEnDrag.style.left = x + "px";
  fenetreEnDrag.style.top = y + "px";
}

function arreterDrag() {
  fenetreEnDrag = null;
}


// ================================================== //
// LECTEUR VIDÉO CUSTOM WIN95                         //
// ================================================== //

// ================================================== //
// LECTEUR VIDÉO CUSTOM WIN95                         //
// ================================================== //

function initialiserLecteurVideo(lecteur) {
  let video = lecteur.querySelector("video");
  let btnPlay = lecteur.querySelector(".btn-play-video");
  let btnStop = lecteur.querySelector(".btn-stop-video");
  let barreProgression = lecteur.querySelector(".barre-progression");
  let cursor = lecteur.querySelector(".progression-cursor");
  let tempsAffiche = lecteur.querySelector(".temps-video");

  if (!video || !btnPlay) return;

  // Play / Pause
  btnPlay.addEventListener("click", function() {
    if (video.paused) {
      video.play();
      btnPlay.textContent = "⏸";
    } else {
      video.pause();
      btnPlay.textContent = "▶";
    }
  });

  // Stop — remet au début
  btnStop.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
    btnPlay.textContent = "▶";
  });

  // Mise à jour de la progression pendant la lecture
  video.addEventListener("timeupdate", function() {
    if (!video.duration) return;
    let pct = (video.currentTime / video.duration) * 100;
    cursor.style.width = pct + "%";
    let min = Math.floor(video.currentTime / 60);
    let sec = Math.floor(video.currentTime % 60);
    tempsAffiche.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
  });

  // Volume
  let sliderVolume = lecteur.querySelector(".volume-video");
  if (sliderVolume) {
    sliderVolume.addEventListener("input", function() {
      video.volume = this.value;
    });
  }

  // Plein écran
  let btnFullscreen = lecteur.querySelector(".btn-fullscreen");
  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", function() {
      if (video.requestFullscreen) video.requestFullscreen();
    });
  }

  // Clic sur la barre pour se déplacer dans la vidéo
  barreProgression.addEventListener("click", function(evt) {
    if (!video.duration) return;
    let rect = barreProgression.getBoundingClientRect();
    let pct = (evt.clientX - rect.left) / rect.width;
    video.currentTime = pct * video.duration;
  });

  // --- GESTION DU MODE VISEUR & INACTIVITÉ ---
  let fenetreParente = lecteur.closest('.fenetre'); // On identifie à quelle fenêtre appartient ce lecteur

  video.addEventListener("play", function() {
    // La vidéo se lance : on isole l'utilisateur
    document.body.classList.add("mode-viseur");
    if (fenetreParente) fenetreParente.classList.add("fenetre-video-active");
    reinitialiserInactivite();
  });

  video.addEventListener("pause", function() {
    // La vidéo est en pause : retour de la lumière
    document.body.classList.remove("mode-viseur");
    if (fenetreParente) fenetreParente.classList.remove("fenetre-video-active");
    reinitialiserInactivite();
  });

  // Fin de lecture — réinitialiser
  video.addEventListener("ended", function() {
    btnPlay.textContent = "▶";
    cursor.style.width = "0%";
    tempsAffiche.textContent = "0:00";
    
    // Fin de vidéo : retour de la lumière
    document.body.classList.remove("mode-viseur");
    if (fenetreParente) fenetreParente.classList.remove("fenetre-video-active");
    
    // DÉCLENCHEUR DE SUCCÈS
    debloquerSucces("action_pure", "🎯", "Dans la zone", "L'action est terminée, aucune hésitation.");
    
    reinitialiserInactivite();
  });
}

// ================================================== //
// AUDIO AMBIANCE                                     //
// ================================================== //

function toggleAudio() {
  let audio = document.querySelector("#audio-ambiance");
  let btn = document.querySelector("#btn-audio");
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
    debloquerSucces("silence"); // <-- NOUVEAU DÉCLENCHEUR
  }
}


// ================================================== //
// BARRE DES TÂCHES                                   //
// ================================================== //

// Créer un bouton dans la taskbar pour la fenêtre qui vient d'ouvrir
function creerBoutonTaskbar(idFenetre) {
  // CORRECTION ICI : on cible la bonne zone centrale !
  let barre = document.querySelector("#taskbar-fenetres"); 
  let fenetre = document.querySelector("#" + idFenetre);

  let iconesSrc = {
    "readme": "assets/file.png",
    "viser-exe": "assets/film.png",
    "explorateur": "assets/folder.png",
    "fiction-sonore": "assets/audio.png",
    "visionneuse": "assets/image.png",
    "outils-note": "assets/file.png", "outils-video": "assets/film.png",
    "contraintes-note": "assets/file.png", "contraintes-video": "assets/film.png",
    "production-note": "assets/file.png", "production-video": "assets/film.png",
    "performance-note": "assets/file.png", "performance-video": "assets/film.png",
    "viser-capsule-note": "assets/file.png", "viser-capsule-video": "assets/film.png",
    "apres-note": "assets/file.png", "apres-video": "assets/film.png"
  };

  let src = iconesSrc[idFenetre] || "assets/file.png";

  let btn = document.createElement("button");
  btn.classList.add("btn-taskbar");
  btn.dataset.fenetre = idFenetre;
  btn.dataset.minimisee = "false";

  let img = document.createElement("img");
  img.src = src;
  img.alt = idFenetre;
  img.style.width = "20px";
  img.style.height = "20px";
  img.style.imageRendering = "pixelated";
  btn.appendChild(img);

  btn.addEventListener("click", function() {
    let fen = document.querySelector("#" + idFenetre);
    if (btn.dataset.minimisee === "false") {
      fen.classList.add("cachee");
      btn.dataset.minimisee = "true";
      btn.classList.add("btn-taskbar-minimise");
    } else {
      fen.classList.remove("cachee");
      btn.dataset.minimisee = "false";
      btn.classList.remove("btn-taskbar-minimise");
      mettreAuPremierPlan(fen);
    }
  });

  barre.appendChild(btn);
}

// Supprimer le bouton d'une fenêtre fermée (pas minimisée)
function supprimerBoutonTaskbar(idFenetre) {
  let barre = document.querySelector("#taskbar-fenetres");
  let btn = barre.querySelector("[data-fenetre='" + idFenetre + "']");
  if (btn) btn.remove();
}
// ================================================== //
// HORLOGE SYSTEM TRAY                                //
// ================================================== //
function mettreAJourHorloge() {
  // NOUVEAU : On empêche l'heure normale de s'afficher si on est en plein glitch
  if (typeof isDreamcoreActive !== 'undefined' && isDreamcoreActive) return;

  let elementHorloge = document.getElementById("horloge-win95");
  if (!elementHorloge) return;
  
  let maintenant = new Date();
  let heures = maintenant.getHours().toString().padStart(2, '0');
  let minutes = maintenant.getMinutes().toString().padStart(2, '0');
  
  elementHorloge.textContent = heures + ":" + minutes;
}

// Lancer l'horloge une première fois, puis l'actualiser toutes les secondes
setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge();

// ================================================== //
// ANIMATION : L'ÉCRITURE NÉVROSÉE (Machine à écrire) //
// ================================================== //

// ⚙️ RÉGLAGES DE L'ANIMATION (Joue avec ces valeurs !)
const CONFIG_ECRITURE = {
  vitesseFrappeMin: 10,        // Vitesse minimum entre chaque lettre (en ms)
  vitesseFrappeMax: 20,       // Vitesse maximum (plus c'est bas, plus c'est rapide)
  probabiliteDoute: 0.10,     // 0.05 = 5% de chance de douter sur un mot (avant on était à 0.15)
  longueurMotMin: 4,          // Ne doute que sur les mots de plus de 4 lettres
  pauseAvantEffacerMin: 400,  // Temps d'arrêt avant d'effacer (en ms)
  pauseAvantEffacerMax: 800,
  vitesseEffacement: 5,      // Vitesse pour effacer une lettre (très rapide)
  pauseAvantReprise: 200      // Petite pause avant de retaper le mot
};

async function lancerEcritureNevrosee(element, texte) {
  element.classList.add("ecriture-en-cours");
  element.textContent = "";
  
  let mots = texte.split(/( |\n)/);
  
  for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    
    // 1. Frappe normale du mot
    for (let j = 0; j < mot.length; j++) {
      element.textContent += mot[j];
      let delai = CONFIG_ECRITURE.vitesseFrappeMin + Math.random() * (CONFIG_ECRITURE.vitesseFrappeMax - CONFIG_ECRITURE.vitesseFrappeMin);
      await new Promise(r => setTimeout(r, delai)); 
    }
    
    // 2. La Névrose : on utilise les variables de configuration
    if (mot.trim().length >= CONFIG_ECRITURE.longueurMotMin && Math.random() < CONFIG_ECRITURE.probabiliteDoute) {
      
      // Hésitation
      let pauseHesitation = CONFIG_ECRITURE.pauseAvantEffacerMin + Math.random() * (CONFIG_ECRITURE.pauseAvantEffacerMax - CONFIG_ECRITURE.pauseAvantEffacerMin);
      await new Promise(r => setTimeout(r, pauseHesitation));
      
      // Effacement
      for (let j = 0; j < mot.length; j++) {
        element.textContent = element.textContent.slice(0, -1);
        await new Promise(r => setTimeout(r, CONFIG_ECRITURE.vitesseEffacement));
      }
      
      // Reprise
      await new Promise(r => setTimeout(r, CONFIG_ECRITURE.pauseAvantReprise));
      
      // Réécriture
      for (let j = 0; j < mot.length; j++) {
        element.textContent += mot[j];
        let delai = CONFIG_ECRITURE.vitesseFrappeMin + Math.random() * (CONFIG_ECRITURE.vitesseFrappeMax - CONFIG_ECRITURE.vitesseFrappeMin);
        await new Promise(r => setTimeout(r, delai));
      }
    }
  }
  
  setTimeout(() => {
    element.classList.remove("ecriture-en-cours");
  }, 3000);
}
// ================================================== //
// ATMOSPHÈRE DREAMCORE & SOURIS FANTÔME              //
// ================================================== //

// --- GESTION DE LA SOURIS FANTÔME ---
const curseurFantome = document.getElementById('curseur-fantome');

// La fausse souris suit les vrais mouvements
document.addEventListener('mousemove', (e) => {
  if (curseurFantome) {
    curseurFantome.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  }
});

// Gérer l'icône du doigt qui clique (Hover)
document.addEventListener('mouseover', (e) => {
  if (!curseurFantome) return;
  // Si on survole un élément cliquable, on met la classe 'pointer'
  if (e.target.closest('a, button, .icone, .dossier, .fichier, input[type="range"], .titlebar-controls button')) {
    curseurFantome.classList.add('pointer');
  } else {
    curseurFantome.classList.remove('pointer');
  }
});


// --- GESTION DE L'INACTIVITÉ (DREAMCORE) ---

// Temps avant que l'OS ne commence à "rêver" (3 secondes au lieu de 15)
const TEMPS_AVANT_DREAMCORE = 7000; 

function reinitialiserInactivite() {
  if (isDreamcoreActive) {
    stopperDreamcore();
  }
  
  clearTimeout(timerInactivite);

  // --- SÉCURITÉ VIDÉO ---
  let videos = document.querySelectorAll("video");
  for (let v of videos) {
    if (!v.paused && !v.ended && v.id !== "fond-video") return;
  }

  // --- SÉCURITÉ AUDIO (Nouvelle) ---
  let audioFiction = document.getElementById("audio-fiction");
  if (audioFiction && !audioFiction.paused && !audioFiction.ended) {
    return; // Si la fiction est en lecture, on bloque le cauchemar !
  }

  timerInactivite = setTimeout(lancerDreamcore, TEMPS_AVANT_DREAMCORE);
}
let intervalFadeAudio; // Pour gérer la montée progressive du volume

function lancerDreamcore() {
  isDreamcoreActive = true;
  document.body.classList.add("dreamcore-mode");

  // --- LE SON DU CAUCHEMAR ---
  let audioCauchemar = document.getElementById("audio-cauchemar");
  if (audioCauchemar) {
    audioCauchemar.volume = 0; // On commence dans le silence
    audioCauchemar.preservesPitch = false;
    audioCauchemar.mozPreservesPitch = false;
    audioCauchemar.webkitPreservesPitch = false;
    audioCauchemar.playbackRate = 0.6; // Son déjà ralenti
    audioCauchemar.play();

    // Fondu progressif du volume (monte de 5% toutes les 200ms)
    let vol = 0;
    clearInterval(intervalFadeAudio);
    intervalFadeAudio = setInterval(() => {
      if (vol < 0.8) { // Volume max bloqué à 80% pour ne pas exploser les oreilles
        vol += 0.05;
        audioCauchemar.volume = Math.min(vol, 1);
      } else {
        clearInterval(intervalFadeAudio);
      }
    }, 200);
  }
  
  // ---> PROGRAMMATION DE LA PHASE 2 (L'abysse)
  timerDeepDreamcore = setTimeout(() => {
    document.body.classList.add("dreamcore-deep");
    // Le son s'effondre encore plus dans la phase 2
    if (audioCauchemar) audioCauchemar.playbackRate = 0.25; 
  }, 20000); 
  
  // --- GESTION DE L'IMAGE (La chaise) ---
  let imageExplorateur = document.querySelector('.icone[data-cible="explorateur"] .icone-img img');
  if (imageExplorateur) {
    if (!imageExplorateur.dataset.originalSrc) {
      imageExplorateur.dataset.originalSrc = imageExplorateur.getAttribute('src');
    }
    imageExplorateur.src = "assets/chaise.png"; 
  }

  // --- GESTION DE L'HORLOGE ---
  let horloge = document.getElementById("horloge-win95");
  if (horloge) {
    const symboles = ["¥", "§", "‡", "†", "∞", "∅", "∑", "≈", "0", "1", "X", "?"];
    intervalGlitchHorloge = setInterval(() => {
      let texteFou = "";
      for (let i = 0; i < 5; i++) {
        if (i === 2) texteFou += ":";
        else texteFou += symboles[Math.floor(Math.random() * symboles.length)];
      }
      horloge.textContent = texteFou;
      horloge.style.color = "#ff0000"; 
    }, 100);
  }
}

function stopperDreamcore() {
  isDreamcoreActive = false;
  
  document.body.classList.remove("dreamcore-mode");
  document.body.classList.remove("dreamcore-deep");
  clearTimeout(timerDeepDreamcore);

  // --- ARRÊT DU SON CAUCHEMAR ---
  clearInterval(intervalFadeAudio);
  let audioCauchemar = document.getElementById("audio-cauchemar");
  if (audioCauchemar) {
    audioCauchemar.pause();
    audioCauchemar.currentTime = 0; // On le coupe net et on le remet à zéro
  }
  
  // --- RESTAURATION DE L'IMAGE ---
  let imageExplorateur = document.querySelector('.icone[data-cible="explorateur"] .icone-img img');
  if (imageExplorateur && imageExplorateur.dataset.originalSrc) {
    imageExplorateur.src = imageExplorateur.dataset.originalSrc;
  }

  // --- RESTAURATION DE L'HORLOGE ---
  clearInterval(intervalGlitchHorloge);
  let horloge = document.getElementById("horloge-win95");
  if (horloge) {
    horloge.style.color = "black";
    mettreAJourHorloge();
  }
}

// Les déclencheurs d'activité
document.addEventListener('mousemove', reinitialiserInactivite);
document.addEventListener('mousedown', reinitialiserInactivite);
document.addEventListener('keydown', reinitialiserInactivite);
document.addEventListener('scroll', reinitialiserInactivite);
document.addEventListener('click', reinitialiserInactivite);

reinitialiserInactivite();