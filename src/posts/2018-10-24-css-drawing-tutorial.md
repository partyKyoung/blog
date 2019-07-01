---
title: css drawing 튜토리얼 - 호무새 그리기
date: 2018-10-24 11:28:25
# tags:
#   - HTML
#   - CSS
# categories:
#   - Front-end
#   - Css
path: /front-end/css/css-darwing-heavyrain
---

요즘 css drawing 에 맛들려 시간날 때마다 조금씩 css drawing을 작업하다가 튜토리얼을 간단하게 작성해보기로 했다.

![출처: 치킨쿤 유튜브 썸네일](/images/frontend/css-drawing-tutorial-01.png)
위의 이미지는 호무새 방송시 구독 메시지와 같이 출력되는 이미지인데 튜토리얼용으로도 괜찮을것 같아서 캡쳐해왔다. css로 이 이미지를 한번 작업해보자.

![](/images/frontend/css-drawing-tutorial-02.png)
먼저 어떻게 영역을 나눠볼지 정해보자.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>호무새</title>
    <link rel="stylesheet" type="text/css" href="./angry-heavy-rain.css" />
  </head>
  <body>
    <div class="heavy-rain">
      <div class="heavy-rain-eyes left"></div>
      <div class="heavy-rain-eyes right"></div>
      <div class="heavy-rain-mouse-line"></div>
      <div class="heavy-rain-mouse"></div>
    </div>
  </body>
</html>
```

얼굴안에 눈, 부리가 있으니 얼굴이 될 div안에 눈, 부리 영역을 div로 잡아 넣어주었다. 이제 css를 작성해보자.

## 얼굴

![호무새 얼굴](/images/frontend/css-drawing-tutorial-03.png)

```css
/* 얼굴 */
.heavy-rain {
  position: relative;
  width: 380px;
  height: 380px;
  margin: 70px auto 0;
  border-radius: 50%;
  background-color: #54bc89;
}

/* 머리 위의 꽁지들 */
.heavy-rain:before,
.heavy-rain:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  background-color: #54bc89;
}

.heavy-rain:before {
  width: 50px;
  height: 90px;
  right: 100px;
  top: -50px;
  transform: rotate(20deg);
}

.heavy-rain:after {
  width: 50px;
  height: 70px;
  right: 65px;
  top: -10px;
  transform: rotate(45deg);
}
```

div 하나를 호무새 얼굴로 잡고 가상 선택자(before, after)로 호무새의 꽁지를 표현했다.
가상 선택자는 존재하지 않는 요소를 존재하는 것처럼 부여하여 문서의 특정 부분 선택이 가능하다.

## 호무새 눈

![호무새 눈](/images/frontend/css-drawing-tutorial-04.png)

```css
/* 눈 */
.heavy-rain-eyes {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 4px solid #000000;
  top: 120px;
}

.heavy-rain-eyes.left {
  left: 70px;
}

.heavy-rain-eyes.right {
  right: 150px;
}

.heavy-rain-eyes:before,
.heavy-rain-eyes:after {
  content: "";
  display: block;
  position: absolute;
}

/* 눈썹 */
.heavy-rain-eyes:before {
  width: 35px;
  height: 3px;
  background-color: #000000;
  border-radius: 100px;
  top: -15px;
}

.heavy-rain-eyes.left:before {
  left: 10px;
  transform: rotate(20deg);
}

.heavy-rain-eyes.right:before {
  right: 10px;
  transform: rotate(-20deg);
}

/* 눈동자 */
.heavy-rain-eyes:after {
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 10px 10px 0px 13px #000000;
  top: 10px;
  left: 10px;
}
```

역시 가상선택자로 눈알을 표현했다. before는 눈썹, after로는 그림자를 사용하여 눈동자를 나타내었다.

## 호무새 부리

![호무새 부리](/images/frontend/css-drawing-tutorial-05.png)
호무새 부리

```css
/* 부리 테두리 */
.heavy-rain-mouse-line {
  position: absolute;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-right: 160px solid #0d4645;
  bottom: 151px;
  left: -52px;
  transform: rotate(-3deg);
  z-index: 6;
}

.heavy-rain-mouse-line:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 30px solid transparent;
  border-left: 30px solid #0d4645;
  bottom: -30px;
  left: 160px;
  z-index: 6;
}

/* 부리 */
.heavy-rain-mouse {
  position: absolute;
  width: 0;
  height: 0;
  border: 25px solid transparent;
  border-right: 140px solid #105f59;
  left: -28px;
  transform: rotate(-3deg);
  top: 174px;
  z-index: 6;
}

.heavy-rain-mouse:before,
.heavy-rain-mouse:after {
  content: "";
  display: block;
  position: absolute;
}

.heavy-rain-mouse:after {
  width: 0;
  height: 0;
  border: 25px solid transparent;
  border-left: 25px solid #105f59;
  bottom: -25px;
  left: 140px;
  z-index: 6;
}

/* 호무새 부리 중앙선 */
.heavy-rain-mouse:before {
  width: 161px;
  height: 0;
  border: 2px solid #0d4645;
  bottom: -2px;
  left: 0px;
  z-index: 7;
}
}
```

좀 낡은 방법이지만 css로 삼각형을 만들 땐 div의 border의 두께를 두껍게 준 후 원하는 방향을 제외한 다른 방향들을 다 투명하게 만드는 방법을 쓴다.
원래는 비틀어진 마름모를 하나 만들어서 한번에 다 끝내고 싶었으나 지식이 짦아서 그냥 div와 가상선택자 after로 마름모를 만들었다. 마름모 두개를 만든 후 하나는 부리 테두리로 사용했다.

부리까지 만들고 나면 호무새 완성!

## 마무리

완성작을 보니 뿌듯하긴 하지만 최대한 html 요소를 적게 쓰고 싶었는데 부리에 div를 두개나 쓴게 마음에 안든다. 더 좋은 방법이 있는지 찾아봐야겠다 ㅠ.

## 코드 전체 보기

<iframe height='500' scrolling='no' title='angry heavy rain' src='//codepen.io/partykyoung/embed/zyBeYQ/?height=265&theme-id=0&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/partykyoung/pen/zyBeYQ/'>angry heavy rain</a> by partyKyoung (<a href='https://codepen.io/partykyoung'>@partykyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>