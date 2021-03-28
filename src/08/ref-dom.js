//引入DOM（或者组件，但是需要是class组件）元素
import React, { useRef } from 'react';

class TestC extends React.Component {
  render(){
    return <h2>TestC</h2>
  }
}

function TestF (props){
  return <h2>TestF</h2>
}

export default function RefDom() {
  const inputRef = useRef();
  const titleRef = useRef();
  const testRef = useRef();
  const testRef1 = useRef();

  const handleOperating = () => {
    titleRef.current.innerHTML = "12345";
    inputRef.current.focus();
    console.log(testRef.current); 
    console.log(testRef1.current); 
  }

  return (
    <div>
      <input type="text" ref={inputRef}/>
      <h2 ref={titleRef}>默认内容</h2>
      <TestC ref={testRef} />
      <TestF ref={testRef1} />
      <button onClick={e => handleOperating()}>操作</button>
    </div>
  )
}