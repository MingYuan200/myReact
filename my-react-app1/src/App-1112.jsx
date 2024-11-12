// 子組件【props】寫法
// function MyComponent(props){
//   props.c();
//   return <> 
//   <div>I am 子組件</div>
//   <div>{props.a}</div>
//   <div>{props.b}</div>
//   </>
// }

// 子組件使用【物件解構賦值】寫法
// 解構賦值的名稱必須一樣(有大小寫之分)，順序可以不同
function MyComponent({ a, b="我是預設值b", c }) {
  c();
  return <>
    <div>I am 子組件</div>
    <div>{a}</div>
    <div>{b}</div>
  </>
}


// 父組件
function App() {
  return (
    <>
      {/* 回調函式 = callback function */}
      <MyComponent
        a="我是屬性-a"
        // b="我是屬性-b"
        // 若這裡有寫b,父組件會蓋掉子組件的值
        c={() => {
          console.log("我是方法c")
        }} />


      {/*
      props = properties = 屬性
      作用：從父組件傳遞資料到子組件(只有單向：由上往下傳遞)

      撰寫reat時，組件之間需要溝通時(=>傳遞資料)
      props就可以做到這件事

      */}
    </>
  )
}


export default App
