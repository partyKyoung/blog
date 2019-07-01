---
title: Node.js 내장 객체
tags: ["back-end", "node.js"]
# tags:
#   - Node.js
# categories:
#   - Back-end
#   - Node.js
path: /back-end/nodejs/global
date: 2019-01-10 12:28:04
---

Node.js에서는 기본적인 내장 객체와 내장 모듈으르 제공한다. 브라우저의 window 객체와 비슷하다고 보면 된다.
노드에는 DOM이나 BOM이 없어 window와 document 객체를 사용할 수 없다. 노드에서 window나 document를 사용하면 에러가 발생한다.

## global

브라우저의 window와 같은 전역 객체이다. 모든 파일에서 접근할 수 있다. window.open 메서드를 그냥 open으로 호출할 수 있는 것 처럼 global도 생략 가능하다.
전역 객체라는 점을 이용하여 간단한 데이터를 파일끼리 공유할 때 사용하기도 하나 프로그램의 규모가 커질 수록 어떤 파일에서 global 객체에 값을 대입했는지 찾기 힘들어 유지보수에 어려움을 겪게 되기 때문에 남용하면 안된다.

## console

노드에서는 window 대신 global 객체 안에 console이 들어있다. 브라우저에서의 console과 거의 비슷하다. console 객체는 보통 디버깅을 위해 사용된다.

- console.time(레이블): console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정한다.
  ![console.time](/images/backend/node-global-01.png)

- console.log(내용): 평범한 로그를 콘솔에 표시한다.
  ![console.log](/images/backend/node-global-02.png)

- console.error(에러): 에러를 콘솔에 표시한다.
  ![console.error](/images/backend/node-global-03.png)

- console.dir(객체, 옵션): 객체를 콘솔에 표시할때 사용한다. 첫 번째 인자로 객체를 넣고 두 번째 인자로 옵션을 넣는다.
  ![console.dir](/images/backend/node-global-04.png)

- console.trace(레이블): 에러가 어디서 발생했는지 추적할 수 있게 해준다.
  ![console.trace](/images/backend/node-global-05.png)

## 타이머

타이머 기능을 제공하는 함수인 setTimeout, setInterval, setImmediate는 노드에서 window 대신 global 객체 안에 들어있다. 이 타이머 함수들은 모두 아이디르르 반환하고 이 아이디를 사용하여 타이머를 취소할 수 있다.

- setTimeout(콜백 함수, 밀리초): 주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행한다.
- clearTimeout(아이디): setTimeout을 취소한다.

- setInterval(콜백 함수, 밀리초): 주어진 밀리초마다 콜백 함수를 반복 실행한다.
- clearInterval(아이디): setInterval을 취소한다.

- setImmediate(콜백 함수): 콜백 함수를 즉시 실행한다.
- clearImmediate(아이디): setImmediate를 취소한다.

## **filename, **dirname

노드는 **filename, **dirname이라는 키워드로 경로에 대한 정보를 제공한다. 파일에 **filename과 **dirname을 넣어두면 파일 실행 시 현제 파일명과 파일 경로로 바뀐다.
경로가 문자열로 반환되가도 하고 \나 /같은 경로 구분자 문제도 있어 보통은 이를 해결해주는 path 모듈과 함꼐 쓴다.

## module, exports

모듈을 만들때 주로 module.exports를 사용하지만 module 객체 말고 exports 객체로도 모듈으르 만들 수 있다.

- module.exports

```javascript
const test = 0
const test2 = 1

module.exports = {
  test,
  test2,
}
```

- exports

```
  exports.test = 0
  exports.test2 = 1
```

module.exports와 exports가 동일하게 동작하는 이유는 module.exports와 exports가 같은 객체를 참조하기 때문이다.
exports 객체 사용 시 module.exports와의 참조 관계가 깨지지 않도록 주의해야 한다. module.exports에는 어떤 값이든 대입해도 되지만 exports에는 객체만 대입할 수 있다. 만약 exports에 다른 값을 대입하면 객체의 참조 관게가 끊겨 더 이상 모듈로 기능하지 않는다.

exports와 module.exports에는 참조 관계가 있으므로 한 모듈에 exports 객체와 module.exports를 동시에 사용하지 않는 것이 좋다.