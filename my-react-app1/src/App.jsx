import "./App.css";
import ShowContent from "./ShowContent.jsx";
import ShowContentClass from "./ShowContentClass.jsx";





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
        </div>


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
