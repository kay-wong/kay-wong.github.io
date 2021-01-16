---
title: "On Struggling"
published: true
abstract: "I’m closing in on the first month of my Outreachy internship with Wikimedia. My project is on creating Machine Learning datasets to measure content reliability. The Wikipedia ecosystem includes template pages, which could be interpreted as tags that add recurring messages to a page that might serve as a “warning” for the page. Some examples ..."
---

I’m closing in on the first month of my Outreachy internship with Wikimedia. My project is on creating Machine Learning datasets to measure content reliability.

The Wikipedia ecosystem includes template pages, which could be interpreted as tags that add recurring messages to a page that might serve as a “warning” for the page. Some examples include “self-contradictory” which mark that an article contains claim(s) which contradict each other, or “unreferenced”, which indicate that an article is lacking in references. The presence of such templates serve to assist Wikimedia’s editors with the maintenance of a page’s content and quality.

My project involves working closely with Wikipedia templates related to citation and verifiability, and this entails having to process large historical dumps of Wikimedia pages, and the entire revision history of each page. In previous weeks, I had focused on exploratory data analysis to obtain general statistics of citation and verifiability templates, and to identify heuristics that could be used to algorithmically obtain instances of positive and negative classes of templates.

However, I ran into issues with regards to the actual processing of the data, largely due to memory and computational limitations. Struggling is a normal part of the learning process, and I’d like to share more about my experience and what I’ve learned about how to manage this.

<br>
<br>

# Ask Questions Early
---

Like most other Outreachy interns have blogged about, asking questions is a daunting task. It’s easy to fall in the trap of giving into your impostor syndrome, and being hesitant to ask questions for fear of seeming unknowledgeable.

Working with the entire history of revisions for all of Wikipedia’s pages means dealing with a large amount of data (1 TB of _zipped_ historical data, in fact). Wikimedia hosts the PAWS Jupyter notebooks, which is a great resource providing access to their public dumps data directory without having to download it all to your local machine. However, the notebooks have a memory limit of 3GB, which limits the amount of data that can be processed. 

Generally, before I ask a question, I try everything in my avenue to solve it first, and failing so, to then compose my thoughts to ask a well researched (and unfortunately for my mentors, _multi-paragraph_) question. This means I tend to spend at least 2 days if I’m stuck on something before I eventually ask for help on it.

However, this doesn’t apply effectively when your data takes 48 hours to complete a single run-through. Asking questions early serves as a way to avoid falling into further timesinks, and on wasting time on issues that your more experienced mentors may be able to more easily catch. It’s also possible that the issue you’re running into could have been encountered by your mentor, and you could avoid reinventing the wheel if you ask (informed) questions as much as you can, as early as you can.

<br>
<br>

# Premature optimisation is the root of all evil…
### &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; … And failing to ask questions is a branch away
--- 

In working with the memory and computation constraints, I had to repeatedly optimise my processing code. After going through 2-3 iterations of optimising my processing code with my mentors, it was decided that I shouldn’t be wasting too much time on the optimisation aspect, and I worked out a solution with my mentors where I could run the preprocessing code on their machines.

Maybe I could have struggled through working on the optimisation aspect, and spent time trying to figure it out on my own eventually. At the same time, I could also have been spending that time working on more meaningful tasks, such as data analysis. 

Falling into the trap of being afraid to ask questions opens you up to the underlying trap which lie at the root of all evil– premature optimisation. Sure, optimising your programs is worth thinking about, but only to a certain extent. It’s not easy to tell when premature optimisation is necessary, especially when you’re just starting out, and that’s one of the many aspects your mentors are there for. 

In general, your mentors are there to guide and direct your learning. This isn’t limited to just answering your technical questions, but also in providing guidance on what aspects you should be focusing on. They’d usually have a bigger picture about how you might approach a problem, and asking questions helps create a useful discussion point for that necessary feedback.

<br>
<br>

# Asking is Communicating
--- 

To sum up, asking questions serves as an  invaluable aspect of communication. We tend to think of question asking as an indicator of a lack of knowledge or expertise, and an embarrassing admittal that we might be struggling. But asking questions actually serves as an important medium for communication and discussion. Asking questions, and especially good ones, could help provide your mentors with a general idea of your progress and your thinking, and will ultimately help you work better together in the long run.


<br>
<br>
<br>
<br>
<br>


