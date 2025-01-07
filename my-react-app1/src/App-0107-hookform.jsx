import { useForm } from "react-hook-form"


export default function App() {
  // 啟動套件
  const {
    register, // 是一種狀態state，可以綁定n個表單欄位
    handleSubmit, // 是一種方法
    formState: { errors } // 捕捉驗證規則
  } = useForm();

  // 建立一個自訂義的動作，被表單觸發時，將register資料傳進來
  const onSubmit = (data) => {
    // 取得表單被綁定的全部欄位資料=>以物件顯示
    console.log(data);
    // 取得表單指定的欄位=>data.欄位名稱
    console.log(data.userpw);
  }

  return (
    <>
      <h2>HookForm</h2>
      <p style={{ padding: "10px 20px" }}>
        第三方套件-需要安裝：npm i react-hook-form <br />
        啟動套件：const { }=useForm();
      </p>
      <hr />

      <div>
        <form onSubmit={handleSubmit(onSubmit)} action="" style={{ padding: "10px 20px" }}>
          <div>
            <label htmlFor="username">使用者名稱：</label>
            <input
              type="text"
              id="username"
              defaultValue="demo"
              // 使用...語法帶出所有被綁定的欄位=> ...register('欄位名稱')
              // 欄位名稱可自行定義
              // 必填的驗證=>{ required: true }
              {...register('uName', { required: true })}
            />
            {/* 當驗證成立時的訊息(沒有填寫欄位資料時) */}
            {errors.uName && <span style={{ color: "red" }}>必須填寫姓名</span>}
          </div>
          <div>
            <label htmlFor="userpw">使用者密碼：</label>
            <input
              type="password"
              id="userpw"
              defaultValue="1234"
              // 欄位名稱可自行定義
              {...register('userpw')}
            />
          </div>
          <div>
            <label htmlFor="userAge">年齡：</label>
            <input
              type="text"
              id="userAge"
              defaultValue=""
              // 使用正規表達式https://5xcampus.com/posts/15min-regular-expression.html?srsltid=AfmBOor6zfENuclWfIpG0-Q8-f9yDVQsKkOAtEl_oTNZegK9hhYPmaud
              // 加上只能接受數值資料的驗證=>{pattern:/\d+/}
              {...register('userAge', { pattern: /\d+/ })}
            />
            {errors.userAge && <span style={{ color: "red" }}>只能填寫數字</span>}

          </div>

          {/* 按鈕要寫在form標籤裡面 */}
          <button type="submit">送出</button>
        </form>
      </div>

    </>
  )
}