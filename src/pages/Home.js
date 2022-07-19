/* eslint-disable no-unused-vars */
import { useState } from 'react'
import styles from '../Home.module.scss'

function Home() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateState = () => {
    setCar(
        previousValues => {
            return {...previousValues, model: "new model"}
        }
    )
  }

  return (
    <>
      <h1 onClick={updateState}>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

export default Home