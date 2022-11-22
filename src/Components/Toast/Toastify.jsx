import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const Toastify = () => {
    const { error } = useSelector((store) => store.signup)
    console.log("hello");
    useEffect(() => {
        const notify = () => toast(error);

        notify();
    }, [error])
    return(
        <>
            <ToastContainer />
        </>
    )
}

export default Toastify