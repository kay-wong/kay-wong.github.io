---
title: "Wrapping up my Outreachy internship with Wikimedia"
published: true
abstract: "As I reflect on my internship journey, it's amazing to see how far I've come, and how much there is to be thankful for. So without much further ado, here is my final wrap-up blog post on my Outreachy internship with the Wikimedia Foundation ... "
---

I'm finally publishing my last Outreachy blog, which has been long overdue. Though my internship officially ended at the beginning of March, I was working with my mentors on submitting the results of my internship as a conference paper. It was hectic, but also a really exciting experience!

As I reflect on my internship journey, it's amazing to see how far I've come, and how much there is to be thankful for. So without much further ado, here is my final wrap-up post on my Outreachy internship with the Wikimedia Foundation. 

<br>
<br>


# WikiReliability: A large scale dataset for Content Reliability on Wikipedia
---
My internship project on "Creating Machine Learning datasets to Measure Content Reliability" has seen a lot of progress from when I'd first written about it in a previous [blog post]({{ site.url }}{{ site.baseurl | append:'/2021/01/15/creating-machine-learning-datasets-to-measure-content-reliability/' }}) of mine. 

I'm excited to share that we've since released our content reliability datasets, titled WikiReliability, which we've published [here](https://figshare.com/articles/dataset/Wiki-Reliability_A_Large_Scale_Dataset_for_Content_Reliability_on_Wikipedia/14113799). Our final datasets are constructed from the top 10 most popular reliability-related templates on Wikipedia. We've released both text-level and metadata feature-level datasets, in the hopes of encouraging future work from open source and research communities on automatic content reliability detection on Wikipedia.

We also shared [Jupyter notebook code examples](https://public.paws.wmcloud.org/User:0xkaywong/WikiReliability-Benchmarking.ipynb), which demonstrate how to make use of the data, and which benchmark the quality of our datasets on multiple Machine Learning models.

Beyond the dataset and benchmarking deliverables, our main contribution is a template-based methodology for extracting such datasets on Wikipedia. This means that the approach is applicable towards similar datasets for other templates on Wikipedia. It was also important to us that our final approach was language agnostic, which means that the method is transferable to other language versions of Wikipedia as well. 

We released our code for dataset construction on [our GitHub page](https://github.com/kay-wong/Wiki-Reliability). A full report of my research project is also available on [Meta-Wiki](https://meta.wikimedia.org/wiki/Research:Wiki-Reliability:_A_Large_Scale_Dataset_for_Content_Reliability_on_Wikipedia), describing in full detail our dataset, methodology, and benchmarking results.

<br>
<br>

# Next Steps for the Project
---
Having worked on my project for the last few months, I realised that there's still a lot to be done within the WikiProjectReliability project's efforts to ensure content reliability on Wikipedia. 

There are still some questions and areas for improvement which I wish we had more time to tackle in these short 3 months of my internship. For example, a crucial next step is to expand our datasets to other languages beyond English Wikipedia. 

The beauty of open source is that I (and others drawn to this project) can continue to contribute to this. Though my internship has ended, I'm looking forward to continuing with contributing to this important effort.
<br>
<br>

# What I've Learned
---
Since starting on the project, I've been learning a lot about the Wikimedia ecosystem, and how it pertains to the goals of the project. 

I've learned a lot not only from the technical side of working with Wikipedia's tools and APIs, but also gained a deep appreciation of the Wikipedia community, their rich set of community governed policies and guidelines, and how they inform the inner workings of Wikipedia.

Beyond achieving my project goals, my Outreachy internship has helped me become more confident not only in my abilities, but also in myself. 

I'd like to sincerely thank my mentors Miriam Redi and Diego Saez-Trumper for their mentorship and support throughout my internship. Being able to conduct my internship under their guidance was truly an invaluable experience and I couldn't have asked for a better set of mentors! 

My Outreachy internship experience was truly life changing for me, and I'm also grateful for the supportive Outreachy organizers and community, and my fellow Outreachy interns, for all our conversations and shared insights.
<br>
<br>

# What's Next?
---
I'd like to continue working in the open source space, and am excited to explore more of Wikimedia and all the amazing open source communities out there!

<br>


> ***\<self-promotional content\>***

I have a background in Natural Language Processing, Machine Learning, and Civic Tech, and have had prior research and work experience in all three. I've had 2 years of work experience in ML-Ops and Data Science, and a demonstrated history of working and contributing in the civic technology space.

I'm open to (but not limited to) remote Data Scientist, Machine Learning Engineering or Data Engineering roles. Please do check out my [resume](https://drive.google.com/file/d/1c-aOY9ALImiov-bNWDwIb9teo6Vooa78/view?usp=sharing) and my [About Me]({{ site.url }}{{ site.baseurl | append:'/2020/12/02/outreachy-blog-1-about-me/' }}) post!

> ***\</self-promotional content\>***

<br>

I would love to work with a community with the same ideals of open source for social good, where I can continue to learn and grow. Although my amazing Outreachy internship with the Wikimedia Foundation has come to an end, my journey in open source has just begun. 
<br>
<br>
<br>
_I'm excited for what comes next._
<br>
<br>
<br>
<br>
<br>