import { useEffect, useState } from "react";


function App() {

  // 建立變色函式
  useEffect(() => {
    const p1 = document.getElementById('p1');
    p1.addEventListener('mouseover', () => {
      p1.style.color = "blue";
      p1.style.fontWeight = "bold";
    })
    p1.addEventListener('mouseout', () => {
      p1.style.color = "";
      p1.style.fontWeight = "";
    })

    const p2 = document.getElementById('p2');
    p2.addEventListener('mouseover', () => {
      p2.textContent = "Yeeees";
    })
    p2.addEventListener('mouseout', () => {
      p2.textContent = "變內容";
    })

    const h1 = document.getElementById('h1');
    let isClick = false;
    h1.addEventListener('click', (e) => {
      if (isClick === false) {
        // console.log(e.target.textContent);
        e.target.textContent = "透過參數e觸發了click";
        e.target.style.color = "blue";
        isClick = true;
      }else{
        e.target.textContent = "滑鼠事件";
        e.target.style.color = "";
        isClick=false;
      }

    })

    // const h1 = document.getElementById('h1');
    // h1.addEventListener('click', () => {
    //   const h1Text = h1.textContent;
    //   alert(h1Text);
    // })
  }, []);


  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2">變內容</p>

      <p id="p3"
        onMouseEnter={() => {
          const p2 = document.querySelector('#p3');
          p2.textContent = "Here is hard to read , not recommand";
        }}
        onMouseLeave={() => {
          const p2 = document.querySelector('#p3');
          p2.textContent = "這裡是比較難維護的寫法";
        }}
      >這裡是比較難維護的寫法</p>
    </>
  )
}

export default App