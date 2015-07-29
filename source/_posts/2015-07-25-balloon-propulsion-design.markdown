---
layout: post
title: "Balloon: propulsion system design"
date: 2015-07-25 23:48:43 +0200
comments: true
categories: Balloon Project
keywords: balloon robots robotics propulsion
---

I was about to start the design of the Telemetry Streaming System (TSS), but I suddenly have many ideas about propulsions and ways to implement it for my balloon.
I've so started few draws you'll find in this post.

<!-- more -->

First, here is the whole picture of my balloon:

<p class="image center">
  <img src="/images/2015/07/Robot_Balloon_whole_design_v1.jpg">
</p>

I'll use temperature sensors at various positions to take decision:

- activate the burners or stop them
- take off or land (with action on the motorized pulley)
- engage emergency procedure

At the propulsion level, I'll copy real balloon systems:

- 2 burners
- 2 fuel tank (propane gas)

The first design of the propulsion pipeline was this one:

<p class="image center">
  <img src="/images/2015/07/Robot_Balloon_Propulsion_System_v1.jpg">
</p>

The gas tank is my **propane tank**. I'll use **electric valves** to open and cut the gas flow. The **control chamber** is a transition section that I'll use to monitor the situation and take decisions. If the temperature or pressure increases too much in this section, the on board system will be able to cut the flow, and evacuate the gas immediately.
I finally use a **spark plug** to initiate the reaction in the combustion chamber, and send burning gas to the burner.

It was a relatively simple system, and to be honest, a too simple one. This design contains a serious risk of **flashback**, even if I count on electric valves to cut to gas flow in case of emergency.
The flashback problem is a serious one, and I don't want to take any risk on this point.
That's why I've chosen not to build a protection by myself, but to use a commercial solution : **flashback arrestors**.

<p class="image center">
  <img src="/images/2015/07/Torch_Flashback_Arrestor.jpg">
</p>

It's about 10€ on Ebay, and with 2 of them, I'll be safe.

Here is the new design with few improvments:

- flashback arrestors between sections
- more distance between the buffer chamber and the combustion chamber
- a temperature sensor inside the combustion chamber (if I find a way to protect it in order to prevent it from burning...)

<p class="image center">
  <img src="/images/2015/07/Robot_Balloon_Propulsion_System_v2.jpg">
</p>

The basic idea remains the same, but the implementation is a bit safer.

Next step: **real life proof of concept**!