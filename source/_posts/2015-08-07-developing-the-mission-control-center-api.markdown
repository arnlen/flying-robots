---
layout: post
title: "Developing the Mission Control Center API"
date: 2015-08-07 22:33:20 +0200
comments: true
categories: API Development Backend
keywords: api ruby rails robots robotics
thumbnail: /images/2015/08/Main-Control-Room-ESA-Space-Operations-Centre.jpg
---

While working on the Telemetry Streaming System (TSS), I realised I was in need of something more. I don't only need a system to receive and store telemetric data ; but I need a more global one, which would allow me to monitor the whole flight.
From the lift-off until the final landing (or crash...) through various in-flight milestones and operations, what I need is in fact what space agencies called: the Mission Control Center.

<!-- more -->

<p class="image center">
  <img src="/images/2015/08/Main-Control-Room-ESA-Space-Operations-Centre.jpg">
</p>

In my case, I won't have to build a huge shiny room, and filling it up with powerful computers and smart guys.
Rather that, what I precisely need is a software capable of:

- 1. Monitor the robot (balloon, zeppelin, plane, drone of rocket) on the launch pad
- 2. Supervise and run the launch sequence through its successive stages until lift-off
- 3. Monitor the flying robot during the accomplishment of its in flight missions
- 4. Receive and send data to the robot
- 5. Localize the robot once landed

This software will be composed of two parts:

- An API
- A frontend

Focussing on my first need which is based on telemetric, here is the first data model of my Mission Control Center API.