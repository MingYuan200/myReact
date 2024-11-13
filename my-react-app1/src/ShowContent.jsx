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
export default ShowContent