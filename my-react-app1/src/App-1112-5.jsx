

function App() {
  const person = {
    s1: {
      name: "同學1",
      age: 18,
    },
    s2: {
      name: "同學2",
      age: 10,
    },
    s3: {
      name: "同學3",
      age: 20,
    }
  }

  // 多筆資料的物件解構-方法1
  // const {s1,s2,s3}=person;

  // 多筆資料的物件解構-方法2：解構+展開...(其餘運算子)
  // 解構s1，展開s2,s3
  // {我要的資料,...other}=>不會用到的資料都先放入other(可以自由抓取想要的資料，不受排序限制)
  const { s1, ...other } = person;
  // console.log(s1);
  // console.log(other);

  const person2 = {
    name: "同學1",
    age: 10,
  }

  // 一般寫法
  // function showName(obj) {
  //   console.log(obj);
  //   console.log(obj.name);
  // }

  // 將物件屬性直接解構給函式參數
  function showName({ name, age }) {
    console.log(name);
    console.log(age);
  }
  showName(person2);

  return (
    <>
      <div>{`同學1姓名：${s1.name}`}</div>
      <div>{`同學3姓名：${other.s3.name}`}</div>

      {/* 
      <div>第一位同學姓名:{s1.name}</div>
      <div>第一位同學年齡:{s1.age}</div>
      <hr/>
      <div>第二位同學姓名:{s2.name}</div>
      <div>第二位同學年齡:{s2.age}</div>
      <hr/>
      <div>第三位同學姓名:{s3.name}</div>
      <div>第三位同學年齡:{s3.age}</div>
       */}

    </>
  )
}


export default App
