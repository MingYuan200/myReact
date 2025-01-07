import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



export default function App() {

  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  const api = 'https://api.unsplash.com/search/photos';
  const accessKey = 'Zjq2iPgEBpF7pRQsjeS-JTELWv0K6BQMZIsRQ4B2sjo';
  const [filterString, setFilterString] = useState('wolf');
  const [jsonData, setJsonData] = useState([]);

  // 建立非同步方法，取得遠端資料
  // 避免重新渲染=>所以寫在useEffect中

  useEffect(() => {
    const getPhotos = async () => {
      console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
      // 發出請求給遠端api，傳回結果
      const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
      // 全部資料
      // console.log(result);
      // 第一頁10筆資料
      console.log(result.data.results);
      setJsonData(result.data.results);
    }
    getPhotos();
  }, [])

  // 建立顯示圖片元件
  const Card = ({ item }) => {
    return <img src={item.urls.regular} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  }

  return (
    <>

      <div style={{ width: "630px", margin: "auto", padding: "100px 0" }}>
        <h2>串接unsplash</h2>
        <div style={{ width: "fit-content", margin: "20px 0" }}>
          <label htmlFor="search">搜尋</label><br />
          <input style={{ width: "610px", lineHeight: "1.2rem", padding: "10px", margin: "10px 0" }} type="text" id="search" />
        </div>


        <div className="imgWrapper"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "30px",
            flexWrap: "wrap",
          }}>

          {
            jsonData.map((item) => {
              return (
                <div key={item.id} style={{
                  backgroundColor: "grey",
                  width: "300px",
                  height: "50vh",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}>

                  {/* 一般寫法 */}
                  {/* <img src={item.urls.regular} alt="" style={{ width: "100%",height:"100%" ,objectFit: "cover" }} /> */}

                  {/* 轉為元件的方式 */}
                  <Card item={item} />
                </div>

              )
            })
          }

        </div>
      </div>

    </>
  )
}