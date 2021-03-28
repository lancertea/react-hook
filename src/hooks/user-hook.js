import { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

function useUserContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  console.log(user, theme);
 return {user, theme};
}


export default useUserContext;