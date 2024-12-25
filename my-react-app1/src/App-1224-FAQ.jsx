import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";


export default function App() {

  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const questions = [
    {
      id: 1,
      question: "題目1",
      ans: "答案1Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero error totam non quis. In obcaecati, doloribus quibusdam est consequatur asperiores ea nam delectus suscipit inventore dignissimos, vero a corporis eligendi facere, fugit numquam voluptatum quo culpa doloremque possimus. Magnam autem, minus in consectetur animi reiciendis sequi eos omnis perferendis?"
    },
    {
      id: 2,
      question: "題目2",
      ans: "答案2"
    },
    {
      id: 3,
      question: "題目3",
      ans: "答案3"
    }
  ]

  return (
    <>
      <div className="wrapper" style={{
        backgroundColor: "black",
        maxWidth: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ccc",
      }}>
        {/* FAQ */}
        <div className="faq" style={{
          width: "70%",
          backgroundColor: "grey",
          padding: "10px",
          borderRadius: "8px",

        }}>
          <h2 style={{
            padding: "0", margin: "0", textAlign: "center", marginBottom: "10px"
          }}>FAQ-Accordion
          </h2>
          {
            // 帶出陣列資料
            questions.map((q) => {
              return (
                <div key={q.id} style={{ marginBottom: "5px" }}>
                  {/* QA按鈕 */}
                  <button style={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "5px",
                    border: "none",
                    outline: "none",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize:"1rem",
                  }}
                    onClick={() => setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
                  >
                    {/* 帶出題目 */}
                    {q.question}

                    {/* icon */}
                    {
                      activeQuestionId === q.id ? <FaMinusCircle /> : <FaPlusCircle />
                    }
                  </button>

                  {/* ans摺疊動畫:motion => https://motion.dev/docs/react-scroll-animations */}
                  <AnimatePresence>
                    {
                      // 作用中的id與點擊的id相同時
                      activeQuestionId===q.id && (
                        <motion.div 
                        // 初始化
                        initial={{opacity:0,height:0}}
                        // 展開的動畫
                        animate={{opacity:1,height:"auto"}}
                        // 收起來的動畫
                        exit={{opacity:0,height:0}}
                        style={{padding:"10px",color:"#fff",fontSize:"1rem"}}
                        >
                          {/* 答案 */}
                          {q.ans}
                        </motion.div>
                      )
                    }
                  </AnimatePresence>
                </div>
              )
            })
          }


        </div>
      </div>

    </>
  )
}