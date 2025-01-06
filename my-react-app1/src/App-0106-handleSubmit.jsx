import { useState } from "react"



export default function App() {

  // 單一欄位處理的缺點，要逐一處理每個欄位寫入的程式 => 較沒有管理效率
  // 使用者名稱
  // const [username, setUsername] = useState('');
  // const handleChange = (e) => {
  //   setUsername(e.target.value);
  // }

  // 密碼
  // const [userpw, setUserpw] = useState('');
  // const handleChange2 = (e) => {
  //   setUserpw(e.target.value);
  // }

  // 同時處理不同欄位的資料
  const [formData, setFormData] = useState({
    username: 'text',
    userpw: '1234',
    isChk: false,
  });

  const handleChange = (e) => {
    // 值
    // console.log(e.target.value);
    // 屬性
    // console.log(e.target.name);
    // 資料型態
    // console.log(e.target.type);


    // 寫入具動態欄位的資料
    // const value = e.target.value;

    // 如果有布林值=>布林值資料的處理方式
    // let value;
    // if (e.target.type === 'checkbox') {
    //   value = e.target.checked;
    // } else {
    //   value = e.target.value;
    // }

    // 精簡版=>三元運算子
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    const name = e.target.name;
    setFormData({
      ...formData, //使用其餘運匴子帶出所有資料
      [name]: value, //使用變數的方式帶入被異動欄位的屬性
    })
  }

  // 表單送出的函式
  const handleSubmit = (e) => {
    // 取消HTML預設行為
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h2>表單-欄位</h2>
      <hr style={{ marginBottom: '30px' }} />

      <div>
        <form onSubmit={handleSubmit}>
          {/* 使用者名稱 */}
          <div>
            <label htmlFor="username">使用者名稱：</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </div>
          {/* 密碼 */}
          <div>
            <label htmlFor="password">使用者密碼：</label>
            <input type="password" id="password" name="userpw" value={formData.userpw} onChange={handleChange} />
          </div>
          {/* 確認狀態 */}
          <div>
            <label htmlFor="isCheck">是否同意條款：</label>
            <input type="checkbox" id="isCheck" name="isChk" value={formData.isChk} onChange={handleChange} />
          </div>
          <button type="submit">送出</button>
        </form>
      </div>

    </>
  )
}