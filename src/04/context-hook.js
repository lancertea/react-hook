import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'

export default function ContextHook() {
  //Context Hook允许我们通过Hook来直接获取某个Context的值；
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user);
  console.log(theme);

  return (
    <div>
      ContextHook
    </div>
  )
}