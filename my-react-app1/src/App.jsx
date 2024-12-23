import { useRef, useEffect, useState } from 'react';


export default function App() {
  // 建立背景圖片的路徑陣列物件
  const slides = [
    { url: "./images2/07.jpg", text: "photo-01" },
    { url: "./images2/02.jpg", text: "photo-02" },
    { url: "./images2/03.jpg", text: "photo-03" },
    { url: "./images2/04.jpg", text: "photo-04" },
    { url: "./images2/05.jpg", text: "photo-05" },
    { url: "./images2/06.jpg", text: "photo-06" },
  ];

  // 目前要顯示的圖片編號
  const [currentIndex, setCurrentIndex] = useState(0);
  // 下一張
  const nextSlides = () => {
    // 取得前一張的索引編號，檢查是否為最後一的編號
    // 是 => 回到第一張(編號0)
    // 否 => 跳下一張(編號+1)
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  // 自動輪播
  // 當currentIndex改變時，會觸發useEffect
  useEffect(() => {
    // 每3秒呼叫nextSlides()換下一張圖
    const autoplay = setInterval(() => {
      nextSlides();
    }, 3000);

    // 每3秒後，移除autoplay => 才能取得最新的編號
    return () => clearInterval(autoplay);
  }, [currentIndex]);




  // console.log(slides);
  return (
    <>
      <div className="wrapper" style={{
        border: "1px solid red",
        maxWidth: "100%",
        height: "90vh",
        margin: "auto",
      }}>
        {/* 滿版背景輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-end",
          alignContent:"flex-end",
        }}>
          <h2 style={{color:"#fff", textAlign:"center", padding:"12px"}}>{slides[currentIndex].text}</h2>
        </div>

      </div>

    </>
  )
}