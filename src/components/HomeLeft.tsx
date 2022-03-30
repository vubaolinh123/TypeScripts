import React from 'react'

type Props = {}

const HomeLeft = (props: Props) => {
    return (
        <div className="main-left col-span-2">
            <div className="border border-gray-300 bg-gray-100 mb-4 danhmuc">
                <span className="bg-red-600 text-white py-3 px-3 block text-lg"><i className="fas fa-bars mr-3"></i>Danh Mục
                    Các Loại Sản Phẩm</span>
                <ul className="main-menu px-4">
                    <li className="my-5"><a href="#" className=""><i className="fas fa-chevron-right text-red-600 mr-2"></i><a
                        href="/productCate/${cate.id}">CATE NAME</a>
                    </a></li>
                </ul>
            </div>
            <div className="border border-gray-300 bg-gray-100 danhmuc">
                <span className="bg-red-600 text-white py-3 px-3 block text-lg"><i className="fas fa-bars mr-3"></i>CÁC SẢN
                    PHẨM MỚI RA</span>
                <ul className="main-menu px-4">
                    <li className="my-5"><a href="#"><i className="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 1
                    </a></li>
                    <li className="my-5"><a href="#"><i className="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 2
                    </a></li>
                    <li className="my-5"><a href="#"><i className="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 3
                    </a></li>
                    <li className="my-5"><a href="#"><i className="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 4
                    </a></li>
                    <li className="my-5"><a href="#"><i className="fas fa-chevron-right text-red-600 mr-2"></i>SẢN PHẨM 5
                    </a></li>
                </ul>
            </div>
        </div >

    )
}

export default HomeLeft