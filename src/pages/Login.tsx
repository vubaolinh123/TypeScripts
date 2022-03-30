import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { dangky, login } from '../api/auth'
import { ProductType } from './types/product'

type FormInputs = {
    email: String,
    password: String
}

const Login = () => {
    const { register, handleSubmit, formState } = useForm<FormInputs>()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormInputs> = async (dataUser) => {
        const { data } = await login(dataUser)
        localStorage.setItem('user', JSON.stringify(data));
        navigate("/")
    }
    return (
        <main className="grid grid-cols-8 gap-3 my-2 relative">
            <div className="col-span-8 bg-grey-lighter min-h-screen flex flex-col bg-[#f3f7f9]">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <form action="" className="form">
                            <h1 className="mb-8 text-3xl text-center">Đăng Nhập</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4 email"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4 password"
                                name="password"
                                placeholder="Password" />
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 text-white  my-1"
                            >Đăng Nhập</button>
                        </form>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Bạn chưa có tài khoản?
                        <Link className="no-underline border-b border-blue-500 text-blue-500" to="/register">
                            Đăng Ký
                        </Link>.
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login