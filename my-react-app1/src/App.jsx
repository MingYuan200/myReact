import "./App.css"

function App() {

  const cont1 = {
    a1: {
      name: "教學影音",
      text: "在邊框內部（甚至是透明的）繪製插入陰影，在背景上方，但在內容下方。",
    },
    a2: {
      name: "良性互動",
      text: "此頁面由社群從英文翻譯而來。了解更多並加入 MDN Web Docs 社群。",
    },
    a3: {
      name: "趨勢分享",
      text: "屬性為一個逗號分隔的列表描述一個或多個的陰影效果. 這使的你能夠從幾乎任何元素的框架放入陰影.。",
    },
  }
  const { a1, a2, a3 } = cont1;

  const cont2 = {
    b0: "付款上課去",
    b1: {
      title: "Unity 5",
      p1: "最新的課程，讓你一步步做出心中的遊戲，讓你一步步做出心中的遊戲。",
      p2: "Luna",
      p3: "4小時",
      p4: "原價 NT$3200",
      p5: "NT$ 1600",
    },
    b2: {
      title: "Gamesalad",
      p1: "最新的課程，讓你一步步做出心中的遊戲，讓你一步步做出心中的遊戲。",
      p2: "Tom",
      p3: "8小時",
      p4: "NT$4500",
      p5: "NT$ 3200",
    },
  }
  const { b1, ...other } = cont2;



  return (
    <>
      <div className="wrap">

        <header>
          <img src="..\images\banner.jpg" alt="" />
        </header>

        <div className="content" >
          <div className="box">
            <h2>{a1.name}</h2>
            <p>{a1.text}</p>
          </div>
          <div className="box">
            <h2>{a2.name}</h2>
            <p>{a2.text}</p>
          </div>
          <div className="box">
            <h2>{a3.name}</h2>
            <p>{a3.text}</p>
          </div>
        </div>

        <div className="title">
          <h3>讓學習成為一種習慣</h3>
        </div>

        <div className="content2" >
          <h2>推薦課程</h2>
          <div className="cards">
            <article className="card">
              <figure>
                <img src="..\images\unity.jpg" alt="" />
              </figure>
              <h3>{b1.title}</h3>
              <p className="pblue">{b1.p1}</p>
              <p>講師：{b1.p2}</p>
              <p>影音課程時數：{b1.p3}</p>
              <p className="price"><span className="span1">{b1.p4}</span><span className="span2">{b1.p5}</span></p>
              <p><button>{other.b0}</button></p>
            </article>
            <article className="card">
              <figure>
                <img src="..\images\gamesalad.jpg" alt="" />
              </figure>
              <h3>{other.b2.title}</h3>
              <p className="pblue">{other.b2.p1}</p>
              <p>講師：{other.b2.p2}</p>
              <p>影音課程時數：{other.b2.p3}</p>
              <p className="price"><span className="span1">原價：{other.b2.p4}</span><span className="span2">{other.b2.p5}</span></p>
              <p><button>{other.b0}</button></p>
            </article>
            <article className="card">
              <figure>
                <img src="..\images\gwd.jpg" alt="" />
              </figure>
              <h3>Unity 5</h3>
              <p className="pblue">最新的課程，讓你一步步做出心中的遊戲，讓你一步步做出心中的遊戲。</p>
              <p>講師：xxx</p>
              <p>影音課程時數：4小時</p>
              <p className="price"><span className="span1">原價 NT$3200</span><span className="span2">NT$ 1600</span></p>
              <p><button>{other.b0}</button></p>

            </article>
          </div>
        </div>


        <footer>
          <p>&copy; 2024.11.12_劉忞沅</p>
        </footer>
      </div>
    </>
  )
}


export default App
