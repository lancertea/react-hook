import React, { useRef, forwardRef } from 'react';
//这种做法存在的问题是：将子组件的DOM直接暴露给了父组件
//直接暴露给父组件带来的问题是某些情况的不可控
//父组件可以拿到DOM后进行任意的操作
const HYInput = forwardRef(function (props, ref) {
  return <input type="text" ref={ref}/>
})

export default function ForwardRef() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}