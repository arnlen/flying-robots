---
layout: post
title: "Earth to space in 5 projects: presentation"
date: 2015-07-09 08:51:41 +0200
comments: true
categories: Balloon Zeppelin Plane Drone Rocket
keywords: balloon zeppelin plane drone rocket robots robotics
thumbnail: /images/2015/07/Flying_Robots_One_Year_Rocket_Project_Roadmap_by_Arnaud_Lenglet.jpg
---

I'm thinking about this for years, and this is it: with this blog, I officially launch my rocket project! The goal of this project is to create a rocket, within **july 2016**, which would be able to reach an altitude of **1 000 m, take a picture of the launch pad when at apoapsis, and land softly in order to be recovered**.

<!--more-->

I know this goal involved huge difficulties. That's why I decided to split it into multiple steps.

Here is the first roadmap which involved 4 steps:

<img src="/images/2015/07/Flying_Robots_One_Year_Rocket_Project_Roadmap_by_Arnaud_Lenglet.jpg">

The idea is that each step is designed to lead to the next one, by adding new sensors and systems to the stack.
The revised roadmap now includes 5 major steps:

---
### Step 1: Balloon project

#### Objectives
1. Record altitude and acceleration during the whole flight
2. Transmit those data in flight
3. Auto lift off, reach to target altitude, and soft landing

#### New systems involved
- Master Chief System (MCS): coordinator systems during flight
- Sensor Management System (SMS): capture and record various data from sensors
- Telemetry Streaming System (TSS): stream data to ground station (via 4G connexion)

#### New on board tools (in comparison to previous step)
- Altimeter
- Accelerometer
- 4G antenna

---
### Step 2: Zeppelin project

#### Objectives
1. Transmit orders from ground station to flying robot
2. Manage to navigate in straight line and achieve multiple turns
3. Manage to maintain direction an altitude

#### New systems involved
- Remote guidance system (RGS): get orders from base station
- Position & Navigation System (PNS): manage position, horizontal/vertical speed, altitude, roll, yaw and pitch
- Energy & Propulsion System (EPS): manage battery, fuel and engines

#### New on board tools (in comparison to previous step)
- Gyroscope
- Compass
- Servo-motor
- Brushless motor

---
### Step 3: Plane project

#### Objectives
1. In flight live video streaming
2. Follow flight plan with multiple way points
3. High speed auto lift off, and soft landing

#### New systems involved
- Take off and landing System (TLS): manage take off and landing
- Flight Plan System (FPS): manage flight plan with multiple way points
- Video Streaming System (VSS): stream video to ground station (via 4G connexion)

#### New on board tools (in comparison to previous step)
- Video camera
- Ultrasonic sensors
- Air speed sensor

---
### Step 4: Drone project

#### Objectives
 1. Autopilot for vertical take off and landing
 2. Mobile app communication
 3. Abort flight in case of emergency

#### Systems involved
- [NEW] Emergency & Abort System (EAS): trigger abort system in case of emergency
- [UPDATE] Take off and landing System (TLS): manage take off and landing
- [UPDATE] Position & Navigation System (PNS): manage position, horizontal/vertical speed, altitude, roll, yaw and pitch

#### New on board tools (in comparison to previous step)
- Temperature sensor
- Air pressure sensor
- Humidity sensor

---
### Step 5: Rocket project

#### Objectives
 1. Achieve the altitude of 1 000 m
 2. Take a picture of the launch pad at apoapsis
 3. Deploy parachutes to land softly

#### New systems involved
- [NEW] Location & Recovery System (LRS): allow to recover rocket after landing or crash
- [NEW] Atmospheric & Meteorological System (AMS): monitor atmospheric condition and send decision order based on ground meteo station data and on board sensor data
- [UPDATE] Energy & Propulsion System (EPS): manage battery, fuel and engines

#### New on board tools (in comparison to previous step)
- GPS
- Parachutes
- Propulsion

---

I'll explain each step in further posts.