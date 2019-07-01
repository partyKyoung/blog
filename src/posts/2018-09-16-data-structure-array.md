---
title: 배열
tags:
  - Data structure
categories:
  - Base
  - Data Structure
date: 2018-11-11 23:03:46
path: /base/data-structure/array
---

## 배열

인덱스와 원소값(<index, value>)의 쌍으로 구성된 집합.
예를 들면 101호, 201호, 301호.. 처럼 호수(인덱스) 순으로 표현되는 아파트(메모리 영역, 원소값을 위한 저장소)라고 생각하면 쉽다.

## 배열의 특징

- 원소들이 모두 같은 자료형, 즉 동질의 값과 기억 공간의 크기가 같다.
- 원소의 메인 메모리 공간(메인 메모리 주기억 장치)에서의 물리적인 위치를 '순서'적으로 결정한다.
- 배열 각 원소의 물리적인 위치(메모리 주소)의 순서가 배열의 인덱스 순서(논리적인 순서)와 일치한다. 즉 배열의 순서는 메모리 공간에서 저장되는 '원소값의 물리적 순서'를 의미한다.
- 배열의 인덱스 값을 이용해서 배열의 원소값에 직접 접근 할 수 있다.

  ![메모리 할당과 메모리 주소](/images/base/data-structure-array-01.png)
  배열의 인덱스 값은 물리적으로 컴퓨터가 처리하는 값이 아니라 사람이 이해하고 직관적으로 받아들이기 위해 정의한 값이고 이 값을 컴퓨터가 해석하여 물리적인 값으로 변환하고 이를 전기적인 신호로 바꾸어 계산한다.

## 1차원 배열

![1차원 배열](/images/base/data-structure-array-02.png)
가장 기본적인 배열은 1차원 배열이다. 한 줄짜리 배열을 의미하므로 인덱스는 하나이다.

![1차원 배열](/images/base/data-structure-array-03.png)
배열의 원소들은 컴퓨터 메모리의 연속적은 기억장소에 할당되어 순차적으로 저장된다. 배열 A가 있을 때 A[i]는 배열의 첫번째 원소 A[0]이 저장된 주소인 a로부터 시작하여, A[0]부터 A[i - 1]개 까지 i개의 배열 A[]를 지나서 저장된다. 따라서 A[]의 크기를 k라고 가정하면, A[i] 저장 주소는 a + i \* k 가 된다.

## 2차원 배열

![2차원 배열](/images/base/data-structure-array-04.png)
1차원 배열을 여러개 쌓아 놓으면 2차원 배열이 된다.
2차원 배열에서 하나의 원소는 두 개의 첨자 i와 j의 쌍으로 구분되며 두 개 이상의 첨자가 필요한 배열을 총칭해서 다차원 배열이라고 한다. i에 해당하는 것을 행(row)이라고 하고 j에 해당하는 것을 열(column)이라고 한다.

![2차원 배열](/images/base/data-structure-array-05.png)
2차원 배열은 하나의 행을 연속적으로 메모리에 할당하고 그 다음 행을 메모리 영역에 할당한다.
2차원 배열은 행렬을 프로그램으로 구현하는 경우에 많이 사용된다. 보통 행렬은 컴퓨터과학 분야에서 객체 간의 관계, 네트워크의 시뮬레이션, 최단거리 계산 등에 사용된다.

## 희소행렬

행렬 중 원소값이 0인 원소가 그렇지 않은 원소보다 상대적으로 많을 때 이를 희소행렬이라 한다. 컴퓨터 메모리의 낭비를 막고 효율성을 높히기 위해서 희소행렬의 0인 원소는 저장하지 않고 0이 아닌 값만을 따로 모아서 저장하는 방법이 필요한데 이를 2차원 배열로 표현할 수 있다.

## Reference

[방송대 컴퓨터과학과 자료구조 1강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920025679&condLscValue=001&condYr=&condSmst=)