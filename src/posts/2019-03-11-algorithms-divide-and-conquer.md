---
title: 분할정복 방법
# categories:
#   - Base
#   - Algorithms
# tags:
#   - Algorithms
date: 2019-03-11 02:03:57
path: /base/algorithms/divide-and-conquer
---

## 분할정복 방법

순환적으로 문제를 푸는 하향식 접근 방법.

주어진 문제의 입력을 더 이상 나눌 수 없을 때까지 두 개 이상의 작은 문제들로 순환적으로 분할하고, 이렇게 분할된 작은 문제들을 각각 해결한 후 이들의 해를 결합하여 원래의 문제의 해를 구하는 방식.

## 분할정복 방법 처리 과정

### 분할

주어진 문제를 여러 개의 작은 문제로 분할한다.

### 정복

작은 문제들을 순환적으로 분할한다. 만약 작은 문제가 더 이상 분할되지 않을 정도로 충분히 작다면 순환호출 없이 작은 문제의 해를 구한다. (정복)

### 결합

작은 문제에 대해 정복된 해를 결합하여 원래 문제의 해를 구한다.

## 분할정복 방법의 특징

- 분할된 작은 문제는 원래의 문제에 비해 입력 크기만 작아졌을 뿐 문제 자체는 원래 문제와 동일하다.
- 분할된 문제는 서로 독립적이기 때문에 각각의 작은 문제를 다시 순환적으로 분할하고 그 결과를 통합하는 것이 가능하다.

## 분할정복 방법을 적용한 알고리즘

### 이진 탐색

![이진 탐색](/images/base/algorithms-divide-and-conquer-1.png)
크기가 n인 문제를 크기가 n/2인 두 개의 작은 문제로 분할한다. 그 중 하나의 작은 문제는 처리 대상에서 제외한다.

### 합병 정렬

![합병 정렬](/images/base/algorithms-divide-and-conquer-2.png)
크기가 n인 문제를 크기가 n/2인 두 개의 작은 문제로 분할한다.

### 퀵 정렬

![퀵 정렬](/images/base/algorithms-divide-and-conquer-3.png)
크기가 n인 문제를 쿠기는 감소하지만 일정하지 않은 크기의 두 개의 작은 문제로 분할한다.

### 선택 문제

![선택 문제](/images/base/algorithms-divide-and-conquer-4.png)
크기가 n인 문제를 크기는 감소하지만 일정하지 않은 크기의 두 개의 작은 문제로 분할한다. 그중 하나의 작은 문제는 처리 대상에서 제외한다.

## Reference

[방송대 컴퓨터과학과 알고리즘 3강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920026935&condLscValue=001&condYr=&condSmst=)