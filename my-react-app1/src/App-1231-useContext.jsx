import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"



export default function App() {

  // 建立共用環境區域
  const UserContext = createContext({});
  // 建立使用者變數
  const [userName, setUserName] = useState('demo');
  // 建立登入鈕的控制
  const [isLogin, setIsLogin] = useState(false);


  // 建立登入元件
  const LoginForm = () => {
    // 因為要被放在共用區，所以要搬走
    // const [userName, setUserName] = useState('');

    // 從共用區解構出userName, setUserName
    const { userName, setUserName, setIsLogin } = useContext(UserContext);
    return (
      <>
        <label htmlFor="username">使用者名稱</label>
        <input
          type="text"
          id="username"
          placeholder="請輸入使用者名稱"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
      </>
    )
  }

  //登入後的歡迎元件
  const Greeting = () => {
    // 從共用區解構出userName, setUserName
    const { userName } = useContext(UserContext);
    return (
      <div>
        Hi, {userName}
      </div>
    )
  }

  // 建立元件使用共用資料
  const ShowName =()=>{
    return(
      <div>
        我是ShowName元件測試：{userName}
      </div>
    )
  }




  return (
    <>
      <h2>useContext-跨元件處理資料</h2>
      <hr style={{ marginBottom: "50px" }} />

      <UserContext.Provider value={{ userName, setUserName, setIsLogin }}>
        {/* 
        <LoginForm />
        <Greeting />
         */}

        {/* 將原本的架構改成三元運算子 */}

        {
          isLogin ? <><Greeting /><br/><ShowName/></> : <LoginForm />
        }

      </UserContext.Provider>

    </>
  )
}