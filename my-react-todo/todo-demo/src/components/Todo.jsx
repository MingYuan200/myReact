import { MdDelete, MdEdit } from "react-icons/md";

// 解構props的屬性名，用{屬姓名}包起來
function Todo({ todo, deleteTodo, toggleCompleted }) {
    return (
        // 新增一個completed類別規則
        // 使用反引號搭配三元運算子，檢查isCompleted
        // 如果為真=>套用completed類別規則
        // 如果為否=>取消completed類別規則=>''
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            {/* <p>todo</p> */}
            {/* <p>{todo}</p> */}
            <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
            <div className="icon">
                <MdEdit style={{ cursor: 'pointer' , marginLeft: '8px' }} />
                <MdDelete
                    onClick={() => { deleteTodo(todo.id) }}
                    style={{ cursor: 'pointer', marginLeft: '8px' }} />
            </div>
        </div>
    )
}

export default Todo