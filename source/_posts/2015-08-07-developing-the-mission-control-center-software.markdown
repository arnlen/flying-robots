---
layout: post
title: "Developing the Mission Control Center software"
date: 2015-08-07 22:33:20 +0200
comments: true
categories: Balloon Zeppelin Plane Drone Rocket
keywords: api development ruby rails emberjs robots robotics
thumbnail: /images/2015/08/Main-Control-Room-ESA-Space-Operations-Centre.jpg
lang: en
---

While working on the [Telemetry Streaming System (TSS)](/blog/2015/07/30/telemetry-streaming-system-tss-design), I realised I was in need of something more. I don't only need a software to receive and store telemetry data ; but I need a more global system, which would allow me **to monitor the whole flight**.
From the lift-off until the final landing (or crash...) through various in-flight milestones and operations, I need something like a flight tower control.

In fact, space agencies call this the **Mission Control Center**.

<!-- more -->

<p class="image center">
  <img src="/images/2015/08/Main-Control-Room-ESA-Space-Operations-Centre.jpg" alt="The European Space Agency (ESA) Space Operations Centre">
</p>

In my case, I won't have to build a huge high-tech room, and filling it up with shiny computers and smart guys.
Rather that, what I precisely need is a software capable of:

1. Monitor the robot (balloon, zeppelin, plane, drone of rocket) on the launch pad
2. Supervise and run the launch sequence through its successive stages until lift-off
3. Monitor the flying robot during the accomplishment of its in flight missions
4. Receive and send data from and to the flying machine
5. Localize the robot once landed

Because this Mission Control Center is not precisely part of my future rocket, I neglected it until now... whereas it's definitely a requirement for every flight!
How did I missed it?!

<p class="image center">
  <img src="/images/2015/08/sheldon-cooper.gif" alt="Sheldon Cooper says no">
</p>

This is the good thing with iterations: each iteration helps to determine the next one.

It's so exciting! On this first "balloon" iteration, I'm discovering so many things right now! It's amazing!

Here are a few details of the Mission Control Center software I'm actually developing, and what will be under the hood:

- **An API** developed in Ruby on Rails. This part would do all the core business jobs.
- **A frontend** developed in EmberJS. This would be the monitor part, from which I would be able to interact with the flying robot.

You can follow the progress of both of these projects on the <a target="_blank" href="https://github.com/flying-robot-projects">GitHub page of the Flying Robot Project organization</a>.