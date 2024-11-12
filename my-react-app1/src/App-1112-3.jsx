

function App() {
  // 建立物件變數
  const person = {
    name: "夯番薯",
    age: "3"
  }

  {/* 物件解構寫法:屬性變成變數 */ }
  const { name, age } = person;
  console.log(name,age);

  return (
    <>
      {/* 一般寫法 */}
      <div>姓名:{person.name}</div>
      <div>年齡:{person.age}歲</div>
      <hr />
      <div>{`姓名:${person.name}`}</div>
      <div>{`年齡:${person.age}歲`}</div>
      <hr />
        {/* 物件解構寫法 */ }
      <div>解構後的姓名:{name}</div>
      <div>解構後的年齡:{age}</div>

    </>
  )
}


export default App
