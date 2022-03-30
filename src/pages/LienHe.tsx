import React from 'react'

type Props = {}

const LienHe = (props: Props) => {
    return (
        < main className="grid grid-cols-8 gap-3 my-2 relative" >
            <div id="contact" className="col-span-8 bg-[#fafafa]">
                <h2 className="text-center text-black text-2xl font-bold my-3">Liên Hệ Với Chúng Tôi</h2>
                <div className="grid grid-cols-6 gap-3 my-3">
                    <div id="map" className="col-span-4 border border-gray-300">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.562813340047!2d105.75026011488374!3d21.050171985986807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454e8a4d0bed7%3A0xd6b982ecb25fb149!2zxJDhu6ljIERp4buFbiwgUGjDumMgRGnhu4VuLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1642427513056!5m2!1svi!2s" width="846" height="600" loading="lazy"></iframe>
                    </div>
                    <form action="" className="col-span-2 border border-black py-2 px-4">
                        <h2 className="font-bold text-center text-2xl">Thông Tin Liên Hệ</h2>
                        <div className="form-group">
                            <label className="block py-2 font-bold text-lg">Họ và tên</label>
                            <input type="text" className="border border-black w-full px-2 py-2" placeholder="Họ và tên..." />
                        </div>
                        <div className="form-group">
                            <label className="block py-2 font-bold text-lg">Email</label>
                            <input type="text" className="border border-black w-full px-2 py-2" placeholder="Email..." />
                        </div>
                        <div className="form-group">
                            <label className="block py-2 font-bold text-lg">Số Điện Thoại</label>
                            <input type="number" className="border border-black w-full px-2 py-2" placeholder="Số Điện Thoại..." />
                        </div>
                        <div className="form-group">
                            <label className="block py-2 font-bold text-lg">Tin Nhắn</label>
                            <textarea className="border border-black w-full px-1 py-1"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="text-black bg-white font-bold text-xl px-4 py-2 border border-black hover:text-white hover:bg-black inline-block my-2">GỬI</button>
                        </div>
                    </form>
                </div>
            </div>
        </main >
    )
}

export default LienHe