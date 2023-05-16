import { useState } from 'react';

export default function MyButtonEvent2() {
  const [time, setTime] = useState(1);

  function handleTime() {
    setTime(time + 1);
  }

  return <button onClick={handleTime}>{time} 초</button>;
}
// 테스트용
