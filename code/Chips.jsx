import { useState } from "react"

const Chips = () => {
    const [input, setInput] = useState("")
    const [chips, setChips] = useState([])

    const addChips = () => {
        if (input.trim() === "") return
        setChips([...chips, input])
        setInput("")
    }

    const deleteChips = (indexToDelete) => {
        setChips(chips.filter((_, index)=>index!==indexToDelete))
    }

    const keyDown=(e)=>{
        if(e.key==="Enter"){
            addChips()
        }
    }


    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={keyDown} />
            <button onClick={addChips}>Add</button>
            <div>
                {
                    chips.map((chip, index)=>(
                        <span key={index}>
                            {chip}
                            <button onClick={()=>deleteChips(index)}>X</button>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
export default Chips