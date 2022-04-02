import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'


type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default WebsiteLayout