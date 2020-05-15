# Apprendre à développer une cartographie web

Journal d'apprentissage.

## Qu'est-ce qu'on cherche à apprendre ?

> Afficher des données sur une carte, et qu'elles soient filtrables.
> Qu'on identifie les établissements qui ont des ULIS (est-ce qu'on veut afficher les autres établissements ?)
> Voir les établissements de type IME (ça dépend de l'action sociale)
> Identifier les typologies d'établissement de l'éducation nationale, hors éducation nationale
> Exemple e-carto, banque des territoires : une carte centrée sur la France, avec les filtres, des points sur la carte.

## Session 8 - 1er mai 2020

Vendredi 1er mai de 9h00 à 12h30, via whereby.com.

### Ce qu'on a fait

[Bac à sable de la session](https://jsfiddle.net/oncletom/Lwg1ta7h/).

- afficher plusieurs `<img>`, et les styler différemment
- styler le contenu d'un SVG — `fill`, `stroke` avec CSS `color` et `fill`, parfois avec la valeur `currentColor`
- jouer avec l'imbrication d'un document, la précision des sélecteurs CSS, la cascade et ses priorités
- combiner/retirer des classes pour jouer avec leurs effets de bord

### Tu repars avec quoi ?

- meilleure compréhension de CSS
- je comprends mieux les éléments autonomes (le début et la fin des choses, une balise image, ce que je peux déclarer dans mon HTML, comment appeler telle ou telle classe)
- c'est plus facile d'intégrer des boites dans des boites quand tu en discernes les contours
- l'aspect métier : lier les données au HTML, et appliquer des styles graphiques, les questions que je peux poser au(x) développeurs (les filtres, des composants), quand/où engager le dialogue sur des spécifications
- comprendre la complexité du boulot de dev pour anticiper le dialogue ; comment engager un
- qu'est-ce qui est coûteux en dev vs. ce qui ne l'est pas — alors que la feature a une faible valeur
- ça m'aide à me poser des questions sur mon expertise, sur les données et des expériences passées — pourquoi ça aurait marché, et pas marché, avec quoi on design, la frontière entre vision et code, le lien entre le visuel et l'abstraction (les données)
- trop cool JSFiddle, plus agréable que la console, plus intuitif, je m'y suis sentie plus libre, moins peur de casser, moins de machinerie


## Session 7 - 24 avril 2020

Vendredi 20 mars de 9h00 à 11h30, via whereby.com.

### Ce qu'on a fait

- afficher le nom de l'établissement dans la popin
- utiliser une icône différenciante pour les établissements segpa/ulis

### Tu repars avec quoi ?

- beaucoup de confusion sur où je code quoi

## Session 6 - 3 avril 2020

Vendredi 20 mars de 9h00 à 11h30, via whereby.com.

## Session 5 — 20 mars 2020

### Ce qu'on a fait

- Relecture, affinage et priorisation d'un [nouveau backlog](https://github.com/sofiaboulaarab/carto_recherche/projects/2)
- Inspection de nos données GeoJSON
- Discussion des solutions de services/fonds de carte/outils de cartographies
- Clarification du nommage des variables passées en paramètres de fonctions
- Modification du pictogramme de localisation, pour un nouveau en SVG exporté de Figma
- Affichage du détail d'un objet JavaScript, dans la popin d'établissement
- Ajustement des CSS des MarkerClusters

### Tu repars avec quoi ?

- je suis très contente parce que j'ai l'impression que j'ai mieux
  compris ce que — en tant qu'humaine — je nomme arbitrairement, ou explicitement.
  En expliquant mon code à Laurent ça m'a permis de me rendre compte de ce
  je savais expliquer ou non.
- je repars avec des points sur la carte, avec de vraies modifications :
  le picto, sur la partie fonctionnelle et plus proche de ce que l'utilisateur va manipuler
- des choses à faire pour la prochaine fois — un projet concret
- la prochaine fois on va avoir une vraie vision sur ce qu'on a vraiment !
  Je suis curieuse de découvrir ce qu'on va voir.
- On commence à dégager un usage, c'est stylé.

Vendredi 20 mars de 8h30 à 11h55, via whereby.com.

### Ce qu'on a fait

- Lire le code de Sofia qui intègre [Leaflet MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster/)
- Afficher tous les marqueurs sur la carte !
- Jouer avec les priorités CSS
- Utilisation de l'inspecteur web pour comprendre les règles qui s'appliquent ou pas
- Changer la taille et la couleur des clusters
- Changer la hauteur de ligne des clusters

### Tu repars avec quoi ?

- Avec une carte qui commence à être sympa !
- Des points qui s'affichent, bien
- Un peu de compréhension de CSS
- Du travail pour la prochaine fois, concret, et on revient dans un truc que je connais (UX)

### Actions pour la prochaine fois

- Fermer le projet [Itération 0](https://github.com/sofiaboulaarab/carto_recherche/projects/1)
- Crée un projet _Itération 1_
- Changer les marqueurs par défaut de Leaflet pour quelque chose de plus joli
- Alimenter le projet avec des choses à construire qui répondent au besoin du MVP — à la fin, on montre quelque chose à quelqu'un
- Veiller aux moments où il y a décrochage — concurrence entre le besoin de comprendre et l'envie d'avancer (rapidement)

## Session 4 — 28 février 2020

Vendredi 28 février de 9h30 à 12h30, via whereby.com.

### Ce qu'on a fait

- utilisation de la Console Web pour afficher des messages et visualiser des variables
- jeu avec les tableaux (listes), les objets et les fonctions JavaScript
- des boucles sur des listes, nommer des variables dans une fonction !
- transposition de l'utilisation des structures de données avec les marqueurs
- planter le navigateur avec des milliers de points affichés sur la carte 😅

### Tu repars avec quoi ?

- des points sur la carte !
- plus de connaissances sur comment ça marche une liste, un objet, comment jouer avec et comment faire une boucle, et c'est quoi une fonction
- quand je regarde le code qu'on a copié/collé, je comprends davantage de choses — c'est encore un peu obscur les fetch()/then()/catch()
- je comprends tout ce qu'il y a écrit dans la boucle d'affichage des marqueurs
- je suis contente de repartir avec un exercice concret — les clusters de marqueurs
- j'ai bien compris ce que c'est `console.log()` — afficher ce que je fais, c'est moins obscur, je peux tester tout ce que j'écris, et que ça rend bien ce que je veux

### Tu te situes où ?

> Y'a encore grave du taf pour que ça ressemble ce à quoi ça ressemble.
> J'anticipe déjà tous les trucs qui vont être moches, il va falloir changer les couleurs, les différents niveaux de popin.

→ Je commencerai à toucher un truc quand je pourrai cliquer sur un point — là on a perdu l'interactivité parce qu'il y a trop de points.

## Session 3 — 13 février 2020

Jeudi 13 février de 10h20 à 12h45, via whereby.com.

### Ce qu'on a fait

- inspecter le contenu de fichier CSV et JSON, avec `csvkit` et `jq`
- comprendre la structure d'un fichier GeoJSON en utilisant [geojson.io](http://geojson.io)
- accéder à des propriétés d'un objet pour les afficher dans un marqueur Leaflet
- lire les données et les afficher sur la carto — le rendu est partiel
- début de compréhension des boucles en JavaScript

### Tu repars avec quoi ?

- dans le fond, c'était cool parce que j'ai réalisé qu'il y a un concept qui ne rentre pas (pour se connecter aux données par-ci par là)
- je suis plus à l'aise avec le terminal
- on a vu comment lire des fichiers CSV et JSON, comprendre ce qu'il y a dedans, etc.
- je comprends mieux les documentations d'API, pour la culture c'est top
- je crois que je ne sais pas grand chose — de JavaScript

### Est-ce qu'on peut faire des choses différemment ?

- construire la ligne de code qui boucle dans le tableau plutôt que rester sur le copié/collé, qu'on a enlevé puis remis pour rattraper la logique
- veiller au volume d'informations à lire, modifier et manipuler dans un langage qui me paraît compliqué — cf. Leaflet où c'était plus évident

## Session 2 — 30 janvier 2020

Jeudi 30 janvier de 16h30 à 18h30, via whereby.com.

### Ce qu'on a fait

- créer la page HTML qui va accueillir la carto
- insérer une cartographie centrée sur la France
- afficher un point qui correspond à un établissement scolaire

### Tu repars avec quoi ?

- avec une carte interactive !
- un début de compréhension sur c'est quoi du HTML, du CSS et du JavaScript — que chacun a une manière d'être appelé
- avec encore plus de questions qu'avant !
- avec une idée de comment j'utilise des outils codés par d'autres personnes pour faire ce que j'ai envie de faire
- ça me donne envie de regarder d'autres solutions de cartes, d'autres tutos

### Qu'est-ce qui t'a surpris ?

- la facilité d'utilisation de Leaflet
- la vraie complexité est dans les outils qui rendent les choses simples, des boites dans des boites — 3 lignes de code et t'as tout qui fonctionne

### Qu'est-ce qu'on fait différemment la prochaine fois ?

- ce qui serait cool, avoir un nouveau document, genre "ressources", dans lequel tu mets les liens que tu me passes sur Slack

## Session 1 — 27 janvier 2020

Lundi 27 janvier de 9h30 à 12h45, via whereby.com.

### Ce qu'on a fait

- mise en place d'un dépôt GitHub
- mise en place du board de la première itération — questions/réponses sur les différentes options d'automatisation
- remplissage du backlog
- affinage des items — où ça démarre, où ça se termine
- priorisation des items
- mise en place de l'environnement de développement — Atom, et Git en ligne de commande
- récupération d'un jeu de données, aux formats CSV et GeoJSON
- tentative d'activation de GitHub Pages pour obtenir une URL à partager

### Tu repars avec quoi ?

- avec un backlog, ce qui est plutôt stylé !
- avec une meilleure compréhension de GitHub, et d'Atom et comment ils se connectent
- de l'enthousiasme parce que j'ai envie de continuer
- me rendre compte que j'interagis avec un environnement que je ne comprends pas (on a dû aller dans le terminal pour résoudre un problème) — ça me confirme dans l'idée que je veux comprendre plus de choses
- j'ai aimé la manière dont on l'a construit, chaque item était une boîte de Pandore et c'était agréable de le faire de manière détendue — ça rend le backlog serein !

### Est-ce qu'on peut faire des choses différemment ?

Nope !
