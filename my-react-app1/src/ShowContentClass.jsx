// 課程區元件
function ShowContentClass() {
    // 資料
    const data2 = [
        {
            id: 1,
            img: "images/unity.jpg",
            title: "Unity 5",
            p1: "最新的課程，讓你一步步做出心中的遊戲，讓你一步步做出心中的遊戲。",
            p2: "講師：Luna",
            p3: "影音課程時數：4小時",
            p4: "原價 NT$3200",
            p5: "NT$ 1600",
        },
        {
            id: 2,
            img: "images/gamesalad.jpg",
            title: "Gamesalad",
            p1: "視覺化操作，2D遊戲快速開發，不會寫程式的你一樣可以寫遊戲。",
            p2: "講師：Lily Chen",
            p3: "影音課程時數：12小時",
            p4: "原價 NT$8888",
            p5: "NT$ 4500",
        },
        {
            id: 3,
            img: "images/gwd.jpg",
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
export default ShowContentClass