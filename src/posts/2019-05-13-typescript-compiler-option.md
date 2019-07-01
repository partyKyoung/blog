---
title: tsconfig.json
date: 2019-05-13 22:45:44
# tags:
#   - TypeScript
# categories:
#   - Front-end
#   - TypeScript
path: /front-end/typescript/compiler-option
---

## tsconfig.json

**tsconfig.json** 파일은 프로젝트를 컴파일 하는데 필요한 루트 파일과 컴파일러 옵션을 지정한다.

[JSON schema for the TypeScript compiler's configuration file](http://json.schemastore.org/tsconfig)에서 스펙을 확인할 수 있다.

ex)

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### compileOnSave

```json
{
  // ...
  "compileOnSave": true
  // ...
}
```

- ts 파일을 저장 시 자동 컴파일을 해준다.
- true / false (default: false)

### extends

```json
{
  // ...
  "extends": "./configs/base"
  // ...
}
```

- extends 속성을 사용해 다른 파일의 설정을 상속할 수 있다.
  - 클라이언트 작업물과 서버 사이드 작업물의 설정이 비슷하다면 한 파일을 만들어놓고 상속받은 후 필요한 부분만 바꿔 쓸 수 있다.

### files, include, exclude

셋다 설정이 없으면 모든 ts 파일들을 컴파일 해준다.

#### files

```json
{
  // ...
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "emitter.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
  // ...
}
```

- 상대 혹은 절대 경로의 리스트 배열이다.
- files에 지정되어 있는 파일은 exclude에 관계 없이 항상 컴파일 대상에 포함된다. -> exclude보다 순위가 더 높다.

#### include

```json
{
  // ...
  "include": ["src/**/*"]
  // ...
}
```

- glob 패턴 (.gitignore 이랑 비슷함.).
- include에 포함된 패턴과 맞는 파일들을 컴파일 대상에 포함시킨다.
- exclude 속성으로 필터링 할 수 있다.
- js파일을 컴파일 대상에 포함시키는 allowJs 옵션이 있다.
  - true/false

#### exclude

```json
{
  // ...
  "exclude": ["node_modules", "**/*.spec.ts"]
  // ...
}
```

- glob 패턴 (.gitignore 이랑 비슷함.)
- exclude에 포함된 패턴과 맞는 파일들은 컴파일 대상에서 제외된다.
- node_modules, bower_components, jspm_packages, <outDir>은 default로 제외한다.

### compileOptions

#### types

```json
{
  // ...
  "compilerOptions": {
    // ...
    "types": ["node", "lodash", "express"]
    // ...
  }
  // ...
}
```

- 타입을 가져올 패키지 목록.
- 기본적으로는 @types 모든 패키지가 컴파일에 포함된다. types를 지정할 경우 나열된 패키지만 컴파일 대상에 포함된다.

### target

```json
{
  // ...
  "compilerOptions": {
    // ...
    "target": "es3"
    // ...
  }
  // ...
}
```

- 컴파일 결과물을 js의 어떤 버전으로 할 것인지 지정한다. (default: es3)

### lib

```json
{
  // ...
{
  "CompilerOptions": {
    // ...
    "lib": [
      "dom",
      "es5",
      "es2015.promise"
    ],
    //...
  }
}

  // ...
}
```

- 컴파일에 포함될 라이브러리 파일 목록을 지정해준다. 지정해주지 않으면 아래의 기본 값이 저장된다.
- ES5의 기본 값: dom, es5, scripthost
- ES6의 기본 값: dom, dom.iterable, es6, scripthost
- 위의 기본 값 대신에 커스텀하게 라이브러리를 쓰려고 할 때, lib을 정의한다.
- [Understanding “target” and “module” in tsconfig](https://stackoverflow.com/questions/41993811/understanding-target-and-module-in-tsconfig)

### outDir

```json
{
  // ...
  "compilerOptions": {
    // ...
    "outDir": ""
    // ...
  }
  // ...
}
```

- 컴파일된 파일들의 위치를 지정해준다.

### outFile

```json
{
  // ...
  "compilerOptions": {
    // ...
    "outFile": ""
    // ...
  }
  // ...
}
```

- 컴파일 결과물을 단일 파일로 떨궈준다.

### module

```json
{
  // ...
  "compilerOptions": {
    // ...
    "module": "es3"
    // ...
  }
  // ...
}
```

- 컴파일된 모듈의 결과물을 어떤 모듈 시스템으로 할 지 결정한다.
  - commonjs, amd, umd, system, es6, es2015, none 중 설정 가능.
  - amd, systme 은 outFile 설정과 사용된다.
- 지정하지 않으면 target이 es6일 땐 es6으로, 그렇지 않으면 commonJS가 기본값으로 사용된다.
- es6, es2015는 target값이 es5 이하일때 사용 가능.

[TypeScript-Handbook 한글 문서 - tsconfig](https://typescript-kr.github.io/pages/tsconfig.json.html)
[TypeScript-Handbook 한글 문서 - 컴파일러 옵션](https://typescript-kr.github.io/pages/Compiler%20Options.html)
[tsconfig 컴파일 옵션 정리](https://vomvoru.github.io/blog/tsconfig-compiler-options-kr/)
[tsconfig.json의 lib](https://norux.me/59)
[타입스크립트 코리아 : 2017.05 기초 세미나 (4) - Compiler Options](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%A6%AC%EC%95%84-1705-%EA%B8%B0%EC%B4%88-%EC%84%B8%EB%AF%B8%EB%82%98/lecture/6803)