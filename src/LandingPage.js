import { useContext, useEffect } from "react"
import axios from "axios"
import AuthContext from "./contexts/authContext"

export default function LandingPage ( { category }) {
    
    useEffect(() => {
        const promise = axios.get(`htpp://localhost:5000/getProducts?category=${category.category}?subCategory=${category.subCategory}`)

        promise.then(() => {
            console.log("ok")
        })

        promise.catch(() =>  console.log("deu ruim"))
    }, [category])

    console.log(category)
    return(
        <></>
    )
}