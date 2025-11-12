import { useState } from "react"
import useFetchUser from "./Custom Hooks/useFetchUser"

const Pagination = () => {

    const [input, setInput] = useState("")

    const [currentPage, setCurrentPage] = useState(0)
    const [userData] = useFetchUser()

    const PAGE_COUNT = 10
    const userCount = userData.length
    const totalPage = Math.ceil(userCount / PAGE_COUNT)
    const start = currentPage * PAGE_COUNT
    const end = start + PAGE_COUNT

    const filteredList = userData.filter((user) => {
        return user.firstName.toLowerCase().includes(input.toLowerCase()) ||
            user.lastName.toLowerCase().includes(input.toLowerCase()) ||
            user.id === Number(input)
    })

    const handlePrev=()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    const handleNext=()=>{
        if(currentPage<totalPage-1){
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => {
                setCurrentPage(0)
                setInput(e.target.value)
            }} />

            <div>
                <button onClick={handlePrev} disabled={currentPage===0}>Prev</button>
                {[...Array(totalPage).keys()].map((n) => (
                    <button onClick={() => setCurrentPage(n)} key={n}>{n + 1}</button>
                ))}
                <button onClick={handleNext} disabled={currentPage===totalPage-1}>Next</button>
                <div>Current Page:{currentPage + 1}</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredList.slice(start, end).map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName + " " + user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Pagination