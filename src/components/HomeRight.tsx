import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const HomeRight = (props: Props) => {
    return (
        <div className="main-right col-span-6">
            <div className="tittle-sp bg-red-500 text-white text-xl py-3 px-5 text-center">
                <span className="">TẤT CẢ CÁC SẢN PHẨM MỚI NHẤT</span>
            </div>
            <div className="py-3 grid grid-cols-3 gap-3">
                <div className="sanpham border border-gray-400 text-center">
                    <Link to="/products/"><img src="https://i.imgur.com/5vbUxov.jpg" /></Link>
                    <Link to="/products/" className="block my-3"><span className="name-sp text-xl">San Pham Test</span></Link>
                    <div className="render-price">
                        <span className="giamgia text-[#888] text-base line-through">Giá Gốc: 1
                            <span className="bg-red-500 text-white rounded-2xl  inline-block px-2 mx-2">20%</span>
                        </span>
                        <span className="gia block text-[#ed0000] text-xl font-semibold">Giảm Giá:
                            15</span>
                        <span className="gia block text-gray-600 text-xl font-semibold">Tình Trạng: CÒN HÀNG</span>
                    </div>
                    <Link to="/products/" className="inline-block my-5 text-white bg-red-500 py-2 px-4 text-xl">Chi tiết <i
                        className="fas fa-chevron-circle-right "></i></Link>
                </div>
            </div>
        </div>

    )
}

export default HomeRight