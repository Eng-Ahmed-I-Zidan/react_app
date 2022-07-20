/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'
import styles from '../Home.module.scss'

function Home() {
  const [val, setVal] = useState("")
  const count = useRef(0)
  const foc = useRef()
  const previousVal = useRef("")

  const focusElement = () => {
    foc.current.focus()
  }

  useEffect(() => {
    count.current = count.current + 1
    previousVal.current = val
  }, [val])

  return (
    <>
      <input 
        type="text" 
        value={val} 
        onChange={event => setVal(event.target.value)}
        ref={foc}
      />
      <h2>count: {count.current}</h2>
      <h2>current value: {val}</h2>
      <h2>previous value: {previousVal.current}</h2>
      <button onClick={focusElement}>focus</button>
    </>
  );
}

export default Home