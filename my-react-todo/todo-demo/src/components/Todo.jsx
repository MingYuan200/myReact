import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構props的屬性名，用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    return (
        // 檢查todo.isEdit是否為修改狀態
        todo.isEdit
            // isEdit:true
            // 呼叫EditForm元件。並傳入todo資料
            ? <EditForm todo={todo} editTodo={editTodo}/>

            // 新增一個completed類別規則
            // 使用反引號搭配三元運算子，檢查isCompleted
            // 如果為真=>套用completed類別規則
            // 如果為否=>取消completed類別規則=>''
            // isEdit:false
            // 顯示todo資料
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p>todo</p> */}
                {/* <p>{todo}</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div className="icon">
                    <MdEdit
                        onClick={() => { toggleIsEdit(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '8px' }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: 'pointer', marginLeft: '8px' }} />
                </div>
            </div>
    )
}

export default Todo