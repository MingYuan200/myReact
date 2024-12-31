import { useState } from "react"



export default function App() {
  // 單價變數
  const [price, setPrice] = useState(100);
  // 數量變數
  const [qty, setQty] = useState(1);
  // 總價變數
  const tot = price * qty;



  return (
    <>
      <h2>useMemo</h2>
      <hr style={{ marginBottom: "50px" }} />

      {/* 單價 */}
      <label htmlFor="price">單價：</label>
      <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
      {/* 數量 */}
      <label htmlFor="count">數量：</label>
      <input type="number" id="count" value={qty}
        onChange={(e) => {
          if (e.target.value <= 0) {
            alert("err");
            setQty(1);
          } else {
            setQty(e.target.value);
          }
        }} />
      <div>
        總價：{tot}
      </div>


    </>
  )
}