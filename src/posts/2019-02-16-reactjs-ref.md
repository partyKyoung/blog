---
title: ref
date: 2019-02-17 21:31:49
# tags:
#   - React.js
# categories:
#   - Front-end
#   - React.js
path: /front-end/reactjs/ref
---

일반 HTML에서 DOM 요소에 이름을 달고 접근할 때 id를 사용한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>DOM ID</title>
    <link rel="stylesheet" type="text/css" href="./angry-heavy-rain.css" />
  </head>
  <body>
    <div id="me">DOM ID</div>
    <button type="button" onclick="clickDOM()">클릭</button>
  </body>
  <script>
    function clickDOM() {
      const me = document.getElementById("me")

      me.style.backgroundColor = "red"
    }
  </script>
</html>
```

<iframe height="265" style="width: 100%;" scrolling="no" title="DOM Id" src="//codepen.io/partykyoung/embed/YBRmYx/?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/YBRmYx/'>DOM Id</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## ref

HTML에서 id를 사용하여 DOM에 이름을 다는 것 처럼 리액트에서는 ref를 사용하여 DOM에 이름을 달 수 있다.

리액트에서도 id를 사용할 수 있지만 특수한 경우가 아니면 사용을 권장하지 않는다. DOM의 id는 유일해야 하는데 컴포넌트를 여러번 사용하면 중복 id를 가진 DOM이 여러개 생기게 되는 경우가 있기 때문이다. 이런 상황에서는 컴포넌트를 만들 때 마다 중복 id가 발생하는 것을 방지해야 한다.

ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 이런 문제가 생기지 않는다.

### ref를 사용해야 할 때

ref는 state나 props로 해결할 수 없고 DOM을 꼭 직접적으로 건드려야 할 때 사용한다.

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등

### ref 사용법

ref를 달아야 하는 DOM에 props를 설정하듯이 ref를 설정햐면 된다. ref 값으로는 콜백 함수를 전달한다. 콜백 함수는 ref를 파라미터로 가지며 콜백 함수 내부에서 컴포넌트의 맴버 변수에 ref를 담는 코드를 작성한다.
ref 이름은 자유롭게 지정할 수 있다.

```javascript
import React, { Component } from "react"

export default class Ref extends Component {
  constructor() {
    super()

    this.input = null
  }

  handleFocus = () => {
    this.input.focus()
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            // this.input은 input 요소의 DOM을 가리킨다.
            this.input = input
          }}
        />
        <button type="button" onClick={this.handleFocus}>
          클릭
        </button>
      </div>
    )
  }
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="react ref" src="//codepen.io/partykyoung/embed/OdaKZw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/OdaKZw/'>react ref</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 컴포넌트에 Ref 달기

리액트에서는 컴포넌트에도 ref를 달 수 있다. 이 방법은 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 쓴다. 컴포넌트에 ref를 다는 방법은 DOM에 ref를 다는 방법과 똑같다.

#### ChildRef.js

```javascript
import React, { Component } from "react"

export default class ChildRef extends Component {
  constructor() {
    super()

    this.box = null
  }

  handleScroll = () => {
    const { scrollHeight, clientHeight } = this.box

    this.box.scrollTop = scrollHeight - clientHeight
  }

  render() {
    const style = {
      border: "1px solid #000000",
      height: "300px",
      width: "300px",
      overflow: "scroll",
    }

    const innerStyle = {
      height: "600px",
      width: "100%",
      background: "linear-gradient(white, black)",
    }

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref
        }}
      >
        <div style={innerStyle} />
      </div>
    )
  }
}
```

#### ParentRef.js

```javascript
import React, { Component } from "react"

import ChildRef from "./ChildRef"

export default class ParentRef extends Component {
  constructor() {
    super()

    this.scroll = null
  }

  handleClick = () => {
    /* 
      컴포넌트가 처음 랜더링 될 때는 this.scroll 값이 undefined 이므로 메서드를 호출 할 때 오류가 발생한다. 

      화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 메서드를 실행하면 이미 한번 랜더링한 시점이므로 메서드 값을 읽어와서 실행하기 때문에 오류가 발생하지 않는다. 
    */

    this.scroll.handleScroll()
  }

  render() {
    return (
      <div>
        <ChildRef
          ref={ref => {
            this.scroll = ref
          }}
        />
        <button type="button" onClick={this.handleClick}>
          맨 밑으로
        </button>
      </div>
    )
  }
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="react component ref" src="//codepen.io/partykyoung/embed/yZGBjV/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/yZGBjV/'>react component ref</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 마무리

컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용한다. 먼저 ref를 사용하지 않고도 원하는 기능을 구현할 수 있는지 꼭 고려한 후 사용해야 한다.

서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하는 것을 잘못된 방법이다. 할 수는 있지만 리액트 사상에 어긋난 설계이다. 앱 규모가 커지면 구조가 꼬여버려 유지보수가 불가능하기 때문이다. 컴포넌트끼리 데이터를 교류할 때는 언제나 부모 <-> 자식 흐름으로 교류해야 한다.

## Reference

[리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)