---
title: 컴퓨터 보안 개념
date: 2019-04-07 19:15:27
# tags:
#   - Computer security
# categories:
#   - Base
#   - Computer security
path: /base/computer-security/computer-security
---

## 컴퓨터 보안

다양한 형태의 정보 중 컴퓨팅 환경이 관여된 모든 상황에 대한 정보보호.

- 정보보호: 저장되어 있거나 전달 중인 정보를 허락되지 않은 접근, 수정, 훼손, 유출 등의 위협으로부터 보호하기 위한 정책 및 기법.

## 컴퓨터 보안의 목표

기밀성, 무결성, 가용성이 컴퓨터 보안의 가장 중요한 목표 이다.

### 기밀성

허락되지 않은 자가 정보의 내용을 알 수 없도록 하는 것.
기밀성을 지키기 위해서는 허락되지 않은 자가 정보에 접근을 아예 못하도록 할 수도 있고, 정보에 접근하더라도 무의미한 내용만 보이도록 할 수 있다.

ex)
고객의 개인정보를 제 3자에게 알려지는 것을 방지하기 위해 보호하는 것.

### 무결성

허락되지 않은 자가 정보를 함부로 수정할 수 없도록 하는 것.
만약 허락되지 않은 자에 의한 수정이 발생했다면 이를 확인할 수 있는것 역시 무결성을 지키는 방법이다.

ex)
데이터베이스에 고객의 정보가 저장되어 있다면 그 내용이 임의로 수정되지 않도록 보호하는 것.
고객 본인이 본인의 회원정보를 확인할 때 이 과정에서도 내용이 위변조 되지 않도록 보호하는 것.

### 가용성

허락된 자가 정보에 접근하고자 할 때 이것이 방해받지 않도록 하는 것.
즉, 정보에 대한 접근권한이 있는 자는 필요할 때 언제든지 정보를 사용할 수 있어야 한다.
결국 가용성은 정해진 시간 내에 정보를 볼 수 있음을 보장한다.

ex)
고객이 회원정보를 수정하기 위해 회원정보를 확인하고자 할 때 즉시 조회가 가능하게 하는 것.

### 그 외 목표들

부인방지, 인증, 접근제어 등이 있다.

#### 부인방지

정보에 관여한 자가 이를 부인하지 못하도록 하는 것.

ex)
정보를 보낸 사람이 나중에 정보를 보냈다는 것을 부인하지 못하도록 하는 발신 부인방지.
정보를 받은 사람이 나중에 받지 않았다는 것을 부인하지 못하도록 하는 수신 부인방지.

#### 인증

정보 또는 정보를 이용하는 사용자가 정말 주장하는 정보 또는 사용자가 맞는지 확인할 수 있고 신뢰할 수 있는 것.

#### 접근제어

정보에 대해 허락한 접근만 허용하고 그 외의 접근은 허용하지 않는 것.
접근권한이 있는 자는 정보에 대한 접근을 허용하고 접근권한이 없는 자는 정보에 접근하지 못하게 하는 것이다. 이때 접근권한은 정보나 사용자에 따라 다양하게 부여될 수 있다.

## 정보화 환경과 역기능

과거 정보통신기술이 미약하던 시대에는 정보의 전달이 대부분 인편에 의존하였기 때문에 정보의 전파가 굉장히 느렸다. 그러다가 통신회선이 깔리면서 전보나 전화를 통해 정보의 전파속도가 빨라졌고, 이제는 인터넷을 통해 지구 반대편에서 일어나는 일도 실시간으로 알 수 있을 만큼 정보는 빠르게 움직이고 있다.

이처럼 정보화 사회가 선진화 됨에 따라 악성 댓글, 스팸 메일, 개인정보 유출, 금전적인 목적을 대상으로 하는 피싱이나 파밍, 스미싱 등에 따른 개인적인 피해가 증가하고 있으며 불건전 정보 유통, 사생활 침해 등과 같은 부작용이 심각한 사회문제로 대두되고 있다. 이러한 문제점은 보이스 피싱, 문자 메시지나 인스턴트 메시지를 이용한 스미싱, 랜섬웨어 같은 새로운 수법이 등장하면서 대처를 더욱 어렵게 하고 있다.

주요 기반 시설이 점차 정보통신 네트워크에 의해 관리 및 통제 됨에 따라 정보통신 인프라의 위협이 주요 기반 시설의 위협으로까지 확장되고 있으며, 결국 이는 국가 안보적인 측면에서 위험이 될 수 있다.

## Reference

[방송대 컴퓨터과학과 컴퓨터 보안 1강](http://press.knou.ac.kr/goods/textBookView.do?condCmdtCode=9788920020759&condLscValue=001&condYr=&condSmst=)