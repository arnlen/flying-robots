---
layout: post
title: "Balloon project: presentation"
date: 2015-07-14 12:50:19 +0200
comments: true
categories: Balloon Project
keywords: balloon robots robotics
thumbnail: /images/2015/07/balloon-gas.jpg
---

The balloon project is the first step to go to space. This project will lead to the development of key features which would be later required by my rocket.

<!--more-->

As described in [this original post](/blog/2015/07/09/one-year-rocket-project/), here are the key points of the balloon project:

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

I don't want to reinvent the wheel with this project. That's why I'll try to **mimic** real balloon systems as much as possible.

| | |
| ----------------------- | ----------------------- |
| <img src="/images/2015/07/hot-air-balloon-diagram.jpg"> | <img src="/images/2015/07/balloon_techparts.JPG"> |
| <img src="/images/2015/07/balloon-gas.jpg"> | <img src="/images/2015/07/hot-air-balloon-3.jpg"> |

The only real difference between my balloon and real once would be the pilot: my balloon would be **autonomous** and **remote monitored**.
The idea is to really have, even at this first step, a real **flying robot**.