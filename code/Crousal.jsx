import { useState } from "react"

const Crousal = ({ data = [] }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const handlePrev=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleNext=()=>{
        if(currentPage<data.length-1){
            setCurrentPage(currentPage+1)
        }
    }

    const currentCard = data[currentPage]

    if(data.length===0){
        return <h1>No Cards available</h1>
    }

    return (
        <div>
            <h1>{currentCard.title}</h1>
            <p>{currentCard.discription}</p>
            <div>
                <button onClick={handlePrev} disabled={currentPage===0}>Prev</button>
                <span>{currentPage + 1} of {data.length}</span>
                <button onClick={handleNext} disabled={currentPage===data.length-1}>Next</button>
            </div>
        </div>
    )
}
export default Crousal