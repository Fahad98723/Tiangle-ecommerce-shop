import { CircularProgress, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import useFirebase from "./useFirebase"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://arcane-earth-75147.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return {products}
}

export default useProducts