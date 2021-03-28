import React/*, { useState, useEffect }*/ from 'react'
import useLocalStorage from '../hooks/data-store-hook'

export default function CustomDataStoreHook() {
  // const [name, setName] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("name"))
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("name", JSON.stringify(name));
  // }, [name])

  const [name, setName] = useLocalStorage('name');
  return (
    <div>
      <h2>CustomDataStoreHook: {name}</h2>
      <button onClick={e => setName("lancer")}>设置name</button>
    </div>
  )
}