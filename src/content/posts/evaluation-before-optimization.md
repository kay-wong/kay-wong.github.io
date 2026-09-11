---
title: "Evaluation before optimization"
description: "A working note on choosing the question before tuning the model."
date: 2026-03-08
category: Machine learning
tags: [Machine learning, Evaluation]
comments: true
commentId: evaluation-before-optimization
---

*Example post — replace with your own writing before publishing.*

It is easy to start a machine learning experiment with a model. A more useful starting point is a question: what would count as an improvement, and how would we know?

An evaluation is a small, executable statement of what matters. The difficult part is deciding what that statement should leave out.

## Start with the decision

Suppose a classifier helps someone decide which documents to review. Accuracy alone does not describe that workflow. Missing an important document and adding an unnecessary document to the queue have different consequences.

Before training, write down three things:

1. The decision the prediction will inform.
2. The kinds of mistakes that matter.
3. The data available at the moment of that decision.

That last point is especially useful. A field that appears in a historical dataset may only become available after the outcome. A convenient feature can quietly become leakage.

## Keep a small baseline

A baseline should be easy to understand and inexpensive to rerun. Its purpose is to expose problems in the evaluation before a more complicated model makes those problems harder to see.

```python
def precision_at_k(labels, scores, k):
    if not 0 < k <= len(labels) or len(labels) != len(scores):
        raise ValueError("Expected aligned inputs and a valid k")
    ranked = sorted(range(len(scores)), key=scores.__getitem__, reverse=True)
    return sum(labels[i] for i in ranked[:k]) / k
```

Even a short function has assumptions: labels are binary, higher scores mean higher relevance, and the review budget is fixed. Record those assumptions next to the result.

## Look beyond the aggregate

For binary labels $y_i$ and predictions $\hat{y}_i$, the mean error is:

$$
\hat{R} = \frac{1}{n}\sum_{i=1}^{n}\mathbf{1}[y_i \ne \hat{y}_i]
$$

This compresses many decisions into one number. It can hide the parts of the data where the system is least useful.

| Slice | Question to ask |
| --- | --- |
| Recently collected data | Does the result survive changes over time? |
| Short documents | Is there enough context for the model? |
| Rare categories | Are averages hiding a weak result? |

Keep the slices tied to the intended use. Looking at enough arbitrary slices will eventually produce a striking number by chance.

## Make the next experiment legible

> Change one meaningful thing, and write down what you expect to happen before running it.

A useful experiment record includes the dataset version, split rule, baseline, proposed change, and observed result. Add a short explanation of what you learned, including when the result did not support the original hypothesis.

The goal is a chain of decisions that someone else can inspect. Better models can follow from that; a trustworthy evaluation makes their improvement visible.
