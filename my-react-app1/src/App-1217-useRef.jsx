import { useRef, useEffect, useState } from 'react';
// import $ from 'jquery'

export default function App() {

  // useState的用法
  // const [value, setValue] = useState('');

  // 建立一個useRef的變數
  const inputRef = useRef(null);

  console.log('App render...');

  const submitHandler = () => {
    // 查看值
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);
    // 更改類型為password
    inputRef.current.type="password";
    console.log(inputRef.current.type);
  }

  return (
    <>
      {/* useState的做法=>onChange事件觸發 */}
      {/* 此方法會即時渲染，每輸入一個字就觸發一次 */}
      {/* <input type="text" onChange={(e)=>setValue(e.target.value) } /> */}

      {/* 此方法會取得DOM元素後才觸發 */}
      <input type="text" ref={inputRef} />
      <button onClick={submitHandler}>送出</button>
    </>
  )
}