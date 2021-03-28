## react-hook

### class组件和函数式组件的对比
class组件可以定义自己的state，用来保存组件自己内部的状态
函数式组件不可以，因为函数每次调用都会产生新的临时变量

class组件有自己的生命周期，我们可以在对应的生命周期中完成自己的逻辑
- 比如在componentDidMount中发送网络请求，并且该生命周期函数只会执行一次
函数式组件在学习hooks之前，如果在函数中发送网络请求，意味着每次重新渲染都会重新发送一次网络请求

class组件可以在状态改变时只会重新执行render函数以及我们希望重新调用的生命周期函数componentDidUpdate等
函数式组件在重新渲染时，整个函数都会被执行，似乎没有什么地方可以只让它们调用一次 （？？？memo）

### class组件的问题
1. 复杂组件变得难以理解
比如componentDidMount中，可能就会包含大量的逻辑代码：包括网络请求、一些事件的监听（还需要在componentWillUnmount中移除）；而对于这样的class实际上非常难以拆分：因为它们的逻辑往往混在一起，强行拆分反而会造成过度设计，增加代码的复杂度；   

2. 难以理解的class
比如this的指向

3. 组件复用状态很难
状态的复用一般需要通过高阶组件或render props，这些代码不管是编写和设计上都比较困难

### 01 class组件和函数式组件结合hooks的对比
### 02 useState
### 03 useEffect
### 04 useContext
### 05 useReducer
### 06 useCallback
### 07 useMemo
### 08 useRef
### 09 useLayoutEffect
### 10 自定义hook
