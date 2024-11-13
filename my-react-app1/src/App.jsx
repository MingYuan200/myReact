import "./App.css"

// 特色區元件
function ShowContent({ arrData }) {
  return (
    <>
      {
        arrData.map((item) => {
          return (
            
              <div className="box" key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </div>
            
          )
        })
      }
    </>
  )
}

// 課程區元件
function ShowContentClass() {
  // 資料
  const data2 = [
    {
      id:1,
      img:"images/unity.jpg",
      title: "Unity 5",
      p1: "最新的課程，讓你一步步做出心中的遊戲，讓你一步步做出心中的遊戲。",
      p2: "講師：Luna",
      p3: "影音課程時數：4小時",
      p4: "原價 NT$3200",
      p5: "NT$ 1600",
    },
    {
      id:2,
      img:"images/gamesalad.jpg",
      title: "Gamesalad",
      p1: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲。",
      p2: "講師：Lily Chen",
      p3: "影音課程時數：12小時",
      p4: "原價 NT$8888",
      p5: "NT$ 4500",
    },
    {
      id:3,
      img:"images/gwd.jpg",
      title: "Google web design",
      p1: "用於建立廣告動畫，透過時間軸將各種物件組合以動畫方式呈現。。",
      p2: "講師：Spiderman",
      p3: "影音課程時數：8小時",
      p4: "原價NT$4500",
      p5: "NT$ 3299",
    },
  ]
  return (
    <>
    {
        data2.map((item) => {
          return (
            
              <article className="card" key={item.id}>
              <figure>
                <img src={item.img} alt="" />
              </figure>
              <h3>{item.title}</h3>
              <p className="pblue">{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
              <p className="price"><span className="span1">{item.p4}</span><span className="span2">{item.p5}</span></p>
              <p><button>付款上課去</button></p>
            </article>
            
          )
        })
      }
      
    </>
  )
}

function App() {

  // 陣列物件要跑map迴圈，需要key值(id)
  const cont1 = [
    {
      id: 1,
      name: "教學影音",
      text: "在邊框內部（甚至是透明的）繪製插入陰影，在背景上方，但在內容下方。",
    },
    {
      id: 2,
      name: "良性互動",
      text: "此頁面由社群從英文翻譯而來。了解更多並加入 MDN Web Docs 社群。",
    },
    {
      id: 3,
      name: "趨勢分享",
      text: "屬性為一個逗號分隔的列表描述一個或多個的陰影效果. 這使的你能夠從幾乎任何元素的框架放入陰影.。",
    },
  ]



  return (
    <>
      <div className="wrap">

        <header>
          <img src="images\banner.jpg" alt="" />
        </header>

        <div className="content" >

          <ShowContent arrData={cont1} />

          {/* {
            cont1.map((item) => {
              return (
                <>
                  <div className="box" key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.text}</p>
                  </div>
                </>
              )
            })
          } */}

        </div>

        {/*
          <div className="box">
            <h2>{cont1.a1.name}</h2>
            <p>{cont1.a1.text}</p>
          </div>
          <div className="box">
            <h2>{cont1.a2.name}</h2>
            <p>{cont1.a2.text}</p>
          </div>
          <div className="box">
            <h2>{cont1.a3.name}</h2>
            <p>{cont1.a3.text}</p>
          </div>
         */}

        <div className="title">
          <h3>讓學習成為一種習慣</h3>
        </div>

        <div className="content2" >
          <h2>推薦課程</h2>
          <div className="cards">
            <ShowContentClass />

          </div>
        </div>


        <footer>
          <p>&copy; 2024.11.12 ★ 劉忞沅 ★</p>
        </footer>
      </div>
    </>
  )
}


export default App
