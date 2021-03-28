import React from 'react'
//import { ThemeContext, UserContext } from '../App'

import useUserContext from '../hooks/user-hook'

export default function CustomContextHook() {
  // const user = useContext(UserContext);
  // const theme = useContext(ThemeContext);

  const {user, theme} = useUserContext();
  console.log(user, theme);

  return (
    <div>
      <h2>CustomContextHook</h2>
    </div>
  )
}
