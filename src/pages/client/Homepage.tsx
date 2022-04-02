import React from 'react'
import ContainerHome from '../../components/Container/ContainerHome'
import Slider from '../../components/Slider/Slider'


type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
      <Slider />
      <ContainerHome />
    </div>
  )
}

export default Homepage