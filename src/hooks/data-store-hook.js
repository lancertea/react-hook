import { useEffect, useState } from 'react'

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key))
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return [data, setData];
}

export default useLocalStorage;