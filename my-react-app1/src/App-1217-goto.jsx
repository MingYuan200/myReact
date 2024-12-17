import { useRef, useEffect, useState } from 'react';
// import $ from 'jquery'

export default function App() {

const greenRef = useRef(null);
const yellowRef = useRef(null);

const goGreen=()=>{
  window.scrollTo({
    top:greenRef.current.offsetTop,
    behavior:'smooth',
  })
}
const goYellow=()=>{
  yellowRef.current.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <>

    {/* offsetTop */}
      <div ref={yellowRef} style={{ height: "800px", backgroundColor: "yellow", }}>
        <button onClick={goGreen}>go to Green</button>
      </div>

      <div ref={greenRef} style={{ height: "800px", backgroundColor: "green", }}>
        <button onClick={goYellow}>go to Yellow</button>
      </div>

    </>
  )
}