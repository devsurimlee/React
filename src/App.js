import React from "react";
import Hello from "./Hello";
import "./App.css";

function App() {
  const name = "react!";
  const divStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px"
  };
  return (
    <>
      <hi
      // 주석 스타일 1번
      />
      {/* 주석 스타일 2번 */}
      {/* 
      2개 이상 태그는 꼭 중갈호{}로 감싸거나 self-closing 하기,
      js값 보여줄땐 중갈호로 처리,
      style은 문자형태X 객체형태로 넣음{divStyle}, class -> className 대체함; 
    
    */}

      <Hello />
      <Hello />
      <Hello />
      <div style={divStyle}>{name}</div>
      <div className="gray-box"></div>
      <div>test</div>
    </>
  );
}

export default App;
