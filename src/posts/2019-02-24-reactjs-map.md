---
title: Component 반복
# tags:
#   - React.js
# categories:
#   - Front-end
#   - React.js
path: /front-end/reactjs/map
date: 2019-02-25 23:19:04
---

## arr.map(callback(currentValue[, index[, array]])[, thisArg])

JavaScript 배열 객체의 내장 함수 중 하나이다. 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. 원본 배열은 건드리지 않고 그 값들만을 사용해서 혹은 약간 변형해서 새로운 배열을 만들어야 할 때 유용하다.

- **callback**: 새로운 배열의 요소를 생성하는 콜백 함수.
  - **currentValue**: 현재 처리하고 있는 요소
  - **index**: 현재 처리하고 있는 요소의 index 값
  - **array**: 현재 처리하고 있는 배열의 원본

![arr.map 실행 결과](/images/frontend/reactjs-map-1.png);

## Component map

array.map 메소드를 사용하여 기존 배열을 사용하여 컴포넌트로 구성된 배열을 생성할 수 있다.

```javascript
import React, { Component } from "react"

export default class Map extends Component {
  constructor() {
    super()

    this.fruitsList = ["사과", "바나나", "오렌지", "체리"]
  }

  render() {
    return (
      <ul>
        {this.fruitsList.map(fruits => {
          // DOM을 사용해도 되고 컴포넌트를 사용해도 된다.
          return <li>{fruits}</li>
        })}
      </ul>
    )
  }
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="oVvvga" src="//codepen.io/partykyoung/embed/oVvvga/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/oVvvga/'>oVvvga</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### key

리액트에서 key는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다. key가 없으면 가상 DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지하지만 key가 있으면 key 값을 사용하여 리스트에 어던 변화가 일어났는지 더욱 빠르게 알 수 있다.

![key를 정해주지 않으면 실행 시 경고 메시지가 뜬다.](/images/frontend/reactjs-map-2.png);

key 값을 설정할 때는 mpa 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 된다. key 값은 언제나 유일해야 한다. key값이 중복된다면 렌더링 과정에서 오류가 발생한다.

```javascript
// ... 생략

  render() {
    return (
      <ul>
        {this.fruitsList.map((fruits, index) => {
          return <li key={index}>{fruits}</li>;
        })}
      </ul>
    );
  }

// ... 생략
```

데이터가 가진 고윳값이 없으면 콜백함수의 인수인 index를 사용해도 괜찮으나 리액트 공식문서에서는 성능에 부정적인 영향을 줄 수 있으며 컴포넌트의 상태이슈를 유발하기 때문에 index를 key 값으로 쓰는것을 추천하지 않는다. 만약 key값을 명시하지 않은 경우에 리액트는 index값을 기본 값으로 할당하게 된다고 한다.

### state 활용

state를 활용하면 유동적인 데이터를 렌더링 할 수 있다.

상태 안에서 배열을 변형할 때 배열을 직접 접근하여 수정하면 자동으로 리렌더링을 트리거 하지 않는다. 다라서 concat, slice 같이 새로운 배열을 반환하는 함수들을 사용하여 새로운 배열을 만든 후 setState 메서드로 적용해야 한다.

```javascript
import React, { Component } from "react"

interface Props {}
interface State {
  fruitsList: string[];
  value: string;
}

export default class MapState extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      fruitsList: [],
      value: "",
    }
  }

  handleChange = (e: any): void => {
    this.setState({
      value: e.target.value,
    })
  }

  handleInsert = (e: any): void => {
    const { fruitsList, value } = this.state

    if (e.keyCode !== 13) {
      return
    }

    this.setState({
      fruitsList: fruitsList.concat(value),
      value: "",
    })
  }

  handleDelete = (index: number): void => {
    const { fruitsList } = this.state

    this.setState({
      fruitsList: [
        ...fruitsList.slice(0, index),
        ...fruitsList.slice(index + 1, fruitsList.length),
      ],
    })
  }

  render() {
    const { fruitsList, value } = this.state

    return (
      <div>
        <ul>
          {fruitsList.map((fruits, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.handleDelete(index)
                }}
              >
                {fruits}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handleInsert}
        />
      </div>
    )
  }
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="react typescript map" src="//codepen.io/partykyoung/embed/ZPzGdM/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/partykyoung/pen/ZPzGdM/'>react typescript map</a> by partyKyoung
  (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Reference

[리액트를 다루는 기술](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791160505238&orderClick=LAG&Kc=)
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
[Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)