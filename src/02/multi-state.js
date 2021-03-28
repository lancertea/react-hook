// 一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。
//参数：给创建出来的状态一个默认值
//返回值：数组：[当前state的值，更新新值的函数]

//与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果
/*
class:
this.state={
  name: "why",
   age: 18
}

setState({name: "lancer"}); //state此时为{name:"lancer", age:18}

useState:
const [info, setInfo] = useState({name: "why", age: 18});
setInfo({...info, name: "lancer"}


*/
import React, { useState } from 'react';

export default function MultiState() {
  const [age, setAge] = useState(0);
  const [names, setNames] = useState(["abc", "cba"]);
  const [info, setInfo] = useState({name: "why", age: 18});

  function addFriend() {
    names.push("nba");
    console.log(names);
    setNames(names);
  }

  return (
    <div>
      <h2>当前年龄: {age}</h2>
      <button onClick={e => setAge(age + 1)}>age+1</button>
      <h2>朋友列表</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <button onClick={e => setNames([...names, "nba"])}>添加好友</button>
      <button onClick={addFriend}>push好友</button>
      <h2>我的信息:</h2>
      <div>我的名字: {info.name}</div>
      <button onClick={e => setInfo({...info, name: "lancer"})}>修改名字</button>
    </div>
  )
}
