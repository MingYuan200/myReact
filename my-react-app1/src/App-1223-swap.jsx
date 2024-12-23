import { useRef, useEffect, useState } from 'react';
// import $ from 'jquery'
import img1 from '/images2/01.jpg';
import img2 from '/images2/02.jpg';
import img3 from '/images2/03.jpg';
import img4 from '/images2/04.jpg';

export default function App() {

  // 建立圖片陣列
  const arrImg = [img1, img2, img3, img4];
  // 建立目前縮圖的變數 => 預設為第一張所以填0
  const [currentImg, setCurrentImg]= useState(0);

  return (
    <>
      <div className="wrapper">
        <section style={{
          display: "flex",
          flexDirection:"column-reverse",
          width: "500px",
          textAlign:"center",
          // justifyContent: "space-around",
          margin: "50px auto",
        }}>
          {/* 縮圖區 */}
          <div style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent:"center",
          }}>

            {
              arrImg.map((photo,index)=>{
                return(
                  <img key={index} src={photo} alt="photos" width={100} height={80} 
                  onClick={(e)=>setCurrentImg(index)} 
                  style={{cursor:"pointer",margin:"10px 2px 0", }}
                  />
                )
              })
            }

            {/* <img src={arrImg[0]} alt="photos" width={100} height={80} />
            <img src={arrImg[1]} alt="photos" width={100} height={80} />
            <img src={arrImg[2]} alt="photos" width={100} height={80} />
            <img src={arrImg[3]} alt="photos" width={100} height={80} /> */}
          </div>
          {/* 大圖區 */}
          <div>
            <img src={arrImg[currentImg]} alt="photos" width={450} height={350} 
            style={{verticalAlign: "top"}}/>
          </div>
        </section>
      </div>
    </>
  )
}