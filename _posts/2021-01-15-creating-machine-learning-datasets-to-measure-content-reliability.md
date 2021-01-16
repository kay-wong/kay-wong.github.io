---
title: "Creating Machine Learning Datasets to Measure Content Reliablity on Wikipedia"
published: true
abstract: "Is Wikipedia reliable? It’s an age-old question that most of us have probably encountered, and has also been the subject of some tongue-in-cheek references. Since 2001, Wikipedia, the free encyclopedia that anyone can edit, has grown to become the world’s largest reference website, due largely in part to the collaborative nature of the project..."
---

Is Wikipedia reliable?

It’s an age-old question that most of us have probably encountered, and has also been the subject of some tongue-in-cheek references. 

![image-title-here]({{ site.baseurl }}/images/michael_scott_on_wikipedia.png){:class="img-responsive"}

<br>

Since 2001, Wikipedia, the _free encyclopedia that anyone can edit_, has grown to become the world’s largest reference website, due largely in part to the collaborative nature of the project. The volunteer-run nature of the project though, also serves as the source of many challenges for Wikipedia. Because _anyone can edit_, Wikipedia is subject to containing information that could be vandalism, incomplete, or just plain incorrect.

<br>
<br>


# Content Moderation on Wikipedia
---
Thanks to Wikipedia’s volunteer community of editors and maintainers, Wikipedia’s content has been shown to be reliable and of high quality across many topics [[1,2]](#references). On Wikipedia, the review and moderation of content is usually self-governed by Wikipedia’s volunteer community of editors, through collaboratively created policies and guidelines [[3, 4]](#references).

However, despite the size of Wikipedia’s community (41k monthly active editors for English Wikipedia in 2020 [[5]](#references)), the labor cost of maintaining Wikipedia’s content is intensive: Wikipedia patrollers reviewing at a rate of 10 revisions/minute would still need 483 labour hours per day to review 290k edits saved across all the various language editions of Wikipedia [[6]](#references). 


<br>
<br>

# Automated Content Moderation on Wikipedia
---
Automation, from automated tools to Machine Learning models, has been key to helping Wikipedia’s community of editors moderate the quality and reliability of content at massive scales.

Community authored tools by dedicated editors and researchers have long been deployed across different language communities on Wikipedia. Automated tools (such as [Huggle](https://en.wikipedia.org/wiki/Wikipedia:Huggle) and [STiki](https://en.wikipedia.org/wiki/Wikipedia:STiki)) and Machine-Learning based bots ([Cluebot NG](https://en.wikipedia.org/wiki/User:ClueBot_NG)) have been used for counter-vandalism, to flag and/or remove instances of vandalism and inappropriate edits. Models for predicting article quality have also been explored to assist Wikipedia’s editors in identifying coverage gaps in article content to be improved upon [[6, 7]](#references).

Wikimedia also maintains the ORES service [[7, 8]](#references), an open source algorithmic scoring service which enables the scoring of Wikipedia edits in real time, through the use of multiple independent Machine Learning classifiers. The web service [supports](https://www.mediawiki.org/wiki/ORES) the automation of multiple tasks with support across different language Wikis. This includes models for predicting edit quality, article quality, and even topic routing.

Through the use of Machine Learning models and constant patrolling, most damaging edits are reverted within seconds of an edit being saved [[9]](#references). With the large labor costs associated with patrolling new edits, automated strategies are beneficial to helping Wikimedia’s community of maintainers avoid a task overload, allowing them to focus their efforts on more beneficial content moderation efforts.

<br>
<br>

# Machine Learning Datasets for Content Reliability on Wikipedia
---
Beyond counter-vandalism, another important goal of Wikipedia is to ensure the [reliability](https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Reliability) of its articles. This means ensuring that content in articles are _verifiable_ (i.e referenced), and _reliable_ (i.e referenced by reliable published sources). My internship project serves to further this goal of automating the measurement of content reliability, by building Machine learning datasets to serve this purpose. 

<br>

## How is reliability measured?

As mentioned before, the content on Wikipedia is self-governed by its community, who have created a rich set of policies and guidelines enforcing norms on the nature of the content. One of the ways reliability is governed in Wikipedia is through the use of [templates](https://en.wikipedia.org/wiki/Help:A_quick_guide_to_templates). An example of a template (and perhaps the most notable one,) is [Citation Needed](https://en.wikipedia.org/wiki/Template:Citation_needed), which marks that a statement requires a reference. Another example is [Self-Contradictory](https://en.wikipedia.org/wiki/Template:Self-contradictory), which mark that an article contains claim(s) which contradict each other.

Templates present as messages on a page they’re included in, and serve as a warning of sorts for gaps in reliability of the page’s content. The presence of templates serve as a warning marker not just for the reader, but also as a tag for maintenance purposes, which points out to editors that moderation fixes are needed to improve the quality of an article. Thus, we can get an idea for the reliability of an article by checking for the presence of [citation and verifiability related templates](https://en.wikipedia.org/wiki/Template:Citation_and_verifiability_article_maintenance_templates).

<br>

## Machine Learning datasets to measure reliablity
The goal of the project is to construct datasets for measuring reliability. Towards this aim, we intend to construct datasets of positive and negative instances of articles containing a template. Each dataset would consist of positives (instances of an article which contain a reliability template), and negatives (instances of an article which do not), and this is repeated across many reliability templates. Obtaining this dataset of contrasting examples opens the doors to many possibilities in measuring content reliability. Statistical analyses could be performed to understand the differences amongst positive and negative examples, which could provide insight on measures and indicators for reliability. Further, Machine Learning models could be trained on this data in order to automate the task of predicting whether or not an article should be tagged with a template.

<br>
<br>

# Project Phases
---

The project can be broken down into the following 3 main phases: 

<br>

## 1. Obtaining the Data
This constitutes a large part of the project, and what I have been working on thus far. This stage involves exploring the space of templates related to content reliability using semi-automated methods, and identifying heuristics that could be used to algorithmically obtain instances of positive and negative classes of templates. Ultimately, the main deliverable from this phase would be to write an efficient data pipeline for obtaining these instances.


## 2. Data Analysis
Upon obtaining our dataset, the next step would be to analyse the data to summarise main statistics of the difference between positive and negative instances of templates. This involves producing useful visualisations of the statistics and data properties associated with our data. This stage would help in improving our understanding of features of the data, and could also provide insights on useful features that might inform our construction of the final dataset and the features associated with it.

## 3. Building Benchmark Models
The final stage would be to benchmark the datasets on some ML algorithms, in order to test the quality and informativeness of these datasets. These benchmark datasets would also serve as initial benchmark models for future practitioners to compare their results against.

<br>
<br>

# Community and Impact
---

Wikipedia’s content is generally reliable, largely thanks to the effort of its dedicated community of editors and researchers. The beauty of Wikipedia is that it’s not just an open knowledge project, but one whose principles of open source extends to open data ([Wikidata](https://www.wikidata.org/wiki/Wikidata:Main_Page)) and open research ([Wikiworkshop](https://wikidataworkshop.github.io/)) as well. While there are ML models integrated on server-side code, Wikipedia strongly encourages open participation in Machine Learning as well, with a large community of volunteer Wikipedian developers. Wikipedia’s focus on releasing datasets that are open and accessible supports these communities who build bots and tools, which in turn supports a large part of Wikipedia’s collaborative governance practices. It’s why I’m really excited about this project, which will hopefully serve as a first step towards building upon future data analysis and automation tasks related to measuring content reliability. Follow my blog to get future updates of my progress on this project!


<br>
<br>
<br>

---
# References
---

> [1] Jim Giles. 2005. Internet encyclopaedias go head to head. Nature 438, 7070 (Dec. 2005), 900–901.
>
> [2] Stacey M Lavsa, Shelby L Corman, Colleen M Culley, and Tara L Pummer. 2011. Reliability of Wikipedia as a medication information source for pharmacy students. Currents in Pharmacy Teaching and Learning 3, 2 (2011), 154–158
>
> [3] Ivan Beschastnikh, Travis Kriplean, and David W McDonald. 2008. Wikipedian Self-Governance in Action: Motivating the Policy Lens.. In ICWSM
>
> [4] Andrea Forte, Vanesa Larco, and Amy Bruckman. 2009. Decentralization in Wikipedia Governance. Journal of Management Information Systems 26, 1 (2009), 49–72.
>
> [5] https://stats.wikimedia.org/#/en.wikipedia.org/contributing/active-editors/normal\|line\|2020-01-01~2020-12-31\|~total\|monthly
>
> [6] Dan Cosley, Dan Frankowski, Loren Terveen, and John Riedl. 2007. SuggestBot: using intelligent task routing to help people find work in wikipedia. In Proceedings of the 12th international conference on Intelligent user interfaces. ACM, 32–41.
>
> [7] Aaron Halfaker and R. Stuart Geiger. 2020. ORES: Lowering Barriers with Participatory Machine Learning in Wikipedia. Proc. ACM Human Computer Interaction. 4, CSCW2, Article 148 (October 2020), 37 pages.
>
> [8] https://www.mediawiki.org/wiki/ORES
> 
> [9] R Stuart Geiger and Aaron Halfaker. 2013. When the levee breaks: without bots, what happens to Wikipedia’s quality control processes?. In Proceedings of the 9th International Symposium on Open Collaboration. ACM, 6.

<br>
<br>
<br>
<br>
<br>