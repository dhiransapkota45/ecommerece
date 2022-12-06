import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import instance from "../../api/api_instance"
import Banner from '../../Components/Banner/Banner'
import Card from './Card'

const Wishlist = () => {
    const naviagate = useNavigate()
    const [wishlistdata, setWishlistdata] = useState([])

    const fetchWishlist = async () => {
        const rawdata = localStorage.getItem("wishlistproducts")
        const wishlistids = JSON.parse(rawdata)
        const data = await instance.post("/wishlistproducts", { products: wishlistids })
        setWishlistdata(data.data.data)
    }

    const deleteHandler = (id) => {
        const data = wishlistdata
        const newdata = data.filter((data) => data._id !== id)
        setWishlistdata(newdata)
        const localStoragearray = []
        newdata.map((data) => {
            return localStoragearray.push(data._id)
        })
        console.log(localStoragearray);
        localStorage.setItem("wishlistproducts", JSON.stringify(localStoragearray))
    }

    console.log(wishlistdata);

    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            fetchWishlist()
        } else {
            naviagate("/login")
        }
    }, [])
    return (
        <>
            <Banner title="Wishlist" />

            <div className=' w-full flex justify-center'>
                <div className=' my-16 w-full sm:w-4/5 mx-3 '>

                    {
                        wishlistdata.length === 0 ? <div>No items in wishlist</div> : wishlistdata.map((wishlist) => {
                            return (
                                <Card {...wishlist} deleteHandler={deleteHandler} />
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Wishlist