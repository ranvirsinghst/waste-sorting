import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

   

  // useEffect(() => {
  //   fetch("/data").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // })

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("/data").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
        }
      )
    }, 1000)

    return () => clearInterval(intervalId)

  })

  return (
    <>
      <p>waste type: {data.obj}</p>
      <p>confidence: {data.conf}</p>
    </>
  )
}

export default App