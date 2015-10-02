---
layout: post
title: "De la Terre à l'espace en 5 projets robotqiues : introduction"
date: 2015-07-09 08:51:41 +0200
comments: true
categories: Montgolfière Zeppelin Avion Drone Fusée
keywords: montgolfière zeppelin avion drone fusée robots robotique
thumbnail: /images/2015/07/Flying-Robots-One-Year-Rocket-Project-Roadmap-by-Arnaud-Lenglet.jpg
lang: fr
---

J'y pense depuis des années, et ça y est : avec ce blog, je lance officiellement mon projet de fusée ! Le but de ce projet est de créer une fusée, avant **juillet 2016**, qui soit capable de décoller, d'atteindre l'altitude de **1 000m, de prendre une photo de pas de tir lorsqu'elle sera à son apogée, puis d'atterrir tranquillement au sol de manière à être récupérer**.

<!--more-->

Je sais pertinemment que cet objectif inclue de nombreuses difficultés - difficultés pour lesquelles je n'ai actuellement pas encore de solution. C'est pourquoi j'ai décidé d'y aller étape par étape, et de séparer ce grand projet en plusieurs étapes plus petites.

Voici la première roadmap qui incluait - à l'époque - 4 étapes:

<p class="image center">
  <img src="/images/2015/07/Flying-Robots-One-Year-Rocket-Project-Roadmap-by-Arnaud-Lenglet.jpg">
</p>

L'idée de base était que chaque étape mène à la suivante, en permettant progressivement d'augmenter le niveau technique de l'ensemble.
Ainsi, le système global se voit agrémenter au fur et à mesure de ses iterations, de plus en plus de capteurs, actionneurs et systèmes embarqués et distants.
La version actuelle de la roadmap inclue à présent 5 étapes principales :

---
### Étape 1: La montgolfière

#### Objectifs
1. Enregistrer l'altitude et l'accélération durant l'ensemble du vol
2. Transmettre ces données durant le vol à une base au sol
3. Être capable de décoller automatiquement, d'atteindre l'altitude désirée, puis d'atterrir en douceur

#### Nouveaux systèmes développés durant cette étape :
- Master Chief System (MCS) : système coordonnant les autres systèmes embarqués durant le vol
- Sensor Management System (SMS) : récolte et enregistre les valeurs des différents capteurs du robot
- Telemetry Streaming System (TSS) : transmet un flux de données vers la station au sol

#### Nouveaux équipements embarqués lors de cette étape :
- Altimètre
- Accéléromètre
- Antenne 4G

---
### Étape 2: Le zeppelin

#### Objectifs
1. Être en mesure de transmettre des ordres depuis la station au sol vers le robot en vol
2. Être capable de voler en ligne droite de manière autonome et d'effectuer plusieurs virages
3. Être capable de maintenir un cap et une altitude

#### Nouveaux systèmes développés durant cette étape :
- Remote guidance system (RGS) : reçoit et traite les informations reçues de la station au sol
- Position & Navigation System (PNS) : gère la position, la vitesse horizontale et verticale, l'altitude, le roulis, le tangage et le lacet du robot
- Energy & Propulsion System (EPS) : gère les batteries, le carburant et les moteurs

#### Nouveaux équipements embarqués lors de cette étape :
- Gyroscope
- Boussole
- Servomoteur
- Moteur "brushless"

---
### Étape 3: L'avion

#### Objectifs
1. Streaming vidéo depuis le robot en vol vers la station au sol
2. Suivi d'un plan de vol comprenant plusieurs points de passage
3. Être en mesure décoller et d'atterrir de façon assistée

#### Nouveaux systèmes développés durant cette étape :
- Take off and landing System (TLS): gère le décollage et l'atterrissage de façon assistée
- Flight Plan System (FPS): gère le plan de vol et les points de passage
- Video Streaming System (VSS): stream la vidéo provenant de la/les caméra(s) vers la station au sol

#### Nouveaux équipements embarqués lors de cette étape :
- Caméra vidéo
- Capteur à ultrason
- Capteur de vitesse air

---
### Step 4: Le drone

#### Objectifs
 1. Pilote automatique pour le décollage et l'atterrissage de manière complètement autonome
 2. Communication depuis/vers une application mobile
 3. Être en mesure de déclencher une procédure d'urgence

#### Nouveaux systèmes développés durant cette étape :
- Emergency & Abort System (EAS): déclenche une procédure d'arrêt en cas d'urgence
- [Mise à jour] Take off and landing System (TLS): gère à présent le décollage et l'atterrissage de manière autonome
- [Mise à jour] Position & Navigation System (PNS): gère la position, la vitesse horizontale et verticale, l'altitude, le roulis, le tangage et le lacet du robot

#### Nouveaux équipements embarqués lors de cette étape :
- Capteur de température
- Capteur de pression atmosphérique
- Capteur d'humidité

---
### Step 5: Rocket project

#### Objectives
 1. Atteint l'altitude cible de 1 000 m
 2. Prend une vidéo du pas de tir à l'apogée du vol
 3. Déploie un parachute pour atterrir doucement et être récupéré

#### New systems involved
- Location & Recovery System (LRS): système permettant de récupérer le robot après l'atterrissage ou le crash
- Atmospheric & Meteorological System (AMS): surveille les conditions météorologiques en se basant à la fois sur les capteurs embarqués et sur les informations transmises par la station au sol
- [Mise à jour] Energy & Propulsion System (EPS): gère les batteries, le carburant et les moteurs

#### New on board tools (in comparison to previous step)
- GPS
- Parachutes
- Propulsion

---

J'expliquerai chacune de ces étapes dans les publications suivantes.