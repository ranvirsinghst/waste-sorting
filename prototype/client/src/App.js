import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/data").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    // <>
    //   <p>none</p>
    // </>
    // <div>
    //   {(typeof data.members === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     data.members.map((member, i) => (
    //       <p key={i}>{member}</p>
    //     ))
    //   )}
    // </div>

    <p>person count: {data.peeps}</p>
    // <>
    //   {(typeof data === 'undefined') ? (
    //     <p>Loading...</p>
    //   ) : (
    //     // data.map((peeps) => (
    //     //   <p>{peeps}</p>
    //     // ))
    //     <p>{data.peeps}</p>
    //   )}
    // </>
  )
}

export default App