import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import AccordionText from './AccordionText'

function MainText() {
  
  const [data, setData] = useState({obj: 'None', conf: '0'})
  const [textColor, setTextColor] = useState('text-black')
  const [bgClass, setBgClass] = useState('self-start p-4 text-black rounded-xl shadow-xl w-1/2 text-xl text-center bg-white')

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("/data").then(
        res => res.json()
      ).then(
        data => {
          setData(data);
          if (data.obj === 'compost') {
            setTextColor('text-emerald-600');
            setBgClass('self-start p-4 text-black rounded-xl shadow-xl w-1/2 text-xl text-center bg-emerald-100');
          } else if (data.obj === 'trash') {
            setTextColor('text-slate-700');
            setBgClass('self-start p-4 text-black rounded-xl shadow-xl w-1/2 text-xl text-center bg-slate-100');
          } else if (data.obj === 'recycling') {
            setTextColor('text-sky-700');
            setBgClass('self-start p-4 text-black rounded-xl shadow-xl w-1/2 text-xl text-center bg-sky-100');
          }
        }
      )
    }, 1000)

    return () => clearInterval(intervalId)

  }, [])


  return (
    <div className='maintext flex-col'>
      <div className={bgClass}>
        <p>
          Waste Type: <span className={textColor}>{data.obj.charAt(0).toUpperCase() + data.obj.slice(1)}</span>
        </p>
        <ProgressBar className='max-w-l' animated now={data.conf} label={`Confidence: ${data.conf}%`}/>
      </div>
      <AccordionText />
    </div>
  )
}

export default MainText