
// 建立新的元件
// 元件的每一個單字的字首要大寫

function MyComponent() {
  return (
    // 空標籤：Fragment
    <>
      <h2>Re-act</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </>
  )
}

function App() {
  return (
    // 元件中可以使用其他元件，但不要建立新的元件
    // new元件位置:要獨立檔案or同一個檔案下的元件之外
    <div>
      <MyComponent />
    </div>
  )
}

/* 檔案名稱=元件名稱，元件建立好後要導出給其他檔案使用*/
export default App
