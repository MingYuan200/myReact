import { useState, useMemo } from "react"



export default function App() {
  // 商品
  const prodData = [
    {
      id: 1,
      title: '檸檬塔',
      price: '80',
      imgUrl: './images2/01.jpg',
    },
    {
      id: 2,
      title: '生乳捲',
      price: '280',
      imgUrl: './images2/02.jpg',
    },
    {
      id: 3,
      title: '紅絲絨蛋糕',
      price: '888',
      imgUrl: './images2/03.jpg',
    },
    {
      id: 4,
      title: '巧克力塔',
      price: '95',
      imgUrl: './images2/04.jpg',
    },
    {
      id: 5,
      title: '黑森林蛋糕',
      price: '1200',
      imgUrl: './images2/05.jpg',
    }
  ]

  // 建立表格元件
  const ProdTable = ({ filterProds }) => {
    return (
      <table style={{ width: '500px', marginTop: '20px' }}>
        <tbody>
          {
            // 用修改後的filterProds做處理，非原本的prodData
            filterProds.map((prod) => {
              return (
                <tr key={prod.id} >

                  <td style={{
                    borderBottom: '1px dashed #999',
                    padding: '5px',
                  }}>
                    <figure>
                      <img src={prod.imgUrl} alt="" style={{
                        width: '100px',
                        verticalAlign: 'top',
                        borderRadius: '5px',
                        margin:'5px 0',
                      }} />
                      <figcaption>
                      {prod.title}
                      </figcaption>
                    </figure>
                  </td>

                  <td style={{
                    borderBottom: '1px dashed #999',
                    padding: '5px',
                    textAlign: 'right',
                    fontWeight:'bold',
                  }}>{prod.price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  // 陣列變數，預設為元商品陣列資料
  const [prods, setProds] = useState(prodData);
  // 排序變數，預設為遞增
  const [ascending, setAscending] = useState(true);
  // 搜尋變數
  const [search, setSearch] = useState('');

  // 建立排序與搜尋的函式
  const filterProds = useMemo(() => {
    return [...prods]
      // 如果是true=>小到大排序(a=>b)以金額排序
      // false =>大到小排序
      .sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
      })
      .filter((prod) => {
        return prod.title.match(search);
      })

  }, [ascending, search]); //什麼情況被觸發=>[排序、搜尋]

  return (
    <>
      <h2>useMemo搜尋、排序</h2>
      <hr style={{ marginBottom: "50px" }} />

      升降冪：<input
        type="checkbox"
        checked={ascending}
        onChange={(e) => setAscending(e.target.checked)}
      /><br />
      搜尋：
      <input
        type="search"
        style={{ padding: '5px', fontSize: '1rem' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* 呼叫表格元件 */}
      <ProdTable filterProds={filterProds} />

    </>
  )
}