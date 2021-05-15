---
title: "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter"
date: "2021-05-15"
draft: false
path: "/blog/distilbert"
---

Natural Language Processing (NLP) has had huge advancements in the past few years. New models have constantly been beating previous state of the art performances. They have arrived at a point where these models are good enought to be used in the real world. This has led to a broad adaptation of Transfer Learning in the field of NLP. Pretrained General Language Models only have to be finetuned to your specific needs and can be used for any task you can think of. But those incredible performances come at a cost. The State of the art models have been exponentially increasing in model size and this only seems to make perfomance even better. DistilBERT tries to address the issue of the models getting too big in model size and proposes their 'distilled' version of BERT.

### Problem
There are essentially two problems that come with the exponential scaling of model size and complexity. Firstly the environmental cost of training such models is far from negligible. State of the art models are trained for several days on a collection of CPUs/GPUs/TPUs and have an suprisinly large carbon footprint (more on that in this Paper: [Green AI] (https://arxiv.org/pdf/1907.10597.pdf)). Secondly, if we ever want to make use of the Language models, then they would have to be compact enought to run on low computational and memory devices such as phones.

### Solution Approach
How do they approach the problem, what characterizes their solution...

### Results
Have they solved the problem. Can the success/failure be quantified?

Summary, useful links etc.
[Paper] (https://arxiv.org/abs/1910.01108v2)
[GreenAI] (https://arxiv.org/pdf/1907.10597.pdf)