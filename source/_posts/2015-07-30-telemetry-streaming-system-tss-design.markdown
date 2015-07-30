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

<!-- more -->

After reading a bit on this topics, I've chosen a quite atypical solution.
Whereas trying to transfer data directly from my balloon/zeppelin/place/drone/rocket (choose your favorite one :P) to the ground station, I'll use a pretty well known solution in the web world: **an API**.

The antenna network in my region is dense enough to provide me with a **king-size** ground relay station network. It would have even been large enough to make Apollo NASA's engineers jealous! :)
Here is the plan in one schema:

<p class="image center">
  <img src="/images/2015/07/Telemetry-Streaming-System-Design-for-Flying-Robots.jpg">
</p>

A bit of explanation:

- First, the flying robot first try to reach Internet **through 4G connection**
- When connected, it will send telemetric data to my backend server **via an API**
- Then, when new data will arrive on my backend server, they are immediately **persisted in database**, and simultaneously a **notification** is sent to my ground base station
- Finally, on notification, the flight monitor dashboard **updates values**

<p class="image center">
  <img src="/images/2015/07/Telemetry-Streaming-System-Design-Flight-Monitor.jpg">
</p>

**Important**: I won't be able to pilot my flying machine through the TSS. This system is a read-only one.

For my fellow developer, here are few technical precisions:

- The backend API is developed in Ruby on Rails (sorry for my Django lover guys ^^)
- I'll use a websocket connection for notifications

I will open source all source code, and you can find repositories on the [GitHub organization page](https://github.com/flying-robot-projects) (you can drop a star or two if you're in a good mood. Thx! <3)

<p class="image center">
  <a href="https://github.com/flying-robot-projects"><img src="/images/2015/07/Flying-Robot-Projects-Github-Source-Code.png"></a>
</p>

Back the my TSS, I can see two main advantages with this first design:

- First, I can monitor my flying machine from **all around the world**, and with **any device** able to Internet connection
- Second, I don't have to mind with home-made transmission systems: **I rely on battle-tested ones**

Nevertheless, I still have two interrogations:

- What is the maximum altitude coverage of 4G antenna? (guessing: 2km, if you know, comments are appreciated!)
- Is is possible to maintain connection at high speed? This wouldn't be a problem with my balloon project, but it will be with my plane, and especially with my rocket one.

I won't be able to clarify those questions before first launches, and I'm ok with that: this won't be critical... promise.

<p class="image center">
  <img src="/images/2015/07/Developer-first-test-fail-cute-girl.gif">
</p>

On step at a time, "the morrow will be anxious for itself".
This idea isn't to build the best and perfect system from the first strike. Experience proves we can't.

I will build something that works well for my daily situation, and tomorrow will be an other (exciting) innovation and adaptation day! :)