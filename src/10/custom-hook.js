import {useEffect} from 'react';
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建了`);
    return () => {
      console.log(`${name}组件被销毁了`);
    }
  }, [])
}

function Profile(){
  useLoggingLife('Profile');
  return (
    <div>
      <h2>Profile</h2>
    </div>
  )
}
export default function CustomHook() {
  // useEffect(() => {
  //   console.log("组件被创建了");
  //   return () => {
  //     console.log("组件被销毁了");
  //   }
  // }, [])
  useLoggingLife('CustomHook');
  return (
    <div>
      <h2>CustomHookDemo</h2>
      <Profile />
    </div>
  )
}