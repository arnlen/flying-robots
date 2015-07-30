---
layout: post
title: "Telemetry Streaming System (TSS): design"
date: 2015-07-30 22:56:55 +0200
comments: true
categories: Balloon
keywords: balloon robots robotics api ruby rails
thumbnail: /images/2015/07/Telemetry-Streaming-System-Design-for-Flying-Robots.jpg
---

While parts of my propulsion system are still in coming, I decide to come back to my first focus: the Telemetry Streaming System (TSS).
The goal of this system is to **transfer in flight data** (altitude, pressure, horizontal and vertical speed, engine temperature,...) **to the ground station** for monitor purpose.
I won't be able to pilot my flying machine through the TSS, but only to read data.

<!-- more -->

After reading a bit on this topics, I've chosen a quite atypical solution.
Whereas trying to transfer data directly from my balloon/zeppelin/place/drone/rocket (choose your favorite one :P) to the ground station, I'll use a pretty well known solution in the web world: **an API**.

The antenna network in my region is dense enough to provide me with a king-size ground relay station network... even a better than the NASA/US Army had during the Apollo time. :)
Here is the plan in one schema:

<p class="image center">
  <img src="/images/2015/07/Telemetry-Streaming-System-Design-for-Flying-Robots.jpg">
</p>

A bit of explanation:

- The flying robot sends telemetric data to my backend server, via an API, contacted through 4G connection
- When new data arrive, my backend server send a notification to my ground base station
- Every notification updates the monitoring dashboard on my computer/tablet/phone/watch

Technical disclamer:

- The backend API is developed in Ruby on Rails, sorry for my Django lover guys. <3
- I'll use a websocket connection for notifications

I can see two main advantages with this design:

- First, I can monitor my flying machine from all around the world, and with any device able to Internet connection
- Second, I don't have to mind with home-made transmission systems: I rely on battle-tested ones

Nevertheless, I still have to interrogations I've won't be able to clarify before first launches:

- What is the maximum altitude coverage of 4G antenna? (guessing: 2km, if you know, comments are appreciated)
- Is is possible to maintain connection at high speed? This wouldn't be a problem with my balloon project, but it will be with my plane, and especially with my rocket one.

Whatever, on step at a time, "the morrow will be anxious for itself".
This idea isn't to build the best and perfect system ever from the first strike. Experience proves we can't. I will build something that works well for my daily situation, and tomorrow will be an other (exciting) innovation and adaptation day! :)