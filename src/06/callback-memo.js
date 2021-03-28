import React, { memo, useState, useCallback, useMemo } from 'react';
//在发生点击时，我们会发现接受increment1的子组件不会重新渲染，但是接受increment2的子组件会重新渲染；
//所以useCallback最主要用于性能渲染的地方应该是和memo结合起来，决定子组件是否需要重新渲染；
const CounterIncrement = (props) => {
  console.log('CounterIncrement被渲染:', props.name);
  return <button onClick={props.increment}>{props.name}+1</button>;
};

const CounterIncrement1 = memo((props) => {
  console.log('CounterIncrement1被渲染:', props.name);
  return <button onClick={props.increment}>{props.name}+1</button>;
});

export default function CallbackMemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const increment1 = function () {
    console.log('执行increment1函数');
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    console.log('执行increment2函数');
    setCount(count + 1);
  }, []);

  const increment3 = useCallback(() => {
    console.log('执行increment3函数');
    setCount((count) => count + 1);
  }, []);

  const increment4 = useCallback(() => {
    console.log('执行increment4函数');
    setCount(count + 1);
  }, [count]);

  const increment5 = useMemo(() => {
    return () => {
      console.log('执行increment5函数');
      setCount(count + 1);
    };
  }, [count]);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <CounterIncrement increment={increment1} name="noMemo-increment1" />
      <CounterIncrement increment={increment2} name="noMemo-increment2" />
      <CounterIncrement increment={increment3} name="noMemo-increment3" />
      <CounterIncrement increment={increment4} name="noMemo-increment4" />
      <br />
      <CounterIncrement1 increment={increment1} name="increment1" />
      {/* 只有1变换的原因是count变化了，整个视图被刷新了 */}
      <CounterIncrement1 increment={increment2} name="increment2" />
      <CounterIncrement1 increment={increment3} name="increment3" />
      <CounterIncrement1 increment={increment4} name="increment4" />
      <CounterIncrement1 increment={increment5} name="increment5" />
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
