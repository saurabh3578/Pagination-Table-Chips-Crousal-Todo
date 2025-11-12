import axios from "axios"
import { useEffect, useState } from "react"

const useFetchUser=()=>{
    const [userData, setUserData]=useState([])

    const fetchData=async()=>{
        const response=await axios.get("https://dummyjson.com/users?limit=500")
        setUserData(response.data.users)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return [userData]
}

export default useFetchUser