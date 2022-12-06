import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Wishlist = () => {
    const naviagate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            return
        } else {
            naviagate("/login")
        }
    }, [])
    return (
        <div>
            wishlist
        </div>
    )
}

export default Wishlist