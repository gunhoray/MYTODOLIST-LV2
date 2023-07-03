https://github.com/gunhoray/MYTODOLIST-LV2/assets/88648468/a56dc047-5e0d-420a-a16c-69bbd86c7cb8


# [MY TO-DO LIST](https://mytodolist-lv-2.vercel.app/) 
##### by gunhoray & makepin2r using Javascript, React, Html, css
### by makepin2r
  * Refactoring whole homepage with redux
  * Organized and constructed Styled-components
  * Refactoring existed code for better efficiency
### by gunhoray
  * Constructed pages and linked them with path wth react-router-dom
  * Merged codes together from gunhoray & makepin2r, and resolved conflicts between them
  * Organized final results 

## assignments of this project
  * todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
  * todos 모듈은 **Ducks 패턴**으로 구현합니다.
  * 메인 페이지
  * Todo를 추가하면 제목 input과 내용 input은 다시 빈 값이 되도록 구현합니다.
  * input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현합니다.
  * Todo의 완료상태가 true이면, 상태 버튼의 라벨을 “취소”, false 이면 라벨을 “완료” 로 보이도록 구현합니다.
  * 상세보기 클릭하면 Todo의 상세 페이지로 이동합니다.
  * 상세 페이지의 디자인과 화면 구성 : Todo의 ID / Todo의 제목 / Todo의 내용 / 이전으로 버튼
  * Todo Id 생성 시 todos.length 사용해서 생성하지 않습니다. : uuid() 사용했음
  * Main packages used : redux & styled-components & react-router-dom  

## funtions of this project
  * 문자타입 제목, 컨텐츠 기입
  * in progress...와 completed으로 to-do post의 진행상황을 분리한 구조
  * Add, delete, completed, not completed 버튼 기능들 구현
  * alert로 delete에 대한 confirm
  * alert로 빈값 추가에 대한 거부

## blueprint of the project

* components :
  * Inputbox.jsx
  * Postbox.jsx

* pages :
  * Details.jsx
  * Home.jsx

* redux : contains config & modules folders
  * config :
    * configStore.js
  * modules :
    * todos.jsx

* shared : constructing direction of pages
  * Router.js
* App.jsx : IMPORTS Router / GlobalStyle / { Title, Container, Wrapper}
* GlobalStyle.js : styled-components for Global environment 
* Styled.js : styled-components for Elements 
 

## Difficulties encountered during this project
* Refactoring todos with redux ⭐️
* Refactoring pages with react-router-dom. constructing pages, and link them with right path. ⭐️
* Refactoring existed css with styled-components⭐️
