import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAdmin from '../../components/Admin/NavBar/NavBarAdmin'
import Footer from '../../components/Footer/Footer'




type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div className="min-h-full">
            <NavBarAdmin />
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Thêm Mới Sản Phẩm</h1>
                </div>
            </header>
            <div className="max-w-7xl mx-auto py-6 ">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout