import { useState } from "react"

export default function HatchingLesson() {
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);
  
  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count1 + 1);  
    // 실생시켜서 확인하면 1 | 2가 아니라 1 | 1이 된다는 점에서
    // 일괄 처리라는 점을 이해할 수 있습니다.
  }

  return (
  <>
    <p>현재 카운터 : {count1} | {count2} </p>
    <button onClick={increment}>++</button>
  </>
  );
}