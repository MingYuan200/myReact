import { useEffect, useState } from "react"

function App() {
  const [inputUserName, setInputUserName] = useState('蜜香烏龍茶');
  // const [selCity, seySelCity] = useState('Taiwan');

  // 縣市(下拉選單)
  const [selCity, seySelCity] = useState('');
  const arrCity = ['宜蘭', '台北', '嘉義', '高雄'];

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選方塊
  const [chkList, setChkList] = useState([]);
  const arrList = ['HTML', 'CSS', 'JS'];
  // 建立函式：處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已經被勾選的項目+目前勾選的項目
    // 檢查是否被勾選
    if (e.target.checked) {
      setChkList([...chkList, e.target.value]);
    } else {
      // 否 => 拿掉不要的
      setChkList(
        chkList.filter((i) => {
          return i !== e.target.value
        })
      );
    }
  }

  // 選項按鈕
  const [q1Ans, setQ1Ans] = useState('');
  const [q2Ans, setQ2Ans] = useState('');

  // 統計次數
  const [ans1Count, setAns1Count] = useState(0);
  const [ans2Count, setAns2Count] = useState(0);

  // useEffect (()=>{
  //   const btn1 =document.getElementById('btn1');
  //   btn1.addEventListener('click',totCount);

  //   function totCount() {
  //     // 將次數歸零
  //     setAns1Count(0);
  //     setAns2Count(0);

  //     // console.log(q1Ans);

  //     // if(q1Ans=="冰美式"){

  //     // }

      
  //   }
  // },[q1Ans,q2Ans])

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱：</label>
      <input type="text" id="username"
        value={inputUserName}
        onChange={(e) => {
          setInputUserName(e.target.value)
        }}
      />
      <p></p>{`這裡會重新渲染：${inputUserName}`}

      <br />
      <p>-*.*-.*..-</p>
      <label htmlFor="city">縣市名稱：</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          seySelCity(e.target.value)
        }}
      >
        {/* 逐行寫法 */}
        {/* <option value="">請選擇</option>
        <option value="宜蘭">宜蘭</option>
        <option value="台北">台北</option>
        <option value="嘉義">嘉義</option>
        <option value="高雄">高雄</option> */}

        {/* 陣列寫法 */}
        <option value="" disabled>請選擇</option>
        {
          arrCity.map((city) => {
            return <option value={city} key={city}>{city}</option>
          })
        }
      </select >{` => ${selCity}`}

      <br />
      <p>-*.*-.*..-_-*.*-.*..-</p>

      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">已詳閱說明書</label>
      <input type="checkbox" id="isCeck"
        value={check}
        onChange={(e) => {
          // 處理勾選值的變化
          setCheck(e.target.checked);
        }} />{` => ${check.toString()}`}

      <br />
      {/* 複選：多個核取方塊 */}

      {
        arrList.map((list) => {
          return <div key={list}>
            <label htmlFor={list} >{list}</label>
            <input type="checkbox" id={list} name="like" value={list} onChange={handleChkList} />
          </div>
        })
      }

      {/* <label htmlFor="chkList1">HTML</label>
      <input type="checkbox" id="chkList1" name="like" value={'HTML'} onChange={handleChkList} />
      <label htmlFor="chkList2">CSS</label>
      <input type="checkbox" id="chkList2" name="like" value={'CSS'} onChange={handleChkList} />
      <label htmlFor="chkList3">JS</label>
      <input type="checkbox" id="chkList3" name="like" value={'JS'} onChange={handleChkList} /> */}

      {` => ${chkList}`}<br />



      <br />
      1.請選擇最愛的飲料：
      <input type="radio" name="Q1" value="冰美式" id="q1-1" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-1">冰美式</label>
      <input type="radio" name="Q1" value="冰拿鐵" id="q1-2" onChange={(e) => {
        setQ1Ans(e.target.value);
      }} />
      <label htmlFor="q1-2">冰拿鐵</label>
      <br />

      2.請選擇不喜歡的食物：
      <input type="radio" name="Q2" value="青椒" id="q2-1" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="q2-1">青椒</label>
      <input type="radio" name="Q2" value="紅蘿蔔" id="q2-2" onChange={(e) => {
        setQ2Ans(e.target.value);
      }} />
      <label htmlFor="q2-2">紅蘿蔔</label>

      <br />
      <br />
      您選擇的飲料：{q1Ans} <br />
      您選擇的食物：{q2Ans} <br />
      <br />

      <button id="btn1" onClick={()=>{
      // 將次數歸零
        setAns1Count(0);
        setAns2Count(0);

        // 統計
        const q1_1 = document.getElementById('q1-1');
        if (q1_1.checked){
          setAns1Count(ans1Count+1);
        }
        const q1_2 = document.getElementById('q1-2');
        if (q1_2.checked){
          setAns2Count(ans2Count+1);
        }
        const q2_1 = document.getElementById('q2-1');
        if (q2_1.checked){
          setAns1Count(ans1Count+1);
        }
        const q2_2 = document.getElementById('q2-2');
        if (q2_2.checked){
          setAns2Count(ans2Count+1);
        }



      }}>送出統計結果</button>

      統計次數：
      <br />
      <p>選項1次數：{ans1Count}</p>
      <p>選項2次數：{ans2Count}</p>
    </>
  )
}
export default App