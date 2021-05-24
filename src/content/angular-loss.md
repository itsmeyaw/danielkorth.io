---
title: "Angular Loss for Deep Metric Learning"
date: "2021-04-17"
draft: true
path: "/blog/angular-loss"
---

Deep Metric Learning is a concept that tries to combine deep learning, the AI you hear everywhere nowadays, and metric learning, which is all about learning functions to measure the distance of two points.

Angular loss is a loss that is used to address some possible issus that come with using other similarity metrics such as contrastive loss and triplet loss.
Both contrastive loss and triplet loss are based on minimizing the distance between images that are similar, and increasing the distance when the two images are different. In that way we try to cluster similar images together whilst separating it from other clusters. Contrastive loss is just trying to optimize similarity between images, whereas triplet loss does also takes into account the relative distance to positive and negative images.
Angular loss is taking a different approach of optimizing this problem. It tries to minimize an angle. Doing so has some interesting benefits...