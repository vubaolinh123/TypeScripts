import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/"><img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /></a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/admin/dashboard" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang Chủ</a>

                                <a href="/admin/category" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Danh Mục</a>

                                <a href="/admin/product" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</a>

                                <a href="/admin/bill" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Đơn Hàng</a>

                                <a href="/admin/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News4</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar