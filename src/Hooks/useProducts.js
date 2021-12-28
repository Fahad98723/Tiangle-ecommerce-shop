import { CircularProgress, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import useFirebase from "./useFirebase"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return {products}
}

export default useProducts