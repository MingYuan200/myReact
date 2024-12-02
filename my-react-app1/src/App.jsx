import { useEffect } from "react"
import axios from "axios";
import "./App.css";


function App() {

  //非同步讀取json資料
  useEffect(() => {
    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      console.log(location);
    })
  }, [])


  return (
    <>
      <h2>36小時天氣預報</h2>
      <div className="city">
        <div className="city-box">
          <h3>台北市</h3>
          <div className="day">
            <div className="day-1">
              <p>2日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" /></figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="day-1">
              <p>2日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" />
              </figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="day-1">
              <p>3日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" />
              </figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>

        </div>
        <div className="city-box">
          <h3>新北市</h3>
          <div className="day">
            <div className="day-1">
              <p>3日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" />
              </figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="day-1">
              <p>3日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" />
              </figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="day-1">
              <p>3日</p>
              <p>上午6:00~下午6:00</p>
              <figure>
                <img src="../weathericon/多雲.svg" alt="" />
              </figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
export default App