import "./App.css"

// 建立新的元件
// 元件的每一個單字的字首要大寫

function MyComponent() {
  return (
    // 空標籤：Fragment
    <>
      <h2>Re-act</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

function App() {
  
  // 建立變數
  const strName="Yuan";

  return (
    // 元件中可以使用其他元件，但不要建立新的元件
    // new元件位置:要獨立檔案or同一個檔案下的元件之外
    <div>
      {/* JSX中使用javascript變數，用{變數名稱} */}
      <h1 style={{
        color:'white',
        backgroundColor:'blue',
        width:'300px',
        borderRadius:'10px 40px 40px 10px',
        padding:'10px'
      }}>{strName.toUpperCase()}, 午安</h1>

      {/* 屬性中使用變數 */}
      <label className="myUnderLine" htmlFor="userName">請輸入姓名：</label>
      <input type="text" id="userName" placeholder={strName}/>
      <hr/>
      <MyComponent />
    </div>
  )
}

/* 檔案名稱=元件名稱，元件建立好後要導出給其他檔案使用*/
export default App
