---
title: "Modifying Expectations"
published: true
abstract: "My internship with Outreachy has now reached the halfway point. Since starting on the project, I've been learning a lot about the Wikipedia ecosystem, and how it pertains to the goals of the project. The theme for this week's Outreachy chat was 'Modifying Expectations', which is a theme I found ... " 
---

My internship with Outreachy has now reached the halfway point. Since starting on the project, I've been learning a lot about the Wikipedia ecosystem, and how it pertains to the goals of the project. The theme for this week's Outreachy chat was "Modifying Expectations", which is a theme I found similarly befitting for this week's blog post, as I reflect on my progress so far working on my project. 

As detailed in my [previous blog post]({{ site.url }}{{ site.baseurl | append:'/2021/01/15/creating-machine-learning-datasets-to-measure-content-reliability/' }}), my project consists of 3 main phases:

1. Obtaining dataset of positive/negative examples of template addition and removal
2. Data Analysis
3. Building Benchmark Models

<br>
<br>

# Changing Expectations: Timeline
--- 

Having reached the halfway point for the internship, part of this week's goals for Outreachy interns involved reviewing our project timeline with our mentors. My initial proposal divided the 3 main phases equally across the 3 months of my internship. Looking back on my proposed timeline which I submitted for my internship application, I realised I had completely underestimated the amount of time it would take to complete the first phase of the project. Going into the project, I was sure that I would be done with the first phase within 3 weeks, and would be able to get started on the interesting data analysis and modelling part in no time. As of the current stage, I've overrun the expected timeline for the first phase by 2 weeks, as I began to realise the complexity of the task.

The first phase of the project involved going through many iterations of a data pipeline for extracting positive and negative instances for the presence of templates within an article. Though I had worked with the Wikipedia API during my internship application period, and had experience with the Revisions API, I was not aware of the scale of the data I'd be working with, having to process entire history of revisions for as much as tens of thousands of pages per template. Because each revision had to be processed sequentially in time to properly capture the addition and removal of templates, this served as a large bottleneck as this had to be done across all pages in the history data dumps.

Though the initial data pipeline parallelized the process across different shards of the dumps files, this still took too long to complete a full run through. The issue was further complicated by memory limitations. I was constrained to working on the PAWs notebook which had a memory limit of 3 GB. This was because the PAWs notebook provided local access to the dumps files-- files which would take 1TB of space to store on my device. The issue of navigating the time and space constraints of working with such a large scale of data complicated and prolonged the time spent on this task.

Thankfully, my mentor came up with the solution of filtering out the subset of all pages which contained a template at at least one point in it's revision history. Filtering this set would be fast as it could be done efficiently via Pyspark. Doing so greatly reduced the space of pages and revisions there was to iterate through. 


<br>
<br>

# Changing Expectations: Project Goals
--- 

When I had first started on the project, I weighted it as being equally divided across the 3 main tasks in terms of importance. It only became clear to me (as I progressed along the project, and after numerous meetings with my mentors) that the first phase was actually the main goal and deliverable of the project, and that the task at hand was more complicated than I gave it credit for.

As detailed in my previous blogpost, we can construct datasets to measure content reliability by checking for the presence of [citation and verifiability related templates](https://en.wikipedia.org/wiki/Template:Citation_and_verifiability_article_maintenance_templates). The positive case is simple to obtain-- we could query Wikipedia's API for all articles containing a template. Obtaining the negative case, however, proved to be more complex than I'd first anticipated. 

We could, for instance, randomly extract a set of untagged articles to form a noisy set of negative examples. The issue here is that this noisy set could include undetected articles, which should be tagged for a template, but have escaped manual tagging. An alternative method of obtaining negatives might be to construct our set of negative examples from the gold standard of articles: [Featured Articles](https://en.wikipedia.org/wiki/Wikipedia:Featured_articles). These articles are curated by Wikipedia editors as exemplary articles. Such articles would have no maintenance templates on account of having met all of Wikipedia's stringent requirements of accuracy, neutrality, completeness, and style. However, because of this distinction, there could be clear, notable distinctions in properties between Featured Articles and other articles. This could provide signals for a Machine Learning model aimed at predicting the presence of a template, to learn to predict negative instances simply by capturing features associated with Featured Articles. 

Our method involves checking for the first case of a template being removed after having detected a template addition. The two would then form a pair of positive-negative instances. The idea is that the instance of template removal acts as a marker for a "correcting revision". That is, a legitimate template removal means that Wikipedia editors have agreed that the issue indicated by a reliability-related template has been corrected in between or at the point of the template being removed. This serves as a legitimate negative instance that directly addresses the issues in its counterpart positive instance, while still having much of the same properties (eg. in terms of the category or quality of the article).

Beyond writing a pipeline to extract these instances, we also had to take multiple complications into consideration which raised the complexity of the overall problem. For one, we found that a large majority of positive-negative pairs caught were false positives/negatives. For instance, a vandaliser blanking the contents of an entire page could result in an instance of a template removal being falsely captured, because the entire page's contents, including the templates, have been deleted. Thus, we would have to make the additional check that a revision has not been reverted at any point in the future to avoid registering these false instances.


Though a large majority of these were the result of vandalism and edit wars, some of them were from the actions of an editor who may have in good faith added or removed a template, which other editors might have ultimately disagreed with. Additionally, not all false instances can be caught by checking a revision's revertion status alone. This is why the data analysis stage in Phase 2 is just as crucial of a step. As with most data science projects, the stages of an analysis are iterative. Although I've started on Phase 2 of the project, I find myself still going back to Phase 1 as I obtain insights in the latter phase that informs my knowledge of the former. While Phase 2 serves to provide insights of the data, it's also beneficial for potentially identifying any limitations in Phase 1 in capturing legitimate examples, and if so, identifying heuristics to further understand and filtering out such illegitimate instances.

<br>
<br>

# Underestimating Your Overestimating Abilities: The Dunning-Kruger effect
--- 
As I reflect on my progress through my project so far, I'm reminded of the Dunning-Kruger effect.

The Dunning-Kruger effect is _a cognitive bias in which people with low ability at a task overestimate their ability_. Although I had always associated this effect with the process of learning itself, I hadn't realised that it could apply to one's estimation of a task itself as well. As opposed to overestimating my ability at completing a task, I had underestimated the importance of certain aspects of a task, and overestimated others. It took learning more about the task itself to actually understand it's complexities and where to focus my efforts. It's why even though I'm behind on my initial estimate of the project phases, I'm still (fortunately) on track to obtaining the main deliverables by the end of my internship. It's because the first phase of my project which I ended up spending more time on, was warranted for the additional time I did spend on it, while the remaining phases, which I thought were more important, didn't require as much of a time commitment.


As I've made progress on my project through its successes and pitfalls, I've also learned more about the complexity of achieving our goal, and in managing changing expectations throughout the project. I've come to realise that being on track to completing a task doesn't necessarily mean hitting every milestone in a project plan. Rather, it means being aware of, and adjusting to changing expectations. Despite all the setbacks detailed so far, I've fortunately been making good progress on my project, and hope to continue learning and growing for the remainder of my project.


<br>
<br>
<br>
<br>
<br>


