

function App() {
  // 建立函式方法1
  function sayHi() {
    alert('Hello 3')
  }

  // 建立函式方法2
  const sayHi2=()=> {
    alert('You got me~ 4')
  }

  return (
    <div>
      {/* 事件處理1：在html標籤上綁定事件 */}
      {/* 1-1.匿名函式 */}
      <button onClick={
        function () {
          alert('就說我不是按鈕')
        }
      }>我不是按鈕</button>

      {/* 1-2.箭頭函式 */}
      <button onClick={
        () => {
          alert('別再按了')
        }
      }>我不是按鈕2</button>

      {/* 事件處理2：呼叫函式 */}
      {/* 等待被呼叫的函式，函示名稱後面不可直接加() */}
      <button onClick={sayHi}>我是按鈕3</button>
      <button onClick={sayHi2} style={{color:'white',backgroundColor:'gray'}}>我是按鈕4</button>

    </div>
  )
}

export default App
