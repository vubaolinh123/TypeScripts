import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="grid grid-cols-8 gap-5 bg-[#f1f0f1] py-3 px-2 sticky top-0 z-50 border  border-gray-300 border-y-0">
            <div className="col-span-1">
                <img src="https://i.imgur.com/KG5GDXw.png" alt="" />
            </div>
            <div className="col-span-5 ">
                <ul className="menu">
                    <li className="inline-block mx-3"><NavLink to="/" className="block py-4 nav-link"><i className="fas fa-house-damage"></i>
                        Trang Chủ</NavLink></li>
                    <li className="inline-block mx-3"><NavLink to="/lienhe" className="block py-4 nav-link"><i
                        className="far fa-address-book"></i> Liên
                        Hệ</NavLink></li>
                    <li className="inline-block mx-3"><NavLink to="/login" className="block py-4 nav-link"><i className="far fa-user"></i>
                        Đăng Nhập</NavLink></li>
                    <li className="inline-block mx-3"><NavLink to="/register" className="block py-4 nav-link"><i className="fas fa-user"></i>
                        Đăng
                        Ký</NavLink></li>
                    <li className="inline-block mx-3"> <NavLink to="/cart" className="block py-4 nav-link">
                        <i className="fas fa-shopping-cart"></i> Giỏ Hàng
                        <span className="bg-red-500 text-white rounded-2xl  inline-block px-2">1</span>
                    </NavLink>
                    </ li>
                    <li className="inline-block mx-3"><NavLink to="/admin/dashboard" className="block py-4 nav-link"><i
                        className="fas fa-user"></i> Admin </NavLink>
                    </li>
                    <li className="inline-block mx-3">
                    </li>
                </ul>
            </div>
            <div className="col-span-2 py-3">
                <form id="formSearch">
                    <input id="search" type="text" className="border border-black mx-5" />
                    <button className="text-white bg-black px-1">Tìm Kiếm</button>
                </form>
            </div>
        </header>
    )
}

export default Header