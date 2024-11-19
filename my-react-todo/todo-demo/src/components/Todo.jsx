// 解構props的屬性名，用{屬姓名}包起來
function Todo({todo}) {
    return (
        <div className="todo">
            {/* <p>todo</p> */}
            {/* <p>{todo}</p> */}
            <p>{todo.content}</p>
        </div>
    )
}

export default Todo