import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";



export default function App() {

  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

  const api = 'https://api.unsplash.com/search/photos';
  const accessKey = 'Zjq2iPgEBpF7pRQsjeS-JTELWv0K6BQMZIsRQ4B2sjo';
  const [filterString, setFilterString] = useState('wolf');
  const [jsonData, setJsonData] = useState([]);
  // 讀取變數
  const isLoading = useRef(false);
  // 頁數
  const currentPage = useRef(1);

  // 建立非同步方法，取得遠端資料
  const getPhotos = async (page, isNew) => {
    try {
      isLoading.current = true;
      // console.log(`${api}?client_id=${accessKey}&query=${filterString}`);
      // 發出請求給遠端api，傳回結果
      // &page=${page}需要加上這一個請求資料的條件，才會再回傳新一筆資料
      const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}&page=${page}`);
      // 全部資料
      // console.log(result);
      // 第一頁10筆資料
      // console.log(result.data.results);
      // 只會保存當前頁面的資料
      // setJsonData(result.data.results);
      // 若要保存不同頁面的資料=>加上...展開語法
      setJsonData((preData) => {
        // 是否為新的關鍵字
        // 若為新的關鍵字=>則覆蓋目前的關鍵字結果
        if (isNew) {
          return [...result.data.results]
        }
        // 先前的資料+當前的資料
        return [...preData, ...result.data.results];
      })

      // 更新頁數
      currentPage.current = page;

      // 1秒鐘之後取消寫入
      setTimeout(() => {
        isLoading.current = false;
      }, 1000);

    } catch (error) {
      // 錯誤發生時，顯示訊息
      console.log(error);
    }
  }

  // 列表高度
  const lisrtRef = useRef(null);

  // 避免重新渲染=>所以寫在useEffect中
  useEffect(() => {
    getPhotos(1, true);

    // 滾動監聽函式
    const scrollEvent = () => {
      // console.dir(lisrtRef.current);
      // 取得目前圖片列表的高度
      const height = (lisrtRef.current.offsetHeight + lisrtRef.current.offsetTop) - window.innerHeight;
      // 
      if (!isLoading.current && window.scrollY >= height) {
        // 頁數+1
        currentPage.current++;
        // 同一個關鍵字資料不用覆蓋，所以補上false
        getPhotos(currentPage.current, false);
      }
    }

    // 滾動監聽
    window.addEventListener('scroll', scrollEvent);
    // 移除監聽
    return () => window.removeEventListener('scroll', scrollEvent);

  }, [filterString]) //filterString被異動時，再次觸發顯示圖片

  // 建立顯示圖片元件
  const Card = ({ item }) => {
    return <img src={item.urls.regular} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  }

  // 建立搜尋元件
  const SearchBox = ({ onSearchHandler, filterString }) => {
    return (
      <div
        style={{ textAlign: "center", margin: "50px 0" }}
        
      >
        <label htmlFor="filter">請輸入關鍵字</label>
        <input type="text" id="filter"
          defaultValue={filterString}
          onKeyUp={onSearchHandler}
          style={{
            fontSize: "1.2rem",
            color: "#888",
            padding: "5px",
            marginLeft: "20px"
          }}
        />
      </div>
    )
  }

  // 按下enter時，更改filterString資料的函式
  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      setFilterString(e.target.value);
    }
  }


  return (
    <>

      <div style={{
        width: "50%", margin: "auto"
      }}>
        <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />


        <div className="imgWrapper"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            alignContent: "space-between",
          }}
          ref={lisrtRef} //綁定圖片列表高度
          >

          {
            jsonData.map((item, index) => {
              return (
                <div key={index} style={{
                  width: "48%",
                  height: "60vh",
                  borderRadius: "8px",
                  overflow: "hidden",
                  margin: "10px auto"
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