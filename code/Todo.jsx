import { useState } from "react"

const Todo = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const addTask = () => {
        if (input.trim() === "") return
        setList([...list, { text: input, completed: false }])
        setInput("")
    }

    const deleteTask = (indexToDelete) => {
        setList(list.filter((_, index)=>index!==indexToDelete))
    }

    const keyDown = (e) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    const toggle=(indexToToggle)=>{
        setList(list.map((item, index)=>{
            return index===indexToToggle
            ? {...item, completed: !item.completed}
            :item
        }))
    }

    return (
        <div>
            <h1>Simple ToDo List</h1>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={keyDown} />

            <div>
                {
                    list.map((item, index) => (
                        <ul key={index}>
                            <li
                             onClick={()=>toggle(index)}
                             style={{
                                textDecoration:item.completed?"line-through":"none",
                                cursor:"pointer"
                             }}
                             >
                                {item.text}
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    deleteTask(index)}}>X</button>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Todo