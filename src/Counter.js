import React, { useState } from 'react';
// react hook -> useState 함수사용

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(preNumber => preNumber + 1 );   //함수형 업데이트(업데이트 함수), 성능 최적화;
  };
  const onDecrease = () => {
    setNumber(number - 1 );    //바뀐 값을 setNumber에 담음;
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;