---
layout: post
title: "De la Terre à l'espace en 5 projets robotiques"
date: 2015-07-09 08:51:41 +0200
comments: true
categories: Montgolfière Zeppelin Avion Drone Fusée
keywords: montgolfière zeppelin avion drone fusée robots robotique
thumbnail: /images/2015/07/Flying-Robots-One-Year-Rocket-Project-Roadmap-by-Arnaud-Lenglet.jpg
lang: fr
---

J'y pense depuis des années, et ça y est : avec ce blog, je lance officiellement mon projet de fusée ! Le but de ce projet est de créer une fusée, avant **juillet 2016**, qui soit capable de décoller, d'atteindre l'altitude de **1 000m**, de **prendre une photo de pas de tir** lorsqu'elle sera à l'apogée de son vol, puis **d'atterrir tranquillement au sol** de manière à être récupérer**.

<!--more-->

Je sais pertinemment que cet objectif inclut de nombreuses difficultés et de multiples défis, défis pour lesquels je n'ai - pour la plupart d'entre-eux, pas de solution actuellement. Cependant c'est là le propre d'un ingénieur : être confronté à un problème, trouver une solution, et passer au problème suivant.
Si en plus les problèmes mènes à des solutions fun, c'est tout bénèf' !

Afin de conserver ma motivation tout au long de ce parcours de longue haleine, j'ai décidé d'y aller étape par étape, et de séparer ce grand projet en plusieurs projets plus petits.

A l'été 2015, voici à quoi ressemblait ce découpage :

<p class="image center">
  <img src="/images/2015/07/Flying-Robots-One-Year-Rocket-Project-Roadmap-by-Arnaud-Lenglet.jpg">
</p>

L'idée de base était que chaque étape mène à la suivante, en permettant progressivement d'augmenter le niveau technique de l'ensemble.
Ainsi, le système global - le robot - se voit agrémenter au fur et à mesure de ses itérations, de plus en plus de capteurs, actionneurs et systèmes embarqués et distants.

Ma roadmap actuelle a peu évoluée, et j'y ai simplement ajouté une étape supplémentaire, pour porter le nombre de projets à 5 au total.
Voici les 5 étapes par lesquelles je compte passer pour atteindre mon objectif de fusée robotisée.

---
<p class="image center">
  <img src="/images/home/step-1-black-300x300.png">
</p>

### Étape 1 : La montgolfière

#### Objectifs du projet
1. Enregistrer l'altitude et l'accélération durant l'ensemble du vol
2. Transmettre ces données durant le vol à une base au sol
3. Être capable de décoller automatiquement, d'atteindre l'altitude désirée, puis d'atterrir en douceur

#### Nouveaux systèmes développés
- **Master Chief System** (MCS) : système coordonnant les autres systèmes embarqués durant le vol (cerveau du robot)
- **Sensor Management System** (SMS) : récolte et enregistre les valeurs des différents capteurs du robot
- **Telemetry Streaming System** (TSS) : transmet un flux de données vers la station au sol

#### Nouveaux équipements embarqués
- Altimètre
- Accéléromètre
- Antenne 4G

---
<p class="image center">
  <img src="/images/home/step-2-black-300x300.png">
</p>

### Étape 2 : Le zeppelin

#### Objectifs du projet
1. Transmettre des ordres depuis la station au sol vers le robot en vol
2. Voler en ligne droite de manière autonome et effectuer 5 virages
3. Maintenir un cap et une altitude pendant 1 minute

#### Nouveaux systèmes développés
- **Remote guidance system** (RGS) : reçoit et traite les informations reçues de la station au sol
- [v1] **Position & Navigation System** (PNS) : première version du système permettant de gérer la position, la vitesse horizontale et verticale, l'altitude, le roulis, le tangage et le lacet du robot
- [v1] **Energy & Propulsion System** (EPS) : ébauche du système qui gérera à terme les batteries, le carburant et les moteurs

#### Nouveaux équipements embarqués
- Gyroscope
- Boussole
- Servomoteur
- Moteur "brushless"

---
<p class="image center">
  <img src="/images/home/step-3-black-300x300.png">
</p>

### Étape 3 : L'avion

#### Objectifs du projet
1. Transmettre en temps réel d'une vidéo depuis le robot en vol vers la station au sol (streaming)
2. Suivre un plan de vol comprenant 5 points de passage
3. Décoller et atterrir de façon assistée (le pilote humain positionne le robot au bon endroit avant d'enclencher la séquence d'atterrissage/de décollage)

#### Nouveaux systèmes développés
- [v1] **Take off and landing System** (TLS): première version du pilote automatique permettant le décollage et l'atterrissage
- **Flight Plan System** (FPS): gère le plan de vol et les points de passage
- **Video Streaming System** (VSS): stream la vidéo provenant de la caméra du robot vers la station au sol

#### Nouveaux équipements embarqués
- Caméra vidéo
- Capteur à ultrason
- Capteur de vitesse air

---
<p class="image center">
  <img src="/images/home/step-4-black-300x300.png">
</p>

### Étape 4 : Le drone

#### Objectifs du projet
 1. Décoller et atterrir de manière complètement autonome
 2. Adapte son comportement en vol en fonction des conditions extérieur (vent)
 3. Déclenche une procédure d'urgence

#### Nouveaux systèmes développés
- **Emergency & Abort System** (EAS): déclenche une procédure d'arrêt en cas d'urgence
- [v2] **Take off and landing System** (TLS): gère le décollage et l'atterrissage de manière entièrement autonome
- [v2] **Position & Navigation System** (PNS): gère la position, la vitesse horizontale et verticale, l'altitude, le roulis, le tangage et le lacet du robot

#### Nouveaux équipements embarqués
- Capteur de température
- Capteur de pression atmosphérique
- Capteur d'humidité

---
<p class="image center">
  <img src="/images/home/step-5-black-300x300.png">
</p>

### Étape 5 : La fusée

#### Objectifs du projet
 1. Atteint l'altitude cible de 1 000 m
 2. Prend une vidéo du pas de tir à l'apogée du vol
 3. Déploie un parachute pour atterrir doucement et être récupéré

#### Nouveaux systèmes développés
- **Location & Recovery System** (LRS): système permettant de récupérer le robot après l'atterrissage ou le crash
- **Atmospheric & Meteorological System** (AMS): surveille les conditions météorologiques en se basant à la fois sur les capteurs embarqués et sur les informations transmises par la station au sol
- [v2] **Energy & Propulsion System** (EPS): gère les batteries, le carburant et les moteurs

#### Nouveaux équipements embarqués
- GPS
- Parachutes
- Propulsion

---

J'expliquerai chacune de ces étapes dans les publications suivantes.