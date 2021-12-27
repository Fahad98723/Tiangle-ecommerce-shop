import { CircularProgress, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import useFirebase from "./useFirebase"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setIsLoading(true)
            setProducts(data)
        })
        .finally(() => setIsLoading(false));
    },[])
    return {products, isLoading}
}

export default useProducts