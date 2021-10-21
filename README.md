## NextPractice

#### 인증

- 로그인
- 회원가입
- 로그아웃
- Profile
- 유저 정보

#### 글로벌 모듈

- GNB
- 레이어
- Footer

#### 내부 모듈

- 배너
- 공지사항
- 강의 목록

#### 모바일 모듈

- 카테고리 목록

#### README Tip

- Contributor

  - @kjhg478 (김종훈)

- Tech Requirement (Tech Stack)

  - Create-next-app
  - Next.js
  - TypeScript
  - ESLint
  - Babel 설정 (IE 11 대응)
    - 기본적으로 next에서 IE 11을 지원하긴 하지만 바벨에서 preset을 별도로 설정해줬을 때, 빌드되는 결과물이 달라짐
    - 완전히 최근에 나온 스펙들의 경우, Built-in 시점에 지원을 안하는 경우를 방지하기 위해 가급적으로 설정 추천

- Docker

  - Dockerfile을 이용해 Docker Container
  - Docker Compose를 사용하고 있습니다.

- Script

```
$ yarn dev
```

```
$ yarn build
$ yarn deploy
```

## 테스트

- 유닛테스트 > 코드상으로 기능을 점검
  - 테스트의 베이스
  - 기능을 점검해보는 테스트 (빌드된 결과물을 봐서 의도된대로 나오는지 코드 자체에 대한 로직을 점검할 때)
- E2E 테스트 (End to End)

  - 실제 동작을 기반으로 하는 테스트
  - 어떤 클릭에 따른 변화가 의도된대로 나오는지 (이벤트)

- Jest
- npm run test
