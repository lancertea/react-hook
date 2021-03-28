// 数据是不会共享的，它们只是使用了相同的counterReducer的函数而已。
// useReducer只是useState的一种替代品，并不能替代Redux。
export function counterReducer(state, action) {
  switch(action.type) {
    case "increment":
      return {...state, counter: state.counter + 1}
    case "decrement":
      return {...state, counter: state.counter - 1}
    default:
      return state;
  }
}