// 1
// 컴포넌트 내부에 이벤트 핸들러 함수를 선언하여 이벤트에 응답할 수 있습니다.
// 클릭 시 함수 호출이 아니라 함수만 전달하면 React가 호출함
// 자바스크립트 이벤트에 반응하는 함수의 이름을 handle ~ 혹은 ~ handler 라고 함.

import { useState } from 'react';
// 2
// 화면 업데이트
// 버튼의 클릭 횟수를 저장했다가 계속 보여주려면?
// 상태 (state)를 추가하여 관리 할 수 있다.
// React의 useState를 import하고 컴포넌트 내에 상태를 정의하여 사용
// 현재 상태와 상태를 업데이트 할 함수를 리턴함.
// 컴포넌트 처음 렌더링 시점에는 useState에 세팅한 초기값이 상태값으로 할당됨.
// 같은 컴포넌트 여러개를 렌더링한다면 각각의 상태를 가진 컴포넌트가 그려질 것.
// useState와 같이 use로 시작하는 함수를 hooks이라고 함.
// useState는 리액트의 빌트인 훅임
// 훅은 컴포넌트의 최상위 레벨에서만 호출됨

export default function MyButtonEvent() {
  // function handleClick() {
  //   alert('You clicked me!');
  // }

  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    // setCount((state) => state + 1);
  }

  // return <button onClick={handleClick}>Click me</button>;
  return <button onClick={handleClick}>Clicked {count} Times</button>;
}
