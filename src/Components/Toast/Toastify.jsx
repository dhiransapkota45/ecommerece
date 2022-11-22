import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { emptyerror } from '../../redux/login/loginActionCreator';

const Toastify = () => {
    const dispatch = useDispatch()
    const { error } = useSelector((store) => store.signup)
    const { errorLogin } = useSelector((store) => store.login)

    useEffect(() => {
        const notify = () => toast(error);

        notify();

    }, [error])

    useEffect(() => {
        const notify = () => toast(errorLogin);

        notify();
    }, [errorLogin])
    return(
        <>
            <ToastContainer />
        </>
    )
}

export default Toastify