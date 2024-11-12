// 傳遞組件
// 把組件放到另一個組件的內容裡面
// 這種寫法在react中叫做組合(composition)
// 此方法在不影響組件功能的基礎上，另外再給組件加入額外功能

// 建立一個新的組件(孫子)
function SecondComponent() {
  return <h1>我是SecondComponent組件</h1>
}

// 子組件
// 也可以從這裡呼叫孫子
// function MyComponent() {
//   return <><SecondComponent/></>
// }
function MyComponent({children}) {
  return <>
  我是子組件
  {children}
  </>
}

// 父組件
function App() {
  return (
    <>
      <MyComponent>
        {/* 父組件呼叫孫子 */}
        {/* 因為children是react內建的屬性，所以傳送組件時，可以不用寫children屬性 */}
        <SecondComponent/>
      </MyComponent>
    </>
  )
}


export default App
