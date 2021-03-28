import CounterClass from './01/counter-class';
import CounterHook from './01/counter-hook';
import MultiState from './02/multi-state';
import FuncState from './02/func-state';
import ClassTitle from './03/class-title';
import HookTitle from './03/hook-title';
import Rely from './03/rely';

import { createContext, useState } from 'react';
import ContextHook from './04/context-hook';

import Home from './05/home';
import Profile from './05/profile';
import CallbackHook from './06/callback-hook';
import CallbackMemo from './06/callback-memo';

import NoHook from './07/no-hook';
import MemoHook from './07/memo-hook';
import MemoSub from './07/memo-sub';

import RefDom from './08/ref-dom';
import RefValue from './08/ref-value';
import ForwardRef from './08/forward-ref';
import ImperativeRef from './08/imperative-ref';

import Effect from './09/effect';
import LayoutEffect from './09/layout-effect';

import CustomHook from './10/custom-hook';
import CustomContextHook from './10/context-share'
import CustomScrollPositionHook from './10/scroll-hook'
import CustomDataStoreHook from './10/data-store'


export const UserContext = createContext();
export const ThemeContext = createContext();
export function App() {
  const [show, setShow] =useState(true);
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}

      {/* 02 useState */}
      {/* <MultiState /> */}
      {/* <FuncState /> */}

      {/* 03 useEffect */}
      {/* <ClassTitle /> */}
      {/* <HookTitle /> */}
      {/* <Rely /> */}

      {/* 04 useContext */}
      {/* 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。
      即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。 */}
      {/* <UserContext.Provider value={{name: 'lancer', age: 12}}>
        <ThemeContext.Provider value={{color: 'red', fontSize: '20px'}}>
          <ContextHook />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 05 useReducer */}
      {/* <Home />
      <Profile /> */}

      {/* 06 useCallback */}
      {/* <CallbackHook /> */}
      {/* <CallbackMemo /> */}

      {/* 07 useMemo */}
      {/* <NoHook /> */}
      {/* <MemoHook /> */}
      <MemoSub />

      {/* 08 useRef */}
      {/* <RefDom /> */}
      {/* <RefValue /> */}

      {/* useImperativeHandle */}
      {/* <ForwardRef /> */}
      {/* <ImperativeRef /> */}

      {/* 09 useLayoutEffect */}
      {/* <Effect /> */}
      {/* <LayoutEffect /> */}

      {/* 10 customHook */}
      {/* {show && <CustomHook />}
      <button onClick={e=>setShow(!show)}>切换</button> */}

      {/* <UserContext.Provider value={{name: 'lancer', age: 12}}>
        <ThemeContext.Provider value={{color: 'red', fontSize: '20px'}}>
          <CustomContextHook />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <CustomScrollPositionHook /> */}
      {/* <CustomDataStoreHook /> */}
    </div>
  );
}

export default App;
